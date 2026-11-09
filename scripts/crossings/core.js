/* Crossings in JavaScript: a line-by-line port of the SuperCollider UGens in
 * github.com/bjarnig/Crossings (plugins/ws.hpp and plugins/Ws*.cpp). Internal maths is
 * double, as in the C++; anything the C++ keeps in a float (inputs, stored parameters,
 * the output) is rounded with Math.fround so the two agree sample for sample.
 * Shared by the audio worklet, the drawings and scripts/crossings/test.mjs. */

const f32 = Math.fround;
const kPi = 3.141592653589793;
const kTau = 2.0 * kPi;

// ---- ws.hpp ----------------------------------------------------------------

function shapeAt(k, p) {
  switch (k) {
    case 0: return Math.sin(kPi * p);
    case 1: return 1.0 - Math.abs(2.0 * p - 1.0);
    case 2: return 1.0;
    default: { let s = Math.sin(kPi * p); s *= s; s *= s; return s * s; }
  }
}

function halfCycle(shape, p) {
  const sh = shape < 0.0 ? 0.0 : (shape > 3.0 ? 3.0 : shape);
  const k = Math.trunc(sh), frac = sh - k, a = shapeAt(k, p);
  return frac > 0.0 ? a + frac * (shapeAt(k + 1, p) - a) : a;
}

const clampd = (x, lo, hi) => (x < lo ? lo : (x > hi ? hi : x));
const incFor = (freq, sr) => clampd(Math.abs(freq), 0.01, sr * 0.5) / sr;

function mirror(x, lo, hi) {
  const r = hi - lo;
  if (r <= 0.0) return lo;
  let m = (x - lo) % (2.0 * r);
  if (m < 0.0) m += 2.0 * r;
  return lo + (m > r ? 2.0 * r - m : m);
}

// returns [gPos, gNeg]
function balanceGains(areaPos, areaNeg, balance) {
  const b = clampd(balance, 0.0, 1.0);
  if (b <= 0.0 || areaPos <= 0.0 || areaNeg <= 0.0) return [1.0, 1.0];
  if (areaPos > areaNeg) return [1.0 - b * (1.0 - areaNeg / areaPos), 1.0];
  return [1.0, 1.0 - b * (1.0 - areaPos / areaNeg)];
}

// SuperCollider's float zapgremlins
function zap(v) {
  const x = f32(v), a = Math.abs(x);
  return a > 1e-15 && a < 1e15 ? x : 0;
}

const kLogistic = 0, kTent = 1, kSine = 2, kCircle = 3, kStandard = 4, kIkeda = 5, kNumMaps = 6;
const kIkX0 = -0.5, kIkX1 = 1.9, kIkY0 = -2.4, kIkY1 = 1.0;
const MAP_NAMES = ['logistic', 'tent', 'sine', 'circle', 'standard', 'Ikeda'];
const is2D = map => map >= kStandard;
const wrap01 = v => v - Math.floor(v);

function mapInit(init) {
  return { x: clampd(init, 0.0, 1.0), y: (0.0 - kIkY0) / (kIkY1 - kIkY0) };
}

// steps s = {x, y} in place
function stepMap(map, r, s) {
  r = clampd(r, 0.0, 1.0);
  let x = s.x, y = s.y;
  switch (map) {
    case kLogistic: x = 4.0 * r * x * (1.0 - x); break;
    case kTent: x = 2.0 * (r > 0.9995 ? 0.9995 : r) * (x < 0.5 ? x : 1.0 - x); break;
    case kSine: x = r * Math.sin(kPi * x); break;
    case kCircle: x = wrap01(x + 0.618 - (8.0 * r / kTau) * Math.sin(kTau * x)); break;
    case kStandard: {
      const p = wrap01(y + (6.0 * r / kTau) * Math.sin(kTau * x));
      x = wrap01(x + p); y = p; break;
    }
    default: {
      const a = kIkX0 + x * (kIkX1 - kIkX0), b = kIkY0 + y * (kIkY1 - kIkY0);
      const u = 0.9 * r, t = 0.4 - 6.0 / (1.0 + a * a + b * b);
      let a2 = 1.0 + u * (a * Math.cos(t) - b * Math.sin(t));
      let b2 = u * (a * Math.sin(t) + b * Math.cos(t));
      if (a2 < kIkX0 || a2 > kIkX1 || b2 < kIkY0 || b2 > kIkY1) a2 = b2 = 0.0;
      x = (a2 - kIkX0) / (kIkX1 - kIkX0);
      y = (b2 - kIkY0) / (kIkY1 - kIkY0);
    }
  }
  s.x = clampd(x, 1e-9, 1.0 - 1e-9);
  s.y = clampd(y, 0.0, 1.0);
}

const mapSecond = (map, x, y, prevX) => (is2D(map) ? 2.0 * y - 1.0 : x - prevX);
const backlash = (rEff, r, h) => { h = Math.abs(h); return clampd(rEff, r - h, r + h); };

