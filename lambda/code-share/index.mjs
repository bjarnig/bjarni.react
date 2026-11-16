import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({});
const { BUCKET, WRITE_KEY } = process.env;
const MAX_BYTES = 200 * 1024;

const reply = (statusCode, body) => ({
  statusCode,
  headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  body: JSON.stringify(body),
});

export const handler = async (event) => {
  const room = event.queryStringParameters?.room ?? '';
  if (!/^[a-z0-9-]{1,32}$/.test(room)) return reply(400, { error: 'bad room' });
  const Key = `rooms/${room}.json`;
  const method = event.requestContext.http.method;

  if (method === 'GET') {
    try {
      const obj = await s3.send(new GetObjectCommand({ Bucket: BUCKET, Key }));
      return reply(200, JSON.parse(await obj.Body.transformToString()));
    } catch (e) {
      if (e.name === 'NoSuchKey') return reply(200, { text: '', updated: 0 });
      throw e;
    }
  }

  if (method === 'PUT') {
    if (event.headers['x-key'] !== WRITE_KEY) return reply(403, { error: 'forbidden' });
    const raw = event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString() : event.body;
    if (!raw || raw.length > MAX_BYTES) return reply(413, { error: 'too large' });
    const doc = { text: String(JSON.parse(raw).text ?? ''), updated: Date.now() };
    await s3.send(new PutObjectCommand({
      Bucket: BUCKET, Key, Body: JSON.stringify(doc), ContentType: 'application/json',
    }));
    return reply(200, { updated: doc.updated });
  }

  return reply(405, { error: 'method not allowed' });
};
