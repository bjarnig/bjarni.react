// Assemble the VOSIM demos: public/demos/vosim/<name>/index.html, one shared kit.
// node scripts/vosim/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, '../../public/demos/vosim');
const kitSrc = path.resolve(here, '../../public/demos/genesis/kit');
const read = f => fs.readFileSync(path.join(here, f), 'utf8');
const core = read('core.js'), worklet = read('worklet.js'), engine = read('engine.js');

const S = (id, label, min, max, step, val) =>
  `    <label><span>${label}</span><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}"><output></output></label>`;
const fund = S('fund', 'pitch 1/T, Hz', 30, 500, 1, 110);
const form = (v = 880) => S('form', 'formant F, Hz', 200, 6000, 1, v);
const Nn = (v = 6) => S('N', 'N pulses', 1, 32, 1, v);
const bb = (v = 0.85) => S('b', 'b, level ratio', 0, 1, 0.005, v);
const gain = S('gain', 'gain', 0, 0.5, 0.005, 0.2).replace('<input', '<input data-fixed="true"');
const fs_ = (legend, ...rows) => `  <fieldset>\n    <legend>${legend}</legend>\n${rows.join('\n')}\n  </fieldset>`;
const btn = (p, t) => `  <button class="preset" data-p="${p}">${t}</button>`;

const pages = {
  period: {
    title: 'One period',
    sub: `One period of the VOSIM signal, as Tempelaars defines it: <code>N</code> pulses of sin&sup2;, each
<code>W</code> long, each lower than the one before by the constant ratio <code>b</code>, then silence until the
period <code>T</code> is over. The dashed line is the staircase envelope, the lower panel is the spectrum.
Blue lines are the harmonics of the signal, the green curve is the closed-form spectral envelope of the book.`,
    demo: { view: 'period' },
    presets: { voice: { fund: 110, form: 880, N: 6, b: 0.85 }, two: { fund: 110, form: 880, N: 2, b: 0.85 },
               many: { fund: 90, form: 1200, N: 16, b: 0.95 }, even: { fund: 110, form: 880, N: 6, b: 1 } },
    buttons: [btn('voice', 'N 6, b 0.85'), btn('two', 'two pulses'), btn('many', 'sixteen pulses'), btn('even', 'b = 1')],
    controls: [fs_('signal', fund, form(), Nn(), bb(), gain)],
    legend: `<span><i style="background:var(--accent)"></i>signal</span><span><i style="background:var(--mint)"></i>envelope</span><span><i style="background:var(--gold)"></i>W, F</span><span><i style="background:var(--rose)"></i>zero interval</span>`,
  },
  formant: {
    title: 'Pitch and formant',
    sub: `The two things a voice needs are controlled apart. The pitch is the period, <code>1/T</code>. The
formant is the pulse width, <code>F = 1/W</code>. Move one and the other stays where it was: the harmonics
slide along the same spectral hill, or the hill moves under the same harmonics. Switch on <code>sweep</code> to
hear the formant travel while the pitch holds.`,
    demo: { view: 'period' },
    presets: { low: { fund: 70 }, mid: { fund: 140 }, high: { fund: 280 } },
    buttons: [btn('low', 'pitch 70'), btn('mid', 'pitch 140'), btn('high', 'pitch 280')],
    controls: [fs_('signal', fund, form(1100), Nn(5), bb(0.8), gain,
      `    <label><span>sweep F</span><input type="checkbox" id="sweep"><output></output></label>`)],
    legend: `<span><i style="background:var(--accent)"></i>harmonics</span><span><i style="background:var(--mint)"></i>envelope</span><span><i style="background:var(--gold)"></i>F = 1/W</span><span><i style="background:var(--muted)"></i>heard (live)</span>`,
  },
  decay: {
    title: 'Pulses and decay',
    sub: `<code>N</code> and <code>b</code> shape the peak at <code>F</code>. A single pulse (<code>N</code> = 1) has a broad
hill; more pulses narrow it; <code>b</code> below 1 lets the staircase die away, which rounds the peak and fills the
dips. At <code>b</code> = 1 the dips between the lobes reach zero, and the harmonics that fall in them are absent from the
signal: with <code>T/W</code> = 8 and <code>N</code> = 4 only the odd harmonics and the eighth are left.`,
    demo: { view: 'period' },
    presets: { one: { N: 1, b: 1, fund: 100, form: 800 }, zero: { N: 4, b: 1, fund: 100, form: 800 }, soft: { N: 8, b: 0.6, fund: 100, form: 800 }, long: { N: 12, b: 0.92, fund: 100, form: 800 } },
    buttons: [btn('one', 'N = 1'), btn('zero', 'b = 1, T/W = 8'), btn('soft', 'b 0.6'), btn('long', 'N 12, b 0.92')],
    controls: [fs_('signal', fund.replace('value="110"', 'value="100"'), form(800), Nn(4), bb(1), gain)],
    legend: `<span><i style="background:var(--accent)"></i>harmonics</span><span><i style="background:var(--mint)"></i>envelope</span><span><i style="background:var(--gold)"></i>F</span>`,
  },
  zero: {
    title: 'The zero interval',
    sub: `The silence after the last pulse is the only part of the period that has to change when the pitch does. Here
the pulses stay exactly as they are and only the zero interval is modulated, so the pitch wavers while the formant
does not move. Tempelaars points to this: because of the zero interval the period can be modulated in a simple way.
The top panel draws four successive periods from the same function that the audio uses.`,
    demo: { view: 'periods' },
    presets: { still: { modDepth: 0 }, vib: { modDepth: 0.12, modRate: 5.5 }, wide: { modDepth: 0.4, modRate: 1.2 }, fast: { modDepth: 0.3, modRate: 9 } },
    buttons: [btn('still', 'none'), btn('vib', 'vibrato'), btn('wide', 'slow and wide'), btn('fast', 'fast')],
    controls: [fs_('signal', fund.replace('value="110"', 'value="100"'), form(1200), Nn(5), bb(0.85), gain),
      fs_('zero-interval modulation', S('modDepth', 'depth', 0, 0.6, 0.005, 0.2), S('modRate', 'rate, Hz', 0.2, 12, 0.1, 3))],
    legend: `<span><i style="background:var(--accent)"></i>signal</span><span><i style="background:var(--rose)"></i>zero interval</span><span><i style="background:var(--muted)"></i>heard (live)</span>`,
  },
  vowels: {
    title: 'Several in parallel',
    sub: `Tempelaars: combine several VOSIM functions with the same period and different pulse widths, and the signal
has as many formant peaks. Three of them share one pitch here, each with its own <code>F</code> and level. The
vowel buttons set typical first, second and third formants (approximate male averages after Peterson and Barney,
1952); they are illustrations, not values from the VOSIM literature.`,
    demo: { view: 'period' },
    presets: {
      a: { form: 730, form2: 1090, form3: 2440, g1: 1, g2: 0.7, g3: 0.35 }, e: { form: 530, form2: 1840, form3: 2480, g1: 1, g2: 0.6, g3: 0.35 },
      i: { form: 270, form2: 2290, form3: 3010, g1: 1, g2: 0.5, g3: 0.3 }, o: { form: 570, form2: 840, form3: 2410, g1: 1, g2: 0.8, g3: 0.3 },
      u: { form: 300, form2: 870, form3: 2240, g1: 1, g2: 0.6, g3: 0.25 } },
    buttons: ['a', 'e', 'i', 'o', 'u'].map(v => btn(v, v)),
    controls: [fs_('shared', fund.replace('value="110"', 'value="120"'), Nn(4), bb(0.8), gain),
      fs_('three voices', form(730).replace('formant F, Hz', 'F1, Hz'), S('g1', 'level 1', 0, 1, 0.01, 1), S('form2', 'F2, Hz', 200, 6000, 1, 1090), S('g2', 'level 2', 0, 1, 0.01, 0.7), S('form3', 'F3, Hz', 200, 6000, 1, 2440), S('g3', 'level 3', 0, 1, 0.01, 0.35))],
    legend: `<span><i style="background:var(--accent)"></i>harmonics of the sum</span><span><i style="background:var(--mint)"></i>voice 1 envelope</span><span><i style="background:var(--gold)"></i>F1, F2, F3</span><span><i style="background:var(--muted)"></i>heard (live)</span>`,
  },
  variants: {
    title: 'Three decays',
    sub: `The original has a staircase: every pulse is <code>b</code> times the one before. Other implementations differ.
The Csound <code>vosim</code> opcode subtracts a fixed amount from each pulse (documented as such). The book also
gives a recursive filter form (fig. 6.3.20) whose envelope is a smooth exponential. Choose one with <code>decay type</code>
and compare; only the first is the signal of Tempelaars (1977). The SuperCollider <code>VOSIM</code> UGen multiplies per
pulse, like the original.`,
    demo: { view: 'compare' },
    presets: { orig: { env: 0, b: 0.8 }, sub: { env: 1, decay: 0.15 }, smooth: { env: 2, b: 0.8 } },
    buttons: [btn('orig', 'original'), btn('sub', 'subtractive'), btn('smooth', 'smooth')],
    controls: [fs_('signal', fund.replace('value="110"', 'value="80"'), form(), Nn(8), bb(0.8), S('decay', 'd, subtractive', 0, 0.3, 0.005, 0.15), gain,
      `    <label><span>decay type</span><select id="env"><option value="0" selected>staircase b^n (original)</option><option value="1">subtractive 1 - n d</option><option value="2">smooth b^(t/W)</option></select><output></output></label>`)],
    legend: `<span><i style="background:var(--accent)"></i>playing</span><span><i style="background:var(--muted)"></i>other two</span>`,
  },
};