// Streaming waveset detector (WsDetect)
class WsDetect {
  constructor() { this.prevX = 0; this.t = 0; this.start = -1; this.fall = -1; this.peak = 0; this.armed = false; this.len = 0; this.skew = 0.5; this.lastPeak = 0; }
  detect(x, thresh) {
    let done = false;
    const prev = this.prevX;
    if (x < -Math.abs(thresh)) this.armed = true;
    if (this.start >= 0.0 && this.fall < 0.0 && prev > 0.0 && x <= 0.0) this.fall = this.t - 1.0 + prev / (prev - x);
    if (this.armed && prev <= 0.0 && x > 0.0) {
      const tc = this.t - 1.0 + -prev / (x - prev);
      if (this.start >= 0.0) {
        this.len = tc - this.start;
        this.skew = this.fall >= 0.0 ? (this.fall - this.start) / this.len : 0.5;
        this.lastPeak = this.peak;
        done = true;
      }
      this.start = tc; this.fall = -1.0; this.peak = 0.0; this.armed = false;
    }
    const a = Math.abs(x);
    if (a > this.peak) this.peak = a;
    this.prevX = x;
    this.t += 1.0;
    return done;
  }
}

// ---- SuperCollider's RGen (taus88), so WsGendy and WsGroup match under RandSeed ----

class RGen {
  constructor(seed) { this.init(seed); }
  init(seed) {
    let h = seed >>> 0;
    h = (h + ~(h << 15)) >>> 0; h = (h ^ (h >>> 10)) >>> 0; h = (h + (h << 3)) >>> 0;
    h = (h ^ (h >>> 6)) >>> 0; h = (h + ~(h << 11)) >>> 0; h = (h ^ (h >>> 16)) >>> 0;
    this.s1 = (1243598713 ^ h) >>> 0; if (this.s1 < 2) this.s1 = 1243598713;
    this.s2 = (3093459404 ^ h) >>> 0; if (this.s2 < 8) this.s2 = 3093459404;
    this.s3 = (1821928721 ^ h) >>> 0; if (this.s3 < 16) this.s3 = 1821928721;
  }
  trand() {
    let { s1, s2, s3 } = this;
    s1 = (((s1 & 0xFFFFFFFE) << 12) ^ (((s1 << 13) ^ s1) >>> 19)) >>> 0;
    s2 = (((s2 & 0xFFFFFFF8) << 4) ^ (((s2 << 2) ^ s2) >>> 25)) >>> 0;
    s3 = (((s3 & 0xFFFFFFF0) << 17) ^ (((s3 << 3) ^ s3) >>> 11)) >>> 0;
    this.s1 = s1; this.s2 = s2; this.s3 = s3;
    return (s1 ^ s2 ^ s3) >>> 0;
  }
  frand() { return ((this.trand() >>> 9) / 8388608); }        // 0x3F800000 | bits, minus 1: exact in float
  frand2() { return ((this.trand() >>> 9) / 4194304) - 1.0; } // 0x40000000 | bits, minus 3: exact in float
}

// ---- demand-rate streams: what the UGens pull once per waveset ----------------

// a parameter is a number (an audio or control input) or a stream with next()
const val = v => (typeof v === 'number' ? v : NaN);

function pull(src, prev) {
  if (typeof src === 'number') return f32(src);
  const x = src.next();
  return Number.isNaN(x) ? prev : f32(x);
}

class Dseq {
  constructor(list, repeats = Infinity) { this.list = list; this.repeats = repeats; this.i = 0; this.n = 0; }
  next() {
    if (this.i >= this.list.length) { this.i = 0; this.n++; }
    if (this.n >= this.repeats) return NaN;
    const v = this.list[this.i++];
    return typeof v === 'number' ? f32(v) : v.next();
  }
}

class Dstutter {
  constructor(n, src) { this.n = n; this.src = src; this.repeats = -1; this.count = 0; this.value = 0; }
  next() {
    if (this.count >= this.repeats) {
      const v = typeof this.src === 'number' ? f32(this.src) : this.src.next();
      const r = typeof this.n === 'number' ? f32(this.n) : this.n.next();
      if (Number.isNaN(r) || Number.isNaN(v)) return NaN;
      this.value = v; this.repeats = Math.floor(f32(r + 0.5)); this.count = 0;
    }
    this.count++;
    return this.value;
  }
}

// src * mul + add, in float as SuperCollider's demand-rate BinaryOpUGens compute it
class Dlin {
  constructor(src, mul, add) { this.src = src; this.mul = f32(mul); this.add = f32(add); }
  next() { const v = this.src.next(); return Number.isNaN(v) ? NaN : f32(f32(v * this.mul) + this.add); }
}

