/* VOSIM maths, shared by the audio thread, the drawings and the tests.
 *
 * Definitions follow Tempelaars, "Signal Processing, Speech and Music" (1996),
 * section 4.3, which gives the signal of Tempelaars (1977):
 *
 *   one period T holds N pulses of sin^2, each of width W, followed by silence;
 *   pulse n (n = 0 .. N-1) is scaled by b^n, a staircase with a constant ratio b
 *   between consecutive levels; p(t) = (1 - cos 2 pi t/W) / 2 inside a pulse.
 *
 * Pitch is 1 / T, the formant peak sits at F = 1 / W, and the silence is T - N W.
 * Everything below is in seconds and Hz.
 */

// Level of pulse n in the original VOSIM (mode 0): b^n.
// Mode 1 subtracts d per pulse (the Csound opcode's decay); mode 2 is a smooth
// exponential b^(t/W), the envelope of the recursive realisation in the book's
// fig. 6.3.20. Only mode 0 is the original signal.
function vosimLevel(mode, n, frac, b, d) {
  if (mode === 1) { const v = 1 - n * d; return v > 0 ? v : 0; }
  if (mode === 2) return Math.pow(b, n + frac);
  return Math.pow(b, n);
}

// How many pulses fit in a period of T seconds: N, but never past the period.
function vosimPulses(N, W, T) {
  const fit = Math.floor(T / W + 1e-9);
  return N < fit ? N : fit;
}

// y(t) for one voice, t = seconds since the period began. Continuous in time:
// the staircase steps land where p(t) is zero, so the signal has no jump.
function vosimSample(t, Neff, W, b, mode, d) {
  if (t < 0) return 0;
  const n = Math.floor(t / W);
  if (n >= Neff) return 0;
  const frac = t / W - n;
  return vosimLevel(mode, n, frac, b, d) * 0.5 * (1 - Math.cos(2 * Math.PI * frac));
}

// Tempelaars 1996 p. 138: amplitude of harmonic x (x may be non-integer, for the
// envelope) of the period T, with gamma = W / T. The first factor is the spectrum
// of one sin^2 pulse, the second the geometric series over the staircase.
function vosimHarmonic(x, T, N, W, b) {
  const g = W / T, xg = x * g;
  let one;
  if (x < 1e-9) one = g;                                  // limit at x = 0
  else if (Math.abs(xg * xg - 1) < 1e-9) one = 0.5 / x;   // limit at x g = 1
  else one = Math.abs(Math.sin(Math.PI * xg) / (Math.PI * x * (xg * xg - 1)));
  const bN = Math.pow(b, N), cNg = Math.cos(2 * Math.PI * N * xg);
  const num = 1 - 2 * bN * cNg + bN * bN;
  const den = 1 - 2 * b * Math.cos(2 * Math.PI * xg) + b * b;
  const geo = den < 1e-12 ? N : Math.sqrt(Math.max(0, num / den));
  return one * geo;
}

// The length of a period when the zero interval is modulated: only the silence
// changes, the pulses do not. lfo in [-1, 1].
function vosimPeriod(fund, depth, lfo) {
  const T = 1 / fund * (1 + depth * lfo);
  return T;
}
