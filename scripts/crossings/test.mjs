// Assert what the pages claim, against the real worklet and core. With CROSSINGS_REF set to the
// folder written by reference.scd, also compare the core with scsynth sample by sample.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, inputsOf } from './pages.mjs';
const here = path.dirname(fileURLToPath(import.meta.url));
const SR = 48000, f32 = Math.fround;
globalThis.sampleRate = SR;
let Proc = null;
globalThis.AudioWorkletProcessor = class { constructor() { this.port = { postMessage() {}, onmessage: null }; } };
globalThis.registerProcessor = (n, c) => { Proc = c; };
const core = fs.readFileSync(path.join(here, 'core.js'), 'utf8');
new Function(core + '\n;\n' + fs.readFileSync(path.join(here, 'worklet.js'), 'utf8'))();
const L = new Function(core + '; return { UGENS, makeGenerator, RGen, Dseq, Dstutter, Dlin, Dmap, LPF, Ringz, DelayN, HearLoop };')();

let fails = 0;
function check(name, ok, detail) { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? '  ' + detail : '')); if (!ok) fails++; }
function run(cfg, seconds, recs) {
  const g = L.makeGenerator(cfg, SR), out = new Float32Array(Math.round(seconds * SR));
  if (recs) g.u.onWaveset = r => { r.at = i; recs.push(r); };
  let i = 0;
  for (; i < out.length; i++) out[i] = g.next();
  return out;
}
function period(recs) {
  const xs = recs.slice(-64).map(r => r.x);
  for (let p = 1; p <= 16; p++) { let ok = true; for (let i = p; i < xs.length; i++) if (Math.abs(xs[i] - xs[i - p]) > 1e-6) { ok = false; break; } if (ok) return p; }
  return 0;
}
const defaults = d => { const v = {}; for (const g of d.groups) for (const c of g[1]) v[c.id] = c.val; return v; };
const cfgOf = (d, over = {}) => {
  const v = Object.assign(defaults(d), over), p = {};
  for (const k of inputsOf(d)) p[k] = typeof v[k] === 'string' ? +v[k] : v[k];
  Object.assign(p, d.fixed);
  if ('smap' in v) p.r = { D: 'stutter', n: v.hold, src: { D: 'lin', src: { D: 'map', r: v.sr, map: v.smap }, mul: v.rHi - v.rLo, add: v.rLo } };
  return { ugen: d.ugen, p, seed: d.seed || 1, loop: { type: v.loop || 'lowpass', freq: v.loopFreq || 600, decay: 0.05, time: v.loopTime || 0.1 }, gain: 1 };
};

// 1. every page and every preset plays through the worklet: finite, bounded, not silent
for (const [name, d] of Object.entries(pages)) {
  for (const pre of [null, ...Object.keys(d.presets)]) {
    const g = new Proc();
    g.port.onmessage({ data: { type: 'params', value: cfgOf(d, pre ? d.presets[pre] : {}) } });
    const Lb = new Float32Array(128), Rb = new Float32Array(128);
    let peak = 0, sum = 0, finite = true;
    for (let b = 0; b < SR * 2 / 128; b++) { g.process([], [[Lb, Rb]], {}); for (const x of Lb) { if (!Number.isFinite(x)) finite = false; peak = Math.max(peak, Math.abs(x)); sum += x * x; } }
    const rms = Math.sqrt(sum / (SR * 2));
    if (!finite || peak > 1.0001 || rms < 1e-3) check(`${name}${pre ? ' / ' + pre : ''} plays`, false, `finite ${finite} peak ${peak.toFixed(3)} rms ${rms.toFixed(4)}`);
  }
}
check('every page and preset plays: finite, peak <= amp, not silent', fails === 0);

// 2. WsGen: balance removes the DC offset of a skewed waveset
{
  const dc = bal => { const y = run(cfgOf(pages.wavesets, { skew: 0.15, balance: bal, freq: 200 }), 1); let s = 0; for (let i = 0; i < 48000; i++) s += y[i]; return s / 48000; };
  const d0 = dc(0), d1 = dc(1);
  check('WsGen: skew 0.15 has DC, balance 1 removes it', Math.abs(d0) > 0.05 && Math.abs(d1) < 1e-3, `DC ${d0.toFixed(4)} -> ${d1.toExponential(1)}`);
}

// 3. WsMap: the logistic map's textbook periods at r 0.7, 0.8, 0.88 and none at 0.97
{
  const ps = [0.7, 0.8, 0.88, 0.97].map(r => { const recs = []; run(cfgOf(pages.map, { r }), 1, recs); return period(recs); });
  check('WsMap: periods 1, 2, 4 and chaos at r 0.7, 0.8, 0.88, 0.97', ps.join() === '1,2,4,0', `periods ${ps}`);
}

