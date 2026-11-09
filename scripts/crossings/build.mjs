// Assemble the Crossings demos: public/demos/crossings/<name>/index.html, one shared kit.
// node scripts/crossings/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, controlsOf, inputsOf } from './pages.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, '../../public/demos/crossings');
const kitSrc = path.resolve(here, '../../public/demos/genesis/kit');
const read = f => fs.readFileSync(path.join(here, f), 'utf8');
const core = read('core.js'), worklet = read('worklet.js'), engine = read('engine.js');

function control(c) {
  if (c.options) {
    const opts = c.options.map(([v, n]) => `<option value="${v}"${v === c.val ? ' selected' : ''}>${n}</option>`).join('');
    return `    <label><span>${c.label}</span><select id="${c.id}">${opts}</select><output></output></label>`;
  }
  return `    <label><span>${c.label}</span><input type="range" id="${c.id}" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.val}"><output></output></label>`;
}

function html(name, d) {
  const demo = { ugen: d.ugen, view: d.view, count: d.count, seed: d.seed, preview: d.preview, inputs: inputsOf(d), fixed: d.fixed };
  const legend = d.legend.map(s => { const [v, t] = s.split(':'); return `<span><i style="background:var(${v})"></i>${t}</span>`; }).join('');
  const buttons = Object.keys(d.presets).map(p => `  <button class="preset" data-p="${p}">${(d.presetNames || {})[p] || p}</button>`).join('\n');
  const groups = d.groups.map(([legendText, cs]) => `  <fieldset>\n    <legend>${legendText}</legend>\n${cs.map(control).join('\n')}\n  </fieldset>`).join('\n');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Crossings, ${d.title} — Web Audio demo</title>
<link rel="stylesheet" href="../kit/kit.css">
<style>#view{height:190px;margin-bottom:.5rem}#spec{height:230px}body.compact #view{height:min(24vh,150px)}body.compact #spec{height:min(30vh,190px)}
#readout{color:var(--muted)}</style>
</head>
<body>

<h1>Crossings: ${d.title}</h1>
${d.sub ? `<p class="sub">${d.sub}</p>\n` : ''}${d.warn === false ? '' : '<p class="warn">Start with the gain low.</p>\n'}
<canvas id="view"></canvas>
<canvas id="spec"></canvas>
<div class="legend">
  ${legend}
  <span id="readout"></span>
</div>

<div class="row">
  <button id="play">play</button>
  <span style="color:var(--muted);font-size:.75rem">presets:</span>
${buttons}
</div>

<div class="grid">
${groups}
</div>

<p class="note">A JavaScript port of the SuperCollider UGens in <a href="https://github.com/bjarnig/Crossings" style="color:var(--accent)">Crossings</a>,
checked sample by sample against scsynth. The parameters carry the names of the UGen inputs.</p>

<script id="crossingscore" type="text/js-lib">
${core}
</script>
<script id="worklet" type="text/js-worklet">
${worklet}
</script>
<script src="../kit/kit.js"></script>
<script>
window.DEMO = ${JSON.stringify(demo)};
${d.maxHz ? `window.DEMO.maxHz = ${d.maxHz};` : ''}
window.PRESETS = ${JSON.stringify(d.presets)};
</script>
<script>
${engine}
</script>
</body>
</html>
`;
}

fs.mkdirSync(path.join(out, 'kit'), { recursive: true });
for (const f of ['kit.js', 'kit.css']) fs.copyFileSync(path.join(kitSrc, f), path.join(out, 'kit', f));
for (const [name, d] of Object.entries(pages)) {
  fs.mkdirSync(path.join(out, name), { recursive: true });
  fs.writeFileSync(path.join(out, name, 'index.html'), html(name, d));
}
console.log('built', Object.keys(pages).join(', '));