class Dmap {
  constructor({ r = 0.9, map = 0, init = 0.3, axis = 0, hyst = 0 } = {}) {
    this.p = { r, map, axis, hyst };
    const s = mapInit(f32(init)); this.s = s; this.prev = s.x; this.rEff = -1;
    this.r = f32(0.9); this.map = 0; this.axis = 0; this.hyst = 0;
  }
  next() {
    this.r = pull(this.p.r, this.r); this.map = pull(this.p.map, this.map);
    this.axis = pull(this.p.axis, this.axis); this.hyst = pull(this.p.hyst, this.hyst);
    this.prev = this.s.x;
    this.rEff = this.rEff < 0.0 ? this.r : backlash(this.rEff, this.r, this.hyst);
    const m = Math.trunc(clampd(this.map, 0.0, kNumMaps - 1));
    stepMap(m, this.rEff, this.s);
    return this.axis >= 0.5 ? f32(0.5 + 0.5 * clampd(mapSecond(m, this.s.x, this.s.y, this.prev), -1.0, 1.0)) : f32(this.s.x);
  }
}

// ---- the generators. next() returns one output sample; onWaveset, if set, is called
// with a small record whenever a waveset (or group, or tree) starts. ----------------

class WsGen {
  constructor(p, sr) {
    this.p = p; this.sr = sr; this.phase = 1.0;
    this.pFreq = this.cFreq = 0; this.pAmp = this.cAmp = 0; this.pShape = this.cShape = 0; this.pSkew = this.cSkew = 0.5;
    this.glide = 0; this.balance = 0; this.repLeft = 0; this.started = false;
  }
  next() {
    const p = this.p;
    let phase = this.phase;
    if (phase >= 1.0) {
      phase -= 1.0;
      this.pFreq = this.cFreq; this.pAmp = this.cAmp; this.pShape = this.cShape; this.pSkew = this.cSkew;
      if (this.repLeft <= 0) {
        this.cFreq = pull(p.freq, f32(this.cFreq)); this.cAmp = pull(p.amp, f32(this.cAmp));
        this.cShape = pull(p.shape, f32(this.cShape)); this.cSkew = pull(p.skew, f32(this.cSkew));
        this.glide = pull(p.glide, this.glide); this.balance = pull(p.balance, this.balance);
        const reps = pull(p.repeats, 1);
        this.repLeft = reps < 1 ? 1 : Math.trunc(reps);
        if (!this.started) { this.pFreq = this.cFreq; this.pAmp = this.cAmp; this.pShape = this.cShape; this.pSkew = this.cSkew; this.started = true; }
      }
      this.repLeft--;
      if (phase >= 1.0) phase = 0.0;
      if (this.onWaveset) this.onWaveset({ freq: this.cFreq, skew: this.cSkew });
    }
    const g = this.glide, t = g <= 0.0 ? 1.0 : (phase >= g ? 1.0 : phase / g);
    const freq = this.pFreq + t * (this.cFreq - this.pFreq), amp = this.pAmp + t * (this.cAmp - this.pAmp);
    const shape = this.pShape + t * (this.cShape - this.pShape);
    const s = clampd(this.pSkew + t * (this.cSkew - this.pSkew), 0.01, 0.99);
    const [gPos, gNeg] = balanceGains(s, 1.0 - s, this.balance);
    const y = phase < s ? gPos * halfCycle(shape, phase / s) : -gNeg * halfCycle(shape, (phase - s) / (1.0 - s));
    this.phase = phase + incFor(freq, this.sr);
    return zap(y * amp);
  }
}

class WsMap {
  constructor(p, sr) {
    this.p = p; this.sr = sr; this.phase = 1.0; this.inc = 0.0;
    this.s = mapInit(f32(val(p.init ?? 0.3))); this.prev = this.s.x; this.rEff = -1.0;
    this.r = f32(0.9); this.lo = 60; this.hi = 1200; this.amp = 0; this.shape = 0; this.map = 0;
    this.skewDepth = 0; this.ampDepth = 0; this.balance = 0; this.hyst = 0;
    this.gPos = this.gNeg = 1.0; this.peak = 0.0; this.skew = 0.5;
  }
  next() {
    const p = this.p;
    let phase = this.phase;
    if (phase >= 1.0) {
      phase -= 1.0;
      this.r = pull(p.r, this.r); this.lo = pull(p.lo, this.lo); this.hi = pull(p.hi, this.hi);
      this.amp = pull(p.amp, this.amp); this.shape = pull(p.shape, this.shape); this.map = pull(p.map, this.map);
      this.skewDepth = pull(p.skewDepth, this.skewDepth); this.ampDepth = pull(p.ampDepth, this.ampDepth);
      this.balance = pull(p.balance, this.balance); this.hyst = pull(p.hyst, this.hyst);
      this.prev = this.s.x;
      this.rEff = this.rEff < 0.0 ? this.r : backlash(this.rEff, this.r, this.hyst);
      const m = Math.trunc(clampd(this.map, 0.0, kNumMaps - 1));
      stepMap(m, this.rEff, this.s);
      const lo = Math.abs(this.lo) < 0.01 ? 0.01 : Math.abs(this.lo), hi = Math.abs(this.hi) < 0.01 ? 0.01 : Math.abs(this.hi);
      this.inc = incFor(lo * Math.pow(hi / lo, this.s.x), this.sr);
      this.skew = clampd(0.5 + this.skewDepth * mapSecond(m, this.s.x, this.s.y, this.prev), 0.01, 0.99);
      this.peak = this.amp * (1.0 - clampd(this.ampDepth, 0.0, 1.0) * this.s.x);
      [this.gPos, this.gNeg] = balanceGains(this.skew, 1.0 - this.skew, this.balance);
      if (phase >= 1.0) phase = 0.0;
      if (this.onWaveset) this.onWaveset({ x: this.s.x, y: this.s.y, r: this.rEff, freq: this.inc * this.sr, skew: this.skew });
    }
    const s = this.skew;
    const v = phase < s ? this.gPos * halfCycle(this.shape, phase / s) : -this.gNeg * halfCycle(this.shape, (phase - s) / (1.0 - s));
    this.phase = phase + this.inc;
    return zap(v * this.peak);
  }
}