// 4. steer: r holds each value of the slow map for exactly `hold` wavesets
{
  const recs = []; run(cfgOf(pages.steer, { hold: 32 }), 2, recs);
  const runs = []; let n = 1;
  for (let i = 1; i < recs.length; i++) { if (recs[i].r === recs[i - 1].r) n++; else { runs.push(n); n = 1; } }
  check('steer: each r is held for 32 wavesets', runs.length > 3 && runs.every(k => k === 32), `runs ${runs.slice(0, 6)}...`);
}

// 5. WsNest: the drawn tree is what sounds, and the guard keeps every half-cycle at 4 samples or more
{
  const recs = [], y = run(cfgOf(pages.nest, { r: 0.95, lo: 1, hi: 12, depth: 3, branch: 3 }), 3, recs);
  const r = recs[1], len = SR / r.freq, lost = r.gain.filter((g, j) => j > 0 && (g > 0) === (r.gain[j - 1] > 0)).length;
  let zc = 0; for (let i = r.at + 1; i < recs[2].at; i++) if ((y[i] > 0) !== (y[i - 1] > 0) && y[i] !== 0 && y[i - 1] !== 0) zc++;
  check('WsNest: sign changes in the audio = half-cycles - removed crossings', Math.abs(zc - (r.gain.length - lost)) <= 2, `${zc} in audio, ${r.gain.length} halves - ${lost} removed`);
  const deep = []; run(cfgOf(pages.nest, { lo: 40, hi: 400, depth: 6, branch: 3 }), 1, deep);
  const shortest = Math.min(...deep.map(t => Math.min(...t.edge.slice(1).map((e, j) => e - t.edge[j])) * SR / t.freq));
  check('WsNest: no half-cycle under 4 samples at depth 6, 40..400 Hz', shortest >= 4, `shortest ${shortest.toFixed(2)} samples, levels ${deep[1].levels}`);
}

// 6. WsHear: couple 0 is WsMap exactly; a lowpass at couple 0.5 collapses period 2 onto one length
{
  const a = run(cfgOf(pages.hear, { couple: 0 }), 1);
  const b = run({ ugen: 'WsMap', p: { r: 0.8, lo: 60, hi: 1200, amp: 1, shape: 0, map: 0, skewDepth: 0, ampDepth: 0, init: 0.3, balance: 0, hyst: 0 }, seed: 1 }, 1);
  let md = 0; for (let i = 0; i < a.length; i++) md = Math.max(md, Math.abs(a[i] - b[i]));
  check('WsHear: couple 0 equals WsMap', md === 0, `max diff ${md}`);
  const p0 = [], p1 = [];
  run(cfgOf(pages.hear, { couple: 0, r: 0.8 }), 2, p0); run(cfgOf(pages.hear, { couple: 0.5, r: 0.8 }), 2, p1);
  check('WsHear: lowpass loop at couple 0.5 turns period 2 into a fixed point', period(p0) === 2 && period(p1) === 1, `periods ${period(p0)} -> ${period(p1)}`);
}

