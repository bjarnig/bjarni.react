// Assert what the page claims, against the real worklet and the book's formulas.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const SR = 48000;
globalThis.sampleRate = SR;
let Proc = null;
globalThis.AudioWorkletProcessor = class { constructor() { this.port = { postMessage() {}, onmessage: null }; } };
globalThis.registerProcessor = (n, c) => { Proc = c; };
const core = fs.readFileSync(path.join(here, 'core.js'), 'utf8');
const work = fs.readFileSync(path.join(here, 'worklet.js'), 'utf8');
new Function(core + '\n;\n' + work)();
const lib = new Function(core + '; return { vosimLevel, vosimPulses, vosimSample, vosimHarmonic, vosimPeriod };')();

function render(params, seconds) {
  const g = new Proc();
  g.port.onmessage({ data: { type: 'params', value: params } });
  const n = Math.round(seconds * SR / 128) * 128, out = new Float32Array(n);
  const L = new Float32Array(128), R = new Float32Array(128);
  for (let b = 0; b < n / 128; b++) { g.process([], [[L, R]], {}); out.set(L, b * 128); }
  return out;
}
let fails = 0;
function check(name, ok, detail) { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? '  ' + detail : '')); if (!ok) fails++; }

// 1. Harmonic amplitudes of the rendered audio match the book's C_n. Integer-sample
// period (480) and pulse (24) so the period is exact. C_n is the one-sided amplitude.
{
  const T = 480, W = 24, N = 8, b = 0.85, fund = SR / T, form = SR / W;
  const y = render({ fund, form1: form, g1: 1, g2: 0, g3: 0, N, b, env: 0, modDepth: 0, gain: 1 }, 0.1);
  const per = y.slice(T * 3, T * 4);
  let worst = 0, maxc = 0;
  for (let n = 1; n <= 30; n++) {
    let re = 0, im = 0;
    for (let i = 0; i < T; i++) { const a = -2 * Math.PI * n * i / T; re += per[i] * Math.cos(a); im += per[i] * Math.sin(a); }
    const meas = 2 * Math.hypot(re, im) / T, book = lib.vosimHarmonic(n, T / SR, N, W / SR, b);
    maxc = Math.max(maxc, book); worst = Math.max(worst, Math.abs(meas - book));
  }
  check('rendered harmonics equal the book formula C_n (n = 1..30)', worst / maxc < 1e-3, `max abs error ${worst.toExponential(2)} of peak ${maxc.toFixed(3)}`);
}

// 2. Pitch and formant are independent: the period is 1/fund whatever the pulse width,
// and the spectral peak follows 1/W whatever the pitch.
{
  const meas = [];
  for (const form of [600, 1100, 2300]) {
    const fund = 100, T = SR / fund;
    const y = render({ fund, form1: form, g1: 1, g2: 0, g3: 0, N: 5, b: 0.8, env: 0, modDepth: 0, gain: 1 }, 0.2);
    let best = 0, lag = 0;
    for (let L = 100; L < 900; L++) { let s = 0; for (let i = 2000; i < 6000; i++) s += y[i] * y[i + L]; if (s > best) { best = s; lag = L; } }
    meas.push(lag);
  }
  check('period stays 1/fund while form moves 600..2300 Hz', meas.every(l => l === 480), `lags ${meas}`);
  const peaks = [];
  for (const fund of [90, 130, 210]) {
    const form = 1500, T = 1 / fund; let bestN = 0, bestC = 0;
    for (let n = 1; n < 60; n++) { const c = lib.vosimHarmonic(n, T, 4, 1 / form, 0.8); if (c > bestC && n * fund > 250) { bestC = c; bestN = n; } }
    peaks.push(bestN * fund);
  }
  check('formant peak stays near 1/W for three pitches', peaks.every(f => Math.abs(f - 1500) < 260), `peaks ${peaks.map(f => f.toFixed(0))} Hz`);
}