// WsHear: WsMap with an input; next(input) takes the input sample.
class WsHear {
  constructor(p, sr) {
    this.p = p; this.sr = sr; this.det = new WsDetect(); this.heardLen = 0;
    this.phase = 1.0; this.inc = 0.0;
    this.s = mapInit(f32(val(p.init ?? 0.3))); this.prev = this.s.x; this.rEff = -1.0;
    this.r = f32(0.9); this.lo = 60; this.hi = 1200; this.amp = 0; this.shape = 0; this.map = 0; this.couple = 0;
    this.skewDepth = 0; this.ampDepth = 0; this.balance = 0; this.hyst = 0;
    this.gPos = this.gNeg = 1.0; this.peak = 0.0; this.skew = 0.5;
  }
  next(input) {
    const p = this.p;
    if (this.det.detect(f32(input), f32(val(p.thresh ?? 0.01)))) this.heardLen = this.det.len;
    let phase = this.phase;
    if (phase >= 1.0) {
      phase -= 1.0;
      this.r = pull(p.r, this.r); this.lo = pull(p.lo, this.lo); this.hi = pull(p.hi, this.hi);
      this.amp = pull(p.amp, this.amp); this.shape = pull(p.shape, this.shape); this.map = pull(p.map, this.map);
      this.couple = pull(p.couple, this.couple);
      this.skewDepth = pull(p.skewDepth, this.skewDepth); this.ampDepth = pull(p.ampDepth, this.ampDepth);
      this.balance = pull(p.balance, this.balance); this.hyst = pull(p.hyst, this.hyst);
      const lo = Math.abs(this.lo) < 0.01 ? 0.01 : Math.abs(this.lo), hi = Math.abs(this.hi) < 0.01 ? 0.01 : Math.abs(this.hi);
      const span = Math.log(hi / lo);
      let heard = -1;
      if (this.heardLen > 0.0 && Math.abs(span) > 1e-9) {
        heard = clampd(Math.log(this.sr / this.heardLen / lo) / span, 1e-9, 1.0 - 1e-9);
        const c = clampd(this.couple, 0.0, 1.0);
        this.s.x += c * (heard - this.s.x);
        this.heardLen = 0.0;
      }
      this.prev = this.s.x;
      this.rEff = this.rEff < 0.0 ? this.r : backlash(this.rEff, this.r, this.hyst);
      const m = Math.trunc(clampd(this.map, 0.0, kNumMaps - 1));
      stepMap(m, this.rEff, this.s);
      this.inc = incFor(lo * Math.pow(hi / lo, this.s.x), this.sr);
      this.skew = clampd(0.5 + this.skewDepth * mapSecond(m, this.s.x, this.s.y, this.prev), 0.01, 0.99);
      this.peak = this.amp * (1.0 - clampd(this.ampDepth, 0.0, 1.0) * this.s.x);
      [this.gPos, this.gNeg] = balanceGains(this.skew, 1.0 - this.skew, this.balance);
      if (phase >= 1.0) phase = 0.0;
      if (this.onWaveset) this.onWaveset({ x: this.s.x, r: this.rEff, heard, freq: this.inc * this.sr });
    }
    const s = this.skew;
    const v = phase < s ? this.gPos * halfCycle(this.shape, phase / s) : -this.gNeg * halfCycle(this.shape, (phase - s) / (1.0 - s));
    this.phase = phase + this.inc;
    return zap(v * this.peak);
  }
}

