#!/usr/bin/env node
// Prerender SPA routes to static HTML for SEO.
// Spawns `vite preview`, crawls each route with Puppeteer, captures the
// fully-rendered HTML (including Helmet-injected meta), writes
// dist/<route>/index.html.

import { spawn } from 'node:child_process';
import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const HOST = '127.0.0.1';
const PORT = 4173;
const ORIGIN = `http://${HOST}:${PORT}`;

// Public routes to prerender. Mirrors src/App.js routes that exist in
// public/sitemap.xml plus any other publicly indexable views.
// Private/disallowed routes (/pma, /pmb, /cwa, /workshops) are skipped.
const ROUTES = [
  '/',
  '/current',
  '/past',
  '/music',
  '/works',
  '/releases',
  '/courses',
  '/about',
  '/collaborations',
  '/code',
  '/writings',
  '/live',
  '/mixes',
  '/excerpts',
  '/visual',
  '/press',
  '/paths',
  '/processes',
];

function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {}
      if (Date.now() - start > timeoutMs) {
        return reject(new Error(`vite preview did not start within ${timeoutMs}ms`));
      }
      setTimeout(tick, 200);
    };
    tick();
  });
}

async function main() {
  if (!existsSync(DIST)) {
    console.error('dist/ does not exist. Run `npm run build` first.');
    process.exit(1);
  }

  console.log('🚀 Starting vite preview...');
  const previewProc = spawn(
    'npx',
    ['vite', 'preview', '--host', HOST, '--port', String(PORT), '--strictPort'],
    { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'] }
  );
  previewProc.stdout.on('data', (d) => process.stdout.write(`[preview] ${d}`));
  previewProc.stderr.on('data', (d) => process.stderr.write(`[preview] ${d}`));

  const cleanup = () => {
    if (!previewProc.killed) previewProc.kill('SIGTERM');
  };
  process.on('exit', cleanup);
  process.on('SIGINT', () => { cleanup(); process.exit(130); });

  try {
    await waitForServer(ORIGIN);
    console.log(`✅ vite preview ready at ${ORIGIN}`);

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    let count = 0;
    for (const route of ROUTES) {
      const page = await browser.newPage();
      const url = `${ORIGIN}${route}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        // Helmet writes async; small wait covers the next microtask.
        await new Promise((r) => setTimeout(r, 200));
        const html = await page.evaluate(() => '<!DOCTYPE html>\n' + document.documentElement.outerHTML);

        // Rewrite absolute hrefs/srcs that may point at the preview origin
        // back to relative paths (defense in depth — they shouldn't appear).
        const cleaned = html.replaceAll(`http://${HOST}:${PORT}`, '');

        const target = route === '/'
          ? join(DIST, 'index.html')
          : join(DIST, route, 'index.html');
        await mkdir(dirname(target), { recursive: true });
        await writeFile(target, cleaned, 'utf8');
        console.log(`📄 ${route} → ${target.replace(ROOT + '/', '')}`);
        count++;
      } catch (err) {
        console.error(`❌ Failed to prerender ${route}:`, err.message);
        process.exitCode = 1;
      } finally {
        await page.close();
      }
    }

    await browser.close();
    console.log(`✨ Prerendered ${count}/${ROUTES.length} routes.`);
  } finally {
    cleanup();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
