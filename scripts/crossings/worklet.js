/* One processor for every Crossings figure. core.js is prepended by the build, so the
 * audio runs the same port of the UGens that the drawings and the tests use. */
class CrossingsProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.gain = 0.2; this.g = null; this.cfg = null; this.key = '';
    this.chunk = new Float32Array(Math.ceil(sampleRate / 20) + 128); this.fill = 0;
    this.recs = []; this.total = 0;
    this.port.onmessage = e => { if (e.data.type === 'params') this.set(e.data.value); };
  }
  set(v) {
    this.gain = v.gain;
    // a change of generator, seed or any stream rebuilds it; plain numbers change in place
    const key = JSON.stringify([v.ugen, v.seed, Object.entries(v.p).filter(([, x]) => typeof x !== 'number')]);
    if (!this.g || key !== this.key) {
      this.cfg = { ugen: v.ugen, p: v.p, seed: v.seed, loop: Object.assign({}, v.loop) };
      this.g = makeGenerator(this.cfg, sampleRate);
      this.g.u.onWaveset = r => { r.at = this.total; this.recs.push(r); if (this.recs.length > 400) this.recs.shift(); };
      this.key = key;
    } else {
      for (const k in v.p) if (typeof v.p[k] === 'number') this.g.u.p[k] = v.p[k];
      Object.assign(this.cfg.loop, v.loop);
    }
  }
  process(inputs, outputs) {
    const out = outputs[0], ch = out[0], n = ch.length;
    for (let i = 0; i < n; i++) {
      const y = this.g ? this.g.next() : 0;
      ch[i] = y * this.gain;
      this.chunk[this.fill++] = y;
      this.total++;
    }
    for (let c = 1; c < out.length; c++) out[c].set(ch);
    if (this.fill >= sampleRate / 20) {   // ~20 snapshots a second: the new samples and wavesets
      this.port.postMessage({ wave: this.chunk.slice(0, this.fill), recs: this.recs, total: this.total });
      this.fill = 0; this.recs = [];
    }
    return true;
  }
}
registerProcessor('crossings', CrossingsProcessor);