class WsGendy {
  constructor(p, sr, rgen) {
    this.p = p; this.sr = sr; this.rgen = rgen;
    this.pos = new Float64Array(16); this.neg = new Float64Array(16);
    for (let k = 0; k < 16; ++k) { this.pos[k] = rgen.frand(); this.neg[k] = rgen.frand(); }
    this.phase = 1.0; this.inc = 0.0;
    this.oct = Math.log2(clampd(Math.sqrt(Math.abs(f32(val(p.minFreq)) * f32(val(p.maxFreq)))), 0.01, 20000.0));
    this.minFreq = 80; this.maxFreq = 800; this.freqStep = 0; this.ampStep = 0; this.knum = 8; this.amp = 0;
    this.skew = f32(0.5); this.interp = 0; this.balance = 0; this.gPos = this.gNeg = 1.0; this.n = 8;
  }
  static curve(pts, n, p, interp) {
    const q = p * (n + 1);
    let j = Math.trunc(q); if (j > n) j = n;
    const f = q - j, a = j === 0 ? 0.0 : pts[j - 1], b = j === n ? 0.0 : pts[j];
    const w = f + interp * (0.5 - 0.5 * Math.cos(kPi * f) - f);
    return a + w * (b - a);
  }
  next() {
    const p = this.p, rgen = this.rgen;
    let phase = this.phase;
    if (phase >= 1.0) {
      phase -= 1.0;
      this.minFreq = pull(p.minFreq, this.minFreq); this.maxFreq = pull(p.maxFreq, this.maxFreq);
      this.freqStep = pull(p.freqStep, this.freqStep); this.ampStep = pull(p.ampStep, this.ampStep);
      this.knum = pull(p.knum, this.knum); this.amp = pull(p.amp, this.amp); this.skew = pull(p.skew, this.skew);
      this.interp = pull(p.interp, this.interp); this.balance = pull(p.balance, this.balance);
      this.n = Math.trunc(clampd(this.knum, 1.0, 16));
      const st = Math.abs(this.ampStep);
      for (let k = 0; k < this.n; ++k) {
        this.pos[k] = mirror(this.pos[k] + st * rgen.frand2(), 0.0, 1.0);
        this.neg[k] = mirror(this.neg[k] + st * rgen.frand2(), 0.0, 1.0);
      }
      let lo = Math.log2(clampd(Math.abs(this.minFreq), 0.01, this.sr * 0.5));
      let hi = Math.log2(clampd(Math.abs(this.maxFreq), 0.01, this.sr * 0.5));
      if (lo > hi) [lo, hi] = [hi, lo];
      this.oct = mirror(this.oct + Math.abs(this.freqStep) * rgen.frand2(), lo, hi);
      this.inc = incFor(Math.pow(2, this.oct), this.sr);
      let sumPos = 0.0, sumNeg = 0.0;
      for (let k = 0; k < this.n; ++k) { sumPos += this.pos[k]; sumNeg += this.neg[k]; }
      const sk = clampd(this.skew, 0.01, 0.99);
      [this.gPos, this.gNeg] = balanceGains(sk * sumPos, (1.0 - sk) * sumNeg, this.balance);
      if (phase >= 1.0) phase = 0.0;
      if (this.onWaveset) this.onWaveset({ freq: this.inc * this.sr, pos: Array.from(this.pos.subarray(0, this.n)), neg: Array.from(this.neg.subarray(0, this.n)) });
    }
    const s = clampd(this.skew, 0.01, 0.99), it = clampd(this.interp, 0.0, 1.0);
    const y = phase < s ? this.gPos * WsGendy.curve(this.pos, this.n, phase / s, it)
                        : -this.gNeg * WsGendy.curve(this.neg, this.n, (phase - s) / (1.0 - s), it);
    this.phase = phase + this.inc;
    return zap(y * this.amp);
  }
}