// 7. the core against scsynth (reference.scd)
const refDir = process.env.CROSSINGS_REF;
if (!refDir) console.log('SKIP comparison with scsynth: set CROSSINGS_REF to the folder written by reference.scd');
else {
  const b = fs.readFileSync(path.join(refDir, 'reference.wav')); let o = 12, ch, data;
  while (o < b.length) { const id = b.toString('ascii', o, o + 4), sz = b.readUInt32LE(o + 4); if (id === 'fmt ') ch = b.readUInt16LE(o + 10); if (id === 'data') data = b.subarray(o + 8, o + 8 + sz); o += 8 + sz + (sz & 1); }
  const f = new Float32Array(data.buffer.slice(data.byteOffset, data.byteOffset + data.length)), frames = f.length / ch;
  const { WsGen, WsMap, WsHear, WsGendy, WsGroup, WsNest } = L.UGENS;
  const M = o => new WsMap(Object.assign({ amp: 0.3, shape: 0, map: 0, skewDepth: 0, ampDepth: 0, init: 0.3, balance: 0, hyst: 0 }, o), SR);
  const H = o => new WsHear(Object.assign({ lo: 60, hi: 1200, amp: 0.3, shape: 0, map: 0, thresh: 0.01, skewDepth: 0, ampDepth: 0, init: 0.3, balance: 0, hyst: 0 }, o), SR);
  const lp = new L.LPF(600, SR), rz = new L.Ringz(200, 0.05, SR), dl = new L.DelayN(0.2, SR);
  const cases = [
    ['WsGen', new WsGen({ freq: 220, amp: 0.4, shape: 1.5, skew: 0.3, repeats: 1, glide: 0, balance: 0.5 }, SR), 'exact'],
    ['WsGen, Dseq inputs and glide', new WsGen({ freq: new L.Dseq([110, 220, 165, 330]), amp: new L.Dseq([0.1, 0.4, 0.25]), shape: new L.Dseq([0, 1, 2.5, 3]), skew: 0.5, repeats: new L.Dseq([8, 4, 16]), glide: 0.5, balance: 0 }, SR), 'exact'],
    ['WsMap, logistic 0.97', M({ r: 0.97, lo: 60, hi: 1200 }), 'exact'],
    ['WsMap 13 (tent)', M({ r: 0.99, lo: 20, hi: 200, amp: 0.4, shape: 3, map: 1, skewDepth: 1 }), 'exact'],
    ['WsMap 5', M({ r: 1, lo: 40, hi: 4000, skewDepth: 2, ampDepth: 0.8 }), 'exact'],
    ['WsMap 29 (Dmap steering r)', M({ r: new L.Dstutter(32, new L.Dlin(new L.Dmap({ r: 0.97, map: 0 }), 0.35, 0.65)), lo: 40, hi: 1600, skewDepth: 2, ampDepth: 0.4, balance: 1 }), 'exact'],
    ['WsMap, Ikeda', M({ r: 0.85, lo: 30, hi: 3000, shape: 1, map: 5, skewDepth: 3, ampDepth: 0.6, balance: 1 }), 'diverges'],
    ['WsMap, circle with hyst', M({ r: 0.45, lo: 50, hi: 1000, map: 3, skewDepth: 2, hyst: 0.05, balance: 1 }), 'diverges'],
    ['WsGendy, RandSeed 42', new WsGendy({ minFreq: 60, maxFreq: 8000, freqStep: 1, ampStep: 0.3, knum: 4, amp: 0.4, skew: 0.3, interp: 0, balance: 0 }, SR, new L.RGen(42)), 'close'],
    ['WsGroup, RandSeed 7', new WsGroup({ freq: 55, amp: 0.3, shape: 1, halves: new L.Dseq([2, 3, 5, 7, 11]), tilt: 0.3, decay: 0.1, flip: 0.3, balance: 1 }, SR, new L.RGen(7)), 'exact'],
    ['WsNest, depth 3', new WsNest({ r: 0.95, lo: 1, hi: 12, amp: 0.3, shape: 0, map: 0, depth: 3, branch: 3, spread: 1, contour: 0.5, skewDepth: 0, init: 0.3, balance: 1 }, SR), 'exact'],
    ['WsNest, branch 1', new WsNest({ r: 0.97, lo: 20, hi: 200, amp: 0.3, shape: 0, map: 1, depth: 5, branch: 1, spread: 1.5, contour: 0.3, skewDepth: 0, init: 0.3, balance: 1 }, SR), 'exact'],
    ['WsHear on WsGen', (() => { const s = new WsGen({ freq: new L.Dseq([150, 300, 220, 410]), amp: 0.3, shape: 0, skew: 0.5, repeats: 1, glide: 0, balance: 0 }, SR), h = H({ r: 0.8, couple: 0.7 }); return { next: () => h.next(s.next()) }; })(), 'exact'],
    ['WsHear, LPF loop', new L.HearLoop(H({ r: 0.8, couple: 0.5, thresh: 0.001 }), (a, c) => lp.block(a, c, 600)), 'exact'],
    ['WsHear, Ringz loop', new L.HearLoop(H({ r: 0.95, lo: 50, hi: 1000, couple: 1, thresh: 0.001 }), (a, c) => { rz.block(a, c, 200, 0.05); for (let i = 0; i < 64; i++) c[i] = f32(c[i] * f32(0.1)); }), 'exact'],
    ['WsHear, DelayN loop', new L.HearLoop(H({ r: 0.8, couple: 0.5 }), (a, c) => dl.block(a, c, 0.1)), 'exact'],
  ];
  cases.forEach(([n, u, expect], c) => {
    let max = 0;
    for (let i = 0; i < frames; i++) max = Math.max(max, Math.abs(u.next() - f[i * ch + c]));
    const ok = expect === 'exact' ? max < 1e-6 : expect === 'close' ? max < 1e-4 : true;
    check(`scsynth: ${n}`, ok, `max |diff| ${max.toExponential(2)} over ${frames} samples` + (expect === 'diverges' ? ' (sin/cos differ in the last bit, and chaos amplifies it)' : ''));
  });
}
console.log(fails ? `${fails} failed` : 'all passed');
process.exit(fails ? 1 : 0);