// 3. b = 1: the spectrum has true zeros. With T/W = 8 harmonics 8, 16, ... vanish.
{
  const T = 480, W = 60, N = 4;
  const y = render({ fund: SR / T, form1: SR / W, g1: 1, g2: 0, g3: 0, N, b: 1, env: 0, modDepth: 0, gain: 1 }, 0.1);
  const per = y.slice(T * 3, T * 4); const amp = n => { let re = 0, im = 0; for (let i = 0; i < T; i++) { const a = -2 * Math.PI * n * i / T; re += per[i] * Math.cos(a); im += per[i] * Math.sin(a); } return 2 * Math.hypot(re, im) / T; };
  const z = [16, 24, 32].map(amp), nz = [7, 9, 15].map(amp);
  const evens = []; for (let n = 2; n <= 40; n += 2) if (n !== 8) evens.push(amp(n));
  const odds = []; for (let n = 1; n <= 39; n += 2) odds.push(amp(n));
  check('b = 1, T/W = 8, N = 4: every even harmonic except the 8th is absent; odd ones and the 8th are present',
    Math.max(...evens) < 1e-6 && amp(8) > 0.05 && Math.min(...odds.slice(0, 12)) > 1e-3, `max even ${Math.max(...evens).toExponential(1)}, 8th ${amp(8).toFixed(3)}, min odd(1..23) ${Math.min(...odds.slice(0, 12)).toExponential(1)}`);
  check('b = 1 suppresses harmonics 16, 24, 32 (T/W = 8, N = 4)', Math.max(...z) < 1e-6 * Math.max(...nz) + 1e-9, `zeros ${z.map(v => v.toExponential(1))} vs neighbours ${nz.map(v => v.toFixed(3))}`);
}

// 4. The staircase: consecutive pulse levels differ by exactly b.
{
  const T = 960, W = 48, N = 8, b = 0.8;
  const y = render({ fund: SR / T, form1: SR / W, g1: 1, g2: 0, g3: 0, N, b, env: 0, modDepth: 0, gain: 1 }, 0.1);
  const base = T * 3, lv = []; for (let n = 0; n < N; n++) lv.push(y[base + n * W + W / 2]);
  const r = lv.slice(1).map((v, i) => v / lv[i]);
  check('pulse levels fall by the constant ratio b', r.every(v => Math.abs(v - b) < 1e-6), `ratios ${r.map(v => v.toFixed(4))}`);
  const y1 = render({ fund: SR / T, form1: SR / W, g1: 1, g2: 0, g3: 0, N, b: 0.8, env: 1, decay: 0.15, modDepth: 0, gain: 1 }, 0.1);
  const l1 = []; for (let n = 0; n < 5; n++) l1.push(y1[base + n * W + W / 2]);
  check('Csound-style mode subtracts a constant per pulse', l1.every((v, n) => Math.abs(v - (1 - n * 0.15)) < 1e-6), `levels ${l1.map(v => v.toFixed(3))}`);
}

// 5. The zero interval alone carries the modulation: every period starts with a pulse of the same width.
{
  const fund = 100, form = 1200, W = SR / form;
  const y = render({ fund, form1: form, g1: 1, g2: 0, g3: 0, N: 5, b: 0.8, env: 0, modDepth: 0.4, modRate: 3, gain: 1 }, 1.2);
  const starts = []; let silent = 0;
  for (let i = 1; i < y.length; i++) { if (Math.abs(y[i]) < 1e-9) silent++; else { if (silent > 40 && y[i - 1] === 0) starts.push(i); silent = 0; } }
  const gaps = starts.slice(1).map((s, i) => s - starts[i]);
  check('period length varies with the modulation', Math.max(...gaps) - Math.min(...gaps) > 100, `periods ${Math.min(...gaps)}..${Math.max(...gaps)} samples (nominal ${SR / fund})`);
  // width of the first pulse: distance from the period start to the first local minimum
  const widths = starts.slice(0, 12).map(s => { let k = 3; while (k < 400 && !(y[s + k] < y[s + k - 1] && y[s + k] <= y[s + k + 1])) k++; return k + 1; });
  check('pulse width does not change while the period does', Math.max(...widths) - Math.min(...widths) <= 1 && Math.abs(widths[0] - W) <= 2, `first-pulse widths ${[...new Set(widths)]} samples (W = ${W.toFixed(1)})`);
}

// 6. N is limited so that the pulses fit in the period; output stays bounded and finite.
{
  check('N is clamped to what fits', lib.vosimPulses(20, 1 / 1000, 1 / 100) === 10 && lib.vosimPulses(3, 1 / 1000, 1 / 100) === 3 && lib.vosimPulses(5, 1 / 50, 1 / 100) === 0);
  let peak = 0, bad = 0;
  for (const p of [{ N: 32, b: 1, form1: 3000, fund: 90 }, { N: 2, b: 0.2, form1: 300, fund: 40 }, { N: 12, b: 1, form1: 5000, form2: 2000, form3: 900, g2: 1, g3: 1, fund: 150 }]) {
    const y = render({ g1: 1, g2: 0, g3: 0, env: 0, modDepth: 0, gain: 1, ...p }, 0.3);
    for (const v of y) { if (!Number.isFinite(v)) bad++; peak = Math.max(peak, Math.abs(v)); }
  }
  check('output finite and bounded by the voice count (peak <= 3)', bad === 0 && peak <= 3.0001, `peak ${peak.toFixed(3)}`);
}
console.log(fails ? `${fails} FAILED` : 'all passed');
process.exit(fails ? 1 : 0);