class WsGroup {
  constructor(p, sr, rgen) {
    this.p = p; this.sr = sr; this.rgen = rgen; this.phase = 1.0; this.inc = 0.0;
    this.freq = f32(110); this.amp = 0; this.shape = 0; this.halves = 3; this.tilt = 0; this.decay = 0; this.flip = 0; this.balance = 0;
    this.n = 1; this.j = 0; this.edge = new Float64Array(65); this.gain = new Float64Array(64); this.edge[1] = 1.0;
  }
  newGroup() {
    const p = this.p, rgen = this.rgen;
    this.freq = pull(p.freq, this.freq); this.amp = pull(p.amp, this.amp); this.shape = pull(p.shape, this.shape);
    this.halves = pull(p.halves, this.halves); this.tilt = pull(p.tilt, this.tilt); this.decay = pull(p.decay, this.decay);
    this.flip = pull(p.flip, this.flip); this.balance = pull(p.balance, this.balance);
    const n = Math.trunc(clampd(this.halves, 1.0, 64));
    const fade = 1.0 - clampd(this.decay, 0.0, 1.0), flip = clampd(this.flip, 0.0, 1.0);
    let total = 0.0, level = 1.0, aPos = 0.0, aNeg = 0.0;
    const w = new Float64Array(n);
    for (let j = 0; j < n; ++j) {
      w[j] = n > 1 ? Math.pow(2, this.tilt * (2.0 * j / (n - 1) - 1.0)) : 1.0;
      total += w[j];
      let sign = (j % 2 === 0) ? 1.0 : -1.0;
      if (flip > 0.0 && rgen.frand() < flip) sign = -sign;
      this.gain[j] = sign * level;
      if (sign > 0.0) aPos += w[j] * level; else aNeg += w[j] * level;
      level *= fade;
    }
    this.edge[0] = 0.0;
    for (let j = 0; j < n; ++j) this.edge[j + 1] = this.edge[j] + w[j] / total;
    this.edge[n] = 1.0;
    const [gPos, gNeg] = balanceGains(aPos, aNeg, this.balance);
    for (let j = 0; j < n; ++j) this.gain[j] *= this.gain[j] > 0.0 ? gPos : gNeg;
    this.n = n; this.j = 0; this.inc = incFor(this.freq, this.sr);
    if (this.onWaveset) this.onWaveset({ freq: this.freq, edge: Array.from(this.edge.subarray(0, n + 1)), gain: Array.from(this.gain.subarray(0, n)) });
  }
  next() {
    let phase = this.phase;
    if (phase >= 1.0) { phase -= 1.0; this.newGroup(); if (phase >= 1.0) phase = 0.0; }
    while (this.j < this.n - 1 && phase >= this.edge[this.j + 1]) this.j++;
    const j = this.j, a = this.edge[j], b = this.edge[j + 1];
    const v = this.gain[j] * halfCycle(this.shape, (phase - a) / (b - a));
    this.phase = phase + this.inc;
    return zap(v * this.amp);
  }
}

class WsNest {
  constructor(p, sr) {
    this.p = p; this.sr = sr; this.phase = 1.0; this.inc = 0.0;
    this.s = mapInit(f32(val(p.init ?? 0.3)));
    this.r = f32(0.9); this.lo = 2; this.hi = 20; this.amp = 0; this.shape = 0; this.map = 0; this.depth = 2; this.branch = 3;
    this.spread = 1; this.contour = 0; this.skewDepth = 0; this.balance = 0;
    this.n = 1; this.j = 0; this.edge = new Float64Array(4097); this.gain = new Float64Array(4096);
    this.edge[1] = 1.0; this.levels = 0;
  }
  node(b, x, y, prev, level, start, len, sign, env) {
    const s = clampd(0.5 + b.skewDepth * mapSecond(b.map, x, y, prev), 0.01, 0.99);
    const hStart = [start, start + len * s], hLen = [len * s, len * (1.0 - s)], hSign = [sign, -sign];
    const st = { x, y };
    for (let h = 0; h < 2; ++h) {
      if (level === b.depth) {
        this.edge[this.n] = hStart[h];
        this.gain[this.n] = hSign[h] * env;
        if (hSign[h] > 0.0) b.aPos += hLen[h] * env; else b.aNeg += hLen[h] * env;
        this.n++;
        continue;
      }
      const sx = [], sy = [], sp = [], w = [];
      let total = 0.0;
      for (let c = 0; c < b.branch; ++c) {
        sp[c] = st.x;
        stepMap(b.map, b.r, st);
        sx[c] = st.x; sy[c] = st.y;
        w[c] = Math.pow(2, b.spread * (1.0 - 2.0 * st.x));
        total += w[c];
      }
      let pos = hStart[h];
      for (let c = 0; c < b.branch; ++c) {
        const clen = hLen[h] * w[c] / total;
        const centre = (pos + 0.5 * clen - hStart[h]) / hLen[h];
        const cenv = env * (1.0 - b.contour + b.contour * halfCycle(b.shape, centre));
        this.node(b, sx[c], sy[c], sp[c], level + 1, pos, clen, hSign[h], cenv);
        pos += clen;
      }
    }
  }
  newTree() {
    const p = this.p;
    this.r = pull(p.r, this.r); this.lo = pull(p.lo, this.lo); this.hi = pull(p.hi, this.hi); this.amp = pull(p.amp, this.amp);
    this.shape = pull(p.shape, this.shape); this.map = pull(p.map, this.map); this.depth = pull(p.depth, this.depth);
    this.branch = pull(p.branch, this.branch); this.spread = pull(p.spread, this.spread); this.contour = pull(p.contour, this.contour);
    this.skewDepth = pull(p.skewDepth, this.skewDepth); this.balance = pull(p.balance, this.balance);
    const b = { map: Math.trunc(clampd(this.map, 0.0, kNumMaps - 1)), branch: Math.trunc(clampd(this.branch, 1.0, 8)) };
    let depth = Math.trunc(clampd(this.depth, 0.0, 11.0)), halves = 2;
    for (let d = 0; d < depth; ++d) {
      if (halves * 2 * b.branch > 4096) { depth = d; break; }
      halves *= 2 * b.branch;
    }
    b.depth = depth; b.r = this.r; b.spread = this.spread; b.contour = clampd(this.contour, 0.0, 1.0);
    b.shape = this.shape; b.skewDepth = this.skewDepth;
    const prev = this.s.x;
    stepMap(b.map, b.r, this.s);
    const lo = Math.abs(this.lo) < 0.01 ? 0.01 : Math.abs(this.lo), hi = Math.abs(this.hi) < 0.01 ? 0.01 : Math.abs(this.hi);
    this.inc = incFor(lo * Math.pow(hi / lo, this.s.x), this.sr);
    for (;; --b.depth) {
      b.aPos = b.aNeg = 0.0;
      this.n = 0;
      this.node(b, this.s.x, this.s.y, prev, 0, 0.0, 1.0, 1.0, 1.0);
      this.edge[this.n] = 1.0;
      let shortest = 1.0;
      for (let j = 0; j < this.n; ++j) shortest = Math.min(shortest, this.edge[j + 1] - this.edge[j]);
      if (b.depth === 0 || shortest >= 4.0 * this.inc) break;
    }
    this.levels = b.depth;
    const [gPos, gNeg] = balanceGains(b.aPos, b.aNeg, this.balance);
    for (let j = 0; j < this.n; ++j) this.gain[j] *= this.gain[j] > 0.0 ? gPos : gNeg;
    this.j = 0;
    if (this.onWaveset) this.onWaveset({ x: this.s.x, y: this.s.y, prev, freq: this.inc * this.sr, levels: b.depth,
      b: { map: b.map, r: b.r, branch: b.branch, spread: b.spread, contour: b.contour, shape: b.shape, skewDepth: b.skewDepth },
      edge: Array.from(this.edge.subarray(0, this.n + 1)), gain: Array.from(this.gain.subarray(0, this.n)) });
  }
  next() {
    let phase = this.phase;
    if (phase >= 1.0) { phase -= 1.0; this.newTree(); if (phase >= 1.0) phase = 0.0; }
    while (this.j < this.n - 1 && phase >= this.edge[this.j + 1]) this.j++;
    const j = this.j, a = this.edge[j], b = this.edge[j + 1];
    const v = b > a ? this.gain[j] * halfCycle(this.shape, (phase - a) / (b - a)) : 0.0;
    this.phase = phase + this.inc;
    return zap(v * this.amp);
  }
}