function html(name, d) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>VOSIM, ${d.title} — Web Audio demo</title>
<link rel="stylesheet" href="../kit/kit.css">
<style>#view{height:210px;margin-bottom:.5rem}#spec{height:250px}body.compact #view{height:min(26vh,170px)}body.compact #spec{height:min(30vh,200px)}
#readout{color:var(--muted)}input[type=checkbox]{justify-self:start}</style>
</head>
<body>

<h1>VOSIM: ${d.title}</h1>
<p class="sub">${d.sub}</p>
<p class="warn">Start with the gain low.</p>

<canvas id="view"></canvas>
<canvas id="spec"></canvas>
<div class="legend">
  ${d.legend}
  <span id="readout"></span>
</div>

<div class="row">
  <button id="play">play</button>
  <span style="color:var(--muted);font-size:.75rem">presets:</span>
${d.buttons.join('\n')}
</div>

<div class="grid">
${d.controls.join('\n')}
</div>

<p class="note">VOSIM (VOice SIMulation): Kaegi and Tempelaars, Institute of Sonology, Utrecht, 1970s. Definitions and the
spectrum formula are from Tempelaars, <i>Signal Processing, Speech and Music</i> (1996), section 4.3.</p>

<script id="vosimcore" type="text/js-lib">
${core}
</script>
<script id="worklet" type="text/js-worklet">
${worklet}
</script>
<script src="../kit/kit.js"></script>
<script>
window.DEMO = ${JSON.stringify(d.demo)};
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
