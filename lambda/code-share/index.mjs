import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({});
const { BUCKET } = process.env;
const MAX_BYTES = 200 * 1024;

const reply = (statusCode, body) => ({
  statusCode,
  headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  body: JSON.stringify(body),
});

async function read(Key) {
  try {
    const obj = await s3.send(new GetObjectCommand({ Bucket: BUCKET, Key }));
    return { doc: JSON.parse(await obj.Body.transformToString()), etag: obj.ETag };
  } catch (e) {
    if (e.name === 'NoSuchKey') return { doc: { text: '', updated: 0 }, etag: null };
    throw e;
  }
}

export const handler = async (event) => {
  const room = event.queryStringParameters?.room ?? '';
  if (!/^[a-z0-9-]{1,32}$/.test(room)) return reply(400, { error: 'bad room' });
  const Key = `rooms/${room}.json`;
  const method = event.requestContext.http.method;

  if (method === 'GET') return reply(200, (await read(Key)).doc);

  if (method === 'PUT') {
    const raw = event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString() : event.body;
    if (!raw || raw.length > MAX_BYTES) return reply(413, { error: 'too large' });
    const { text, base } = JSON.parse(raw);
    const current = await read(Key);
    // The client must have built on the latest version; otherwise it gets that version back to merge into.
    if (current.doc.updated !== base) return reply(409, current.doc);
    const doc = { text: String(text ?? ''), updated: Math.max(Date.now(), base + 1) };
    try {
      await s3.send(new PutObjectCommand({
        Bucket: BUCKET, Key, Body: JSON.stringify(doc), ContentType: 'application/json',
        ...(current.etag ? { IfMatch: current.etag } : { IfNoneMatch: '*' }),
      }));
    } catch (e) {
      // S3 answers 412 when another write already landed, 409 when one is still in flight.
      if ([409, 412].includes(e.$metadata?.httpStatusCode)) {
        return reply(409, (await read(Key)).doc);
      }
      throw e;
    }
    return reply(200, { updated: doc.updated });
  }

  return reply(405, { error: 'method not allowed' });
};