// ---- what WsHear hears: SuperCollider's LPF, Ringz and DelayN, and the LocalIn loop ----
// Each filter takes a 64-sample block, as scsynth runs it; a coefficient change ramps across
// the block in steps of three samples (mFilterLoops 21, mFilterRemain 1).

class LPF {
  constructor(freq, sr) { this.sr = sr; this.y1 = 0; this.y2 = 0; this.set(f32(freq)); }
  coef(freq) {
    const pfreq = freq * (kTau / this.sr) * 0.5, C = 1.0 / Math.tan(pfreq), C2 = C * C, sqrt2C = C * f32(Math.SQRT2);
    const a0 = 1.0 / (1.0 + sqrt2C + C2);
    return [a0, -2.0 * (1.0 - C2) * a0, -(1.0 - sqrt2C + C2) * a0];
  }
  set(freq) { this.freq = freq; [this.a0, this.b1, this.b2] = this.coef(freq); }
  block(inp, out, freq) {
    freq = f32(freq);
    let { y1, y2, a0, b1, b2 } = this, y0, i = 0;
    const ramp = freq !== this.freq;
    const [na0, nb1, nb2] = ramp ? this.coef(freq) : [a0, b1, b2];
    const s0 = (na0 - a0) / 21, s1 = (nb1 - b1) / 21, s2 = (nb2 - b2) / 21;
    for (let k = 0; k < 21; k++) {
      y0 = f32(inp[i]) + b1 * y1 + b2 * y2; out[i++] = f32(a0 * (y0 + 2.0 * y1 + y2));
      y2 = f32(inp[i]) + b1 * y0 + b2 * y1; out[i++] = f32(a0 * (y2 + 2.0 * y0 + y1));
      y1 = f32(inp[i]) + b1 * y2 + b2 * y0; out[i++] = f32(a0 * (y1 + 2.0 * y2 + y0));
      if (ramp) { a0 += s0; b1 += s1; b2 += s2; }
    }
    y0 = f32(inp[i]) + b1 * y1 + b2 * y2; out[i] = f32(a0 * (y0 + 2.0 * y1 + y2)); y2 = y1; y1 = y0;
    if (ramp) { this.freq = freq; this.a0 = na0; this.b1 = nb1; this.b2 = nb2; }
    this.y1 = zap64(y1); this.y2 = zap64(y2);
  }
}

