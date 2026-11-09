// The Crossings figures: controls (named as the UGen inputs), presets and what each draws.
// Read by build.mjs to write the pages and by test.mjs to run each page's defaults.

const S = (id, label, min, max, step, val) => ({ id, label, min, max, step, val });
const MAPS = ['logistic', 'tent', 'sine', 'circle', 'standard', 'Ikeda'];
const map = (val = 0, id = 'map', label = 'map') => ({ id, label, options: MAPS.map((n, i) => [i, n]), val });
const gain = S('gain', 'gain', 0, 0.5, 0.005, 0.15);
const shape = (v = 0) => S('shape', 'shape', 0, 3, 0.01, v);
const balance = (v = 0) => S('balance', 'balance', 0, 1, 0.01, v);
const clampHz = (lo, hi) => f => Math.min(hi, Math.max(lo, f));

export const pages = {
  wavesets: {
    title: 'WsGen', ugen: 'WsGen', view: 'spectrum', count: 4,
    sub: `A waveset is a positive half-cycle and a negative one. <code>freq</code> sets its length, <code>shape</code> the
half-cycle (sine, triangle, square, spike), and <code>skew</code> where the middle zero crossing falls. A skewed waveset
has a DC offset, the red bar at 0 Hz; <code>balance</code> scales down the larger half until both enclose the same area.`,
    fixed: { amp: 1, repeats: 1 },
    maxHz: 'v => Math.min(12000, Math.max(1500, v.freq * 14))',
    groups: [['waveset', [S('freq', 'freq, Hz', 20, 2000, 1, 220), shape(), S('skew', 'skew', 0.01, 0.99, 0.01, 0.5), balance(), S('glide', 'glide', 0, 1, 0.01, 0), gain]]],
    presets: (b => ({ sine: b({}), skewed: b({ skew: 0.15 }), balanced: b({ skew: 0.15, balance: 1 }),
               triangle: b({ shape: 1, skew: 0.3, balance: 1 }), spike: b({ shape: 3 }),
               two: b({ freq: 30, shape: 1.5, skew: 0.3 }) }))(o => Object.assign({ freq: 220, shape: 0, skew: 0.5, balance: 0, glide: 0 }, o)),
    presetNames: { two: 'WsGen 2' },
    legend: ['--accent:output', '--rose:DC'],
  },
  map: {
    title: 'WsMap', ugen: 'WsMap', view: 'bif', count: 8,
    warn: false,
    fixed: { amp: 1, init: 0.3 },
    groups: [['map', [map(), S('r', 'r', 0, 1, 0.001, 0.8), S('hyst', 'hyst', 0, 0.2, 0.001, 0)]],
             ['wavesets', [S('lo', 'lo, Hz', 10, 1000, 1, 60), S('hi', 'hi, Hz', 50, 8000, 1, 1200), shape(), S('skewDepth', 'skewDepth', 0, 4, 0.01, 0), S('ampDepth', 'ampDepth', 0, 1, 0.01, 0), balance(), gain]]],
    presets: (b => ({ fixed: b({ r: 0.7 }), two: b({ r: 0.8 }), four: b({ r: 0.88 }), chaos: b({ r: 0.97 }),
               five: b({ r: 1, lo: 40, hi: 4000, skewDepth: 2, ampDepth: 0.8 }),
               eight: b({ r: 0.5, lo: 80, hi: 600, map: 3, skewDepth: 2 }),
               thirteen: b({ r: 0.99, lo: 20, hi: 200, shape: 3, map: 1, skewDepth: 1 }),
               fourteen: b({ r: 0.9, lo: 200, hi: 6000, shape: 2, map: 2, skewDepth: 2, ampDepth: 1 }),
               twenty: b({ r: 0.97, lo: 50, hi: 1200, skewDepth: 2, balance: 1 }),
               twentytwo: b({ r: 1, lo: 40, hi: 4000, skewDepth: 2, ampDepth: 0.5, balance: 0.5 }),
               twentyfour: b({ r: 0.7, lo: 40, hi: 1600, shape: 1, map: 4, skewDepth: 2, balance: 1 }),
               twentyfive: b({ r: 1, lo: 50, hi: 1000, map: 5, skewDepth: 2, balance: 1 }),
               twentyeight: b({ r: 0.85, lo: 60, hi: 1200, map: 5, skewDepth: 2, hyst: 0.08, balance: 1 }) }))(o => Object.assign({ r: 0.8, lo: 60, hi: 1200, shape: 0, map: 0, skewDepth: 0, ampDepth: 0, balance: 0, hyst: 0 }, o)),
    presetNames: { fixed: 'fixed point', two: 'period 2', four: 'period 4', chaos: 'chaos', five: 'WsMap 5', eight: 'WsMap 8',
                   thirteen: 'WsMap 13', fourteen: 'WsMap 14', twenty: 'WsMap 20', twentytwo: 'WsMap 22', twentyfour: 'WsMap 24',
                   twentyfive: 'WsMap 25', twentyeight: 'WsMap 28' },
    legend: ['--accent:state x', '--gold:r'],
  },
  steer: {
    title: 'Dmap steering WsMap', ugen: 'WsMap', view: 'trace', count: 12,
    sub: `A slower map sets <code>r</code>: <code>Dstutter(hold, Dmap(sr, smap) * (rHi - rLo) + rLo)</code> holds each of
its values for <code>hold</code> wavesets. The lower panel draws <code>r</code> and <code>x</code> over the last wavesets, so
the faster orbit can be seen settling, or not, under each value the slow one chooses.`,
    fixed: { amp: 1, init: 0.3, hyst: 0 },
    groups: [['slow map (Dmap)', [map(0, 'smap', 'smap'), S('sr', 'sr', 0, 1, 0.001, 0.97), S('hold', 'hold', 1, 256, 1, 32), S('rLo', 'rLo', 0, 1, 0.01, 0.65), S('rHi', 'rHi', 0, 1, 0.01, 1)]],
             ['WsMap', [map(), S('lo', 'lo, Hz', 10, 1000, 1, 40), S('hi', 'hi, Hz', 50, 8000, 1, 1600), shape(), S('skewDepth', 'skewDepth', 0, 4, 0.01, 2), S('ampDepth', 'ampDepth', 0, 1, 0.01, 0.4), balance(1), gain]]],
    presets: (b => ({ favourite: b({}),
               seven: b({ sr: 0.95, hold: 64, rLo: 0.7, rHi: 1, lo: 50, hi: 1600, skewDepth: 2, ampDepth: 0, balance: 0 }),
               thirty: b({ smap: 4, sr: 0.8, hold: 16, rLo: 0.6, rHi: 1, map: 3, lo: 40, hi: 2400, shape: 1.5, skewDepth: 2, ampDepth: 0.5 }),
               dmapEight: b({ smap: 3, sr: 0.9, hold: 100, rLo: 0.6, rHi: 1, lo: 40, hi: 2000, shape: 1.5, skewDepth: 2, ampDepth: 0.5 }),
               slow: b({ smap: 3, sr: 0.9, hold: 200, rLo: 0.6, hi: 2400, skewDepth: 0.5, ampDepth: 0, balance: 0 }),
               fast: b({ sr: 0.9, hold: 4, rLo: 0.7 }) }))(o => Object.assign({ smap: 0, sr: 0.97, hold: 32, rLo: 0.65, rHi: 1, map: 0, lo: 40, hi: 1600, shape: 0, skewDepth: 2, ampDepth: 0.4, balance: 1 }, o)),
    presetNames: { favourite: 'WsMap 29', seven: 'Dmap 7', thirty: 'after WsMap 30', dmapEight: 'after Dmap 8', slow: 'slow circle', fast: 'fast' },
    legend: ['--gold:r', '--accent:x'],
  },
  gendy: {
    title: 'WsGendy', ugen: 'WsGendy', view: 'gendy', count: 4, seed: 42,
    sub: `Xenakis' dynamic stochastic synthesis inside zero crossings. Each half-cycle is a curve through <code>knum</code>
breakpoints that random-walk once per waveset by up to <code>ampStep</code>, and the waveset frequency walks by up to
<code>freqStep</code> octaves between <code>minFreq</code> and <code>maxFreq</code>. Both walks fold back at their bounds.`,
    fixed: { amp: 1 },
    groups: [['walks', [S('minFreq', 'minFreq, Hz', 20, 2000, 1, 80), S('maxFreq', 'maxFreq, Hz', 40, 12000, 1, 800), S('freqStep', 'freqStep, oct', 0, 2, 0.01, 0.2), S('ampStep', 'ampStep', 0, 1, 0.01, 0.1)]],
             ['curve', [S('knum', 'knum', 1, 16, 1, 8), S('skew', 'skew', 0.01, 0.99, 0.01, 0.5), S('interp', 'interp', 0, 1, 0.01, 0), balance(), gain]]],
    presets: (b => ({ six: b({ minFreq: 60, maxFreq: 8000, freqStep: 1, ampStep: 0.3, knum: 4, skew: 0.4 }),
               eleven: b({ minFreq: 40, maxFreq: 44, freqStep: 0.01, ampStep: 0.04, knum: 3, skew: 0.35, interp: 0.5, balance: 1 }),
               fifteen: b({ minFreq: 600, maxFreq: 70, freqStep: 0.01, ampStep: 0.05, knum: 8, skew: 0.3, interp: 0.5, balance: 1 }),
               dmapEleven: b({ minFreq: 60, maxFreq: 90, freqStep: 0.02, ampStep: 0.05, knum: 6, skew: 0.4, interp: 0.5, balance: 1 }),
               calm: b({ minFreq: 100, maxFreq: 140, freqStep: 0.05, ampStep: 0.04, interp: 1 }) }))(o => Object.assign({ minFreq: 80, maxFreq: 800, freqStep: 0.2, ampStep: 0.1, knum: 8, skew: 0.5, interp: 0, balance: 0 }, o)),
    presetNames: { six: 'WsGendy 6', eleven: 'WsGendy 11', fifteen: 'WsGendy 15', dmapEleven: 'Dmap 11', calm: 'calm' },
    legend: ['--accent:half-cycle curves', '--gold:breakpoints', '--mint:frequency walk'],
  },
  group: {
    title: 'WsGroup', ugen: 'WsGroup', view: 'spectrum', count: 3, seed: 7,
    sub: `Groups of any number of half-cycles in place of wavesets of two. Signs alternate within a group and restart
positive at the next, so an odd count puts two equal signs side by side at the boundary. <code>tilt</code> spreads the
half-cycle lengths, <code>decay</code> lowers each successive half, <code>flip</code> inverts signs at random.`,
    fixed: { amp: 1 },
    maxHz: 'v => Math.min(6000, Math.max(600, v.freq * 24))',
    groups: [['group', [S('freq', 'freq, Hz', 10, 1000, 1, 55), S('halves', 'halves', 1, 16, 1, 3), S('tilt', 'tilt', -2, 2, 0.01, 0), S('decay', 'decay', 0, 1, 0.01, 0), S('flip', 'flip', 0, 1, 0.01, 0), shape(), balance(1), gain]]],
    presets: (b => ({ two: b({ halves: 2 }), three: b({}), five: b({ halves: 5, tilt: 0.4, decay: 0.1 }),
               eleven: b({ halves: 11, tilt: 0.8, decay: 0.15 }), flipped: b({ halves: 4, flip: 0.4 }),
               groupFive: b({ halves: 5, shape: 1.5 }),
               groupSeven: b({ freq: 150, halves: 9, decay: 0.05, shape: 1 }) }))(o => Object.assign({ freq: 55, halves: 3, tilt: 0, decay: 0, flip: 0, shape: 0, balance: 1 }, o)),
    presetNames: { two: '2 = a waveset', three: '3', five: '5, tilted', eleven: '11', flipped: 'flips', groupFive: 'WsGroup 5', groupSeven: 'after WsGroup 7' },
    legend: ['--accent:output', '--rose:DC'],
  },
  nest: {
    title: 'WsNest', ugen: 'WsNest', view: 'nest', count: 1, preview: 5,
    sub: `Wavesets made of wavesets. Each half of a waveset holds <code>branch</code> smaller wavesets, <code>depth</code>
levels down, and the children continue the map's orbit from their parent's state, so one rule divides time at every
scale. Signs multiply down the tree: where a parent changes sign, two child half-cycles of the same sign meet and the
zero crossing between them disappears (red dots).`,
    fixed: { amp: 1, init: 0.3 },
    groups: [['tree', [S('depth', 'depth', 0, 6, 1, 3), S('branch', 'branch', 1, 8, 1, 3), S('spread', 'spread, oct', 0, 3, 0.01, 1), S('contour', 'contour', 0, 1, 0.01, 0), S('skewDepth', 'skewDepth', 0, 0.5, 0.01, 0)]],
             ['map', [map(), S('r', 'r', 0, 1, 0.001, 0.8), S('lo', 'lo, Hz', 0.5, 50, 0.1, 2), S('hi', 'hi, Hz', 1, 400, 0.1, 20), shape(), balance(1), gain]]],
    presets: { fixed: { r: 0.5, map: 0, lo: 3, hi: 30, depth: 3, branch: 3, spread: 1, contour: 0 },
               two: { r: 0.8, map: 0, lo: 2, hi: 20, depth: 3, branch: 2, spread: 1, contour: 0 },
               chaos: { r: 0.95, map: 0, lo: 1, hi: 12, depth: 3, branch: 3, spread: 1, contour: 0.5 },
               one: { r: 0.97, map: 1, lo: 20, hi: 200, depth: 5, branch: 1, spread: 1.5, contour: 0.3 },
               rhythm: { r: 0.95, map: 0, lo: 0.5, hi: 4, depth: 2, branch: 4, spread: 1.5, contour: 1 } },
    presetNames: { fixed: 'fixed point', two: 'period 2', chaos: 'chaos', one: 'branch 1', rhythm: 'contour as rhythm' },
    legend: ['--accent:half-cycles per level', '--rose:zero crossing removed'],
  },
  hear: {
    title: 'WsHear', ugen: 'WsHear', view: 'bif', count: 8,
    sub: `WsMap with an input, here its own output fed back through a filter or a delay, one 64-sample block late as
through <code>LocalIn</code>. Each heard waveset is read back as a state on the same <code>lo</code>..<code>hi</code>
scale, and <code>couple</code> mixes it into <code>x</code> before the map steps. A filter keeps the period of a periodic
signal, so a stable fixed point is left alone; a period 2 orbit can collapse onto one length, turn chaotic, or be tamed.`,
    fixed: { amp: 1, init: 0.3, thresh: 0.001, ampDepth: 0, hyst: 0 },
    groups: [['loop', [{ id: 'loop', label: 'loop', options: [['lowpass', 'lowpass (LPF)'], ['resonator', 'resonator (Ringz)'], ['delay', 'delay (DelayN)']], val: 'lowpass' },
                       S('loopFreq', 'loop freq, Hz', 40, 4000, 1, 600), S('loopTime', 'delay, s', 0.001, 0.5, 0.001, 0.1), S('couple', 'couple', 0, 1, 0.01, 0.5)]],
             ['map', [map(), S('r', 'r', 0, 1, 0.001, 0.8), S('lo', 'lo, Hz', 10, 1000, 1, 60), S('hi', 'hi, Hz', 50, 8000, 1, 1200), shape(), S('skewDepth', 'skewDepth', 0, 4, 0.01, 0), balance(), gain]]],
    presets: { off: { couple: 0, r: 0.8, map: 0, loop: 'lowpass', loopFreq: 600 },
               collapse: { couple: 0.5, r: 0.8, map: 0, lo: 60, hi: 1200, loop: 'lowpass', loopFreq: 600 },
               unsettle: { couple: 0.5, r: 0.8, map: 0, lo: 60, hi: 1200, loop: 'delay', loopTime: 0.1 },
               tame: { couple: 1, r: 0.95, map: 0, lo: 50, hi: 1000, loop: 'resonator', loopFreq: 200 } },
    presetNames: { off: 'couple 0: WsMap', collapse: 'lowpass collapses period 2', unsettle: 'delay unsettles it', tame: 'resonator tames chaos' },
    legend: ['--accent:made x', '--mint:heard x', '--gold:r'],
  },
};

// the inputs each page sends to its UGen (every control except the page-only ones)
export const PAGE_ONLY = ['gain', 'smap', 'sr', 'hold', 'rLo', 'rHi', 'loop', 'loopFreq', 'loopTime'];
export const controlsOf = d => d.groups.flatMap(g => g[1]);
export const inputsOf = d => controlsOf(d).map(c => c.id).filter(id => !PAGE_ONLY.includes(id));
