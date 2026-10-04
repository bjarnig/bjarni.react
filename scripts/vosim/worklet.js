/* VOSIM as an AudioWorklet. Up to three voices share one period (the book, p. 285:
 * several VOSIM functions with identical periods and different pulse widths give as
 * many formant peaks). core.js is prepended by the build. */
class VosimProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.p = { fund: 110, form1: 880, form2: 1760, form3: 2640, g1: 1, g2: 0, g3: 0,
               N: 6, b: 0.85, env: 0, decay: 0.15, modDepth: 0, modRate: 5, gain: 0.2 };
    this.t = 0;           // seconds into the current period
    this.T = 1 / this.p.fund;
    this.lfo = 0;         // phase of the zero-interval modulation, in cycles
    this.port.onmessage = e => {
      if (e.data.type !== 'params') return;
      Object.assign(this.p, e.data.value);
      if (!this.live) { this.live = true; this.T = 1 / this.p.fund; this.t = 0; }   // first message sets the first period
    };
  }
  process(inputs, outputs) {
    const out = outputs[0], ch = out[0], n = ch.length, p = this.p, dt = 1 / sampleRate;
    const W1 = 1 / p.form1, W2 = 1 / p.form2, W3 = 1 / p.form3;
    for (let i = 0; i < n; i++) {
      if (this.t >= this.T) {
        this.t -= this.T;
        this.lfo += this.T * p.modRate; this.lfo -= Math.floor(this.lfo);
        this.T = vosimPeriod(p.fund, p.modDepth, Math.sin(2 * Math.PI * this.lfo));
        if (this.t >= this.T) this.t = 0;
      }
      const t = this.t;
      let y = 0;
      if (p.g1) y += p.g1 * vosimSample(t, vosimPulses(p.N, W1, this.T), W1, p.b, p.env, p.decay);
      if (p.g2) y += p.g2 * vosimSample(t, vosimPulses(p.N, W2, this.T), W2, p.b, p.env, p.decay);
      if (p.g3) y += p.g3 * vosimSample(t, vosimPulses(p.N, W3, this.T), W3, p.b, p.env, p.decay);
      ch[i] = y * p.gain;
      this.t += dt;
    }
    for (let c = 1; c < out.length; c++) out[c].set(ch);
    return true;
  }
}
registerProcessor('vosim', VosimProcessor);