class Ringz {
  constructor(freq, decay, sr) { this.sr = sr; this.y1 = 0; this.y2 = 0; this.freq = f32(freq); this.decay = f32(decay); [this.b1, this.b2] = this.coef(this.freq, this.decay); }
  coef(freq, decay) {
    const ffreq = freq * (kTau / this.sr), R = decay === 0 ? 0.0 : Math.exp(Math.log(0.001) / (decay * this.sr));
    const twoR = 2.0 * R, R2 = R * R, cost = (twoR * Math.cos(ffreq)) / (1.0 + R2);
    return [twoR * cost, -R2];
  }
  block(inp, out, freq, decay) {
    freq = f32(freq); decay = f32(decay);
    let { y1, y2, b1, b2 } = this, y0, i = 0;
    const a0 = 0.5, ramp = freq !== this.freq || decay !== this.decay;
    const [nb1, nb2] = ramp ? this.coef(freq, decay) : [b1, b2];
    const s1 = (nb1 - b1) / 21, s2 = (nb2 - b2) / 21;
    for (let k = 0; k < 21; k++) {
      y0 = f32(inp[i]) + b1 * y1 + b2 * y2; out[i++] = f32(a0 * (y0 - y2));
      y2 = f32(inp[i]) + b1 * y0 + b2 * y1; out[i++] = f32(a0 * (y2 - y1));
      y1 = f32(inp[i]) + b1 * y2 + b2 * y0; out[i++] = f32(a0 * (y1 - y0));
      if (ramp) { b1 += s1; b2 += s2; }
    }
    y0 = f32(inp[i]) + b1 * y1 + b2 * y2; out[i] = f32(a0 * (y0 - y2)); y2 = y1; y1 = y0;
    if (ramp) { this.freq = freq; this.decay = decay; this.b1 = nb1; this.b2 = nb2; }
    this.y1 = zap64(y1); this.y2 = zap64(y2);
  }
}

class DelayN {
  constructor(maxTime, sr) { this.sr = sr; this.buf = new Float32Array(Math.ceil(maxTime * sr) + 2); this.w = 0; }
  block(inp, out, time) {
    const n = this.buf.length, d = Math.trunc(clampd(f32(time) * this.sr, 1, n - 1));
    for (let i = 0; i < 64; i++) {
      this.buf[this.w] = inp[i];
      out[i] = this.buf[(this.w - d + n) % n];
      this.w = (this.w + 1) % n;
    }
  }
}

function zap64(x) { const a = Math.abs(x); return a > 1e-15 && a < 1e15 ? x : 0; }

// WsHear inside a LocalIn/LocalOut loop: the input to each 64-sample block is the previous
// block's output after `loop` (a function filling `heard` from `prev`), as in scsynth.
class HearLoop {
  constructor(hear, loop) { this.hear = hear; this.loop = loop; this.prev = new Float32Array(64); this.heard = new Float32Array(64); this.cur = new Float32Array(64); this.i = 64; }
  next() {
    if (this.i >= 64) { this.loop(this.prev, this.heard); this.i = 0; }
    const y = this.hear.next(this.heard[this.i]);
    this.cur[this.i++] = y;
    if (this.i >= 64) this.prev.set(this.cur);
    return y;
  }
}

const UGENS = { WsGen, WsMap, WsHear, WsGendy, WsGroup, WsNest };

// ---- building a running generator from a plain description (worklet, drawings, tests) ----

// a parameter spec is a number, or { D: 'stutter' | 'lin' | 'map' | 'seq', ... }
function makeStream(spec) {
  if (typeof spec === 'number') return spec;
  switch (spec.D) {
    case 'seq': return new Dseq(spec.list.map(makeStream));
    case 'stutter': return new Dstutter(makeStream(spec.n), makeStream(spec.src));
    case 'lin': return new Dlin(makeStream(spec.src), spec.mul, spec.add);
    case 'map': return new Dmap({ r: makeStream(spec.r), map: makeStream(spec.map), init: spec.init ?? 0.3, axis: spec.axis ?? 0, hyst: spec.hyst ?? 0 });
  }
  throw new Error('unknown stream ' + spec.D);
}

// cfg: { ugen, p: { name: number | stream spec }, seed, loop: { type, freq, decay, time } }
// returns { u, next() }; for WsHear the loop reads cfg.loop on every block, so it can change live
function makeGenerator(cfg, sr) {
  const p = {};
  for (const k in cfg.p) p[k] = makeStream(cfg.p[k]);
  const U = UGENS[cfg.ugen];
  const u = new U(p, sr, new RGen(cfg.seed ?? 1));
  if (cfg.ugen !== 'WsHear') return { u, next: () => u.next() };
  const lp = new LPF(cfg.loop.freq, sr), rz = new Ringz(cfg.loop.freq, cfg.loop.decay ?? 0.05, sr), dl = new DelayN(0.5, sr);
  const loop = new HearLoop(u, (a, b) => {
    const L = cfg.loop;
    if (L.type === 'resonator') { rz.block(a, b, L.freq, L.decay ?? 0.05); for (let i = 0; i < 64; i++) b[i] = f32(b[i] * f32(0.1)); }
    else if (L.type === 'delay') dl.block(a, b, L.time);
    else lp.block(a, b, L.freq);
  });
  return { u, next: () => loop.next() };
}

