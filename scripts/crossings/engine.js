/* Client side of every Crossings figure. The generators come from core.js (inlined as
 * #crossingscore), so the drawings render the same code the audio thread runs: while
 * stopped the page renders a few seconds itself, while playing it draws what the
 * worklet sends. Each page sets DEMO (generator, view, how controls map to inputs). */
(function () {
  const D = window.DEMO;
  const lib = new Function(document.getElementById('crossingscore').textContent +
    '; return { makeGenerator, stepMap, mapInit, halfCycle, WsGendy, WsNest, MAP_NAMES };')();
  const IDS = [...document.querySelectorAll('.grid input, .grid select')].map(e => e.id);
  Kit.compact();
  const el = Kit.controls(IDS);
  const read = () => Kit.readouts(el, /^(shape|skew|balance|glide|ampDepth|hyst|r|sr|rLo|rHi|ampStep|freqStep|interp|tilt|decay|flip|spread|contour|skewDepth|couple|gain|loopTime)$/);
  const css = Kit.css;
  const waveCv = document.getElementById('view'), lowCv = document.getElementById('spec');
  const wctx = Kit.fit(waveCv), lctx = Kit.fit(lowCv);
  const SR = 48000;

  // ---- controls to a generator description, the same one the worklet builds -----------
  function config() {
    const v = Kit.values(el);
    const p = {};
    for (const k of D.inputs) p[k] = v[k] ?? D.fixed[k];
    Object.assign(p, D.fixed);
    if (D.ugen === 'WsMap' && 'smap' in v)   // the slow map: r from Dstutter(hold, Dmap(sr, smap) * (rHi - rLo) + rLo)
      p.r = { D: 'stutter', n: v.hold, src: { D: 'lin', src: { D: 'map', r: v.sr, map: v.smap }, mul: v.rHi - v.rLo, add: v.rLo } };
    const loop = { type: v.loop || 'lowpass', freq: v.loopFreq || 600, decay: 0.05, time: v.loopTime || 0.1 };
    return { ugen: D.ugen, p, seed: D.seed || 1, loop, gain: v.gain };
  }

  // ---- what is drawn: a ring of recent output and the wavesets that started in it -------
  const RING = 1 << 18;
  let ring = new Float32Array(RING), total = 0, recs = [];
  function push(wave, rs) {
    for (let i = 0; i < wave.length; i++) ring[(total + i) & (RING - 1)] = wave[i];
    total += wave.length;
    for (const r of rs) recs.push(r);
    if (recs.length > 2000) recs.splice(0, recs.length - 2000);
  }
  function preview() {
    ring = new Float32Array(RING); total = 0; recs = [];
    const g = lib.makeGenerator(config(), SR), seconds = D.preview || 1.5, n = Math.round(seconds * SR);
    const out = new Float32Array(n);
    g.u.onWaveset = r => { r.at = i; recs.push(r); };
    let i = 0;
    for (; i < n; i++) out[i] = g.next();
    push(out, []);
  }
  const playing = () => document.getElementById('play').classList.contains('on');

  // the last `count` complete wavesets (or groups, or trees)
  function windowOf(count) {
    const done = recs.filter(r => r.at < total);
    if (done.length < 2) return { a: Math.max(0, total - 2048), b: total, rs: done };
    const last = done.length - 1, first = Math.max(0, last - count);
    let a = done[first].at, b = done[last].at;
    if (b - a > RING - 1024) a = b - (RING - 1024);
    if (total - a > RING) a = total - RING + 1;
    return { a, b, rs: done.slice(first, last + 1) };
  }

  // ---- drawing helpers ------------------------------------------------------------
  const dim = a => `rgba(255,255,255,${a})`;
  function label(ctx, text, x, y, color) { ctx.fillStyle = color || css('--muted'); ctx.font = '10.5px ' + css('--sans'); ctx.fillText(text, x, y); }

  function drawWave(ctx, W, H, a, b, rs, marks) {
    ctx.clearRect(0, 0, W, H);
    const pad = 10, mid = H / 2, amp = (H / 2 - 14), n = Math.max(1, b - a), sx = (W - 2 * pad) / n;
    ctx.strokeStyle = dim(0.12); ctx.beginPath(); ctx.moveTo(pad, mid); ctx.lineTo(W - pad, mid); ctx.stroke();
    // waveset starts
    ctx.strokeStyle = dim(0.16); ctx.setLineDash([2, 4]); ctx.beginPath();
    for (const r of rs) { const x = pad + (r.at - a) * sx; ctx.moveTo(x, 8); ctx.lineTo(x, H - 8); }
    ctx.stroke(); ctx.setLineDash([]);
    ctx.strokeStyle = css('--accent'); ctx.lineWidth = 1.3; ctx.beginPath();
    const at = i => ring[(a + i) & (RING - 1)] / (D.scale || 1);
    if (n / (W - 2 * pad) > 2) {   // more than two samples a pixel: draw each column's range
      const cols = Math.floor(W - 2 * pad);
      for (let c = 0; c < cols; c++) {
        let lo = Infinity, hi = -Infinity;
        for (let i = Math.floor(c / sx); i < Math.floor((c + 1) / sx); i++) { const v = at(i); if (v < lo) lo = v; if (v > hi) hi = v; }
        ctx.moveTo(pad + c + 0.5, mid - hi * amp); ctx.lineTo(pad + c + 0.5, mid - lo * amp);
      }
    } else {
      for (let i = 0; i <= n; i++) { const x = pad + i * sx, y = mid - at(i) * amp; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    }
    ctx.stroke(); ctx.lineWidth = 1;
    if (marks) marks(ctx, pad, sx, a, mid);
  }

  // magnitude spectrum of the last 8192 samples, in dB, with the DC bin drawn apart
  function fft(re, im) {
    const n = re.length;
    for (let i = 1, j = 0; i < n; i++) { let bit = n >> 1; for (; j & bit; bit >>= 1) j ^= bit; j ^= bit; if (i < j) { [re[i], re[j]] = [re[j], re[i]]; [im[i], im[j]] = [im[j], im[i]]; } }
    for (let len = 2; len <= n; len <<= 1) {
      const ang = -2 * Math.PI / len;
      for (let i = 0; i < n; i += len) for (let k = 0; k < len / 2; k++) {
        const c = Math.cos(ang * k), s = Math.sin(ang * k), a = i + k, b = a + len / 2;
        const tr = re[b] * c - im[b] * s, ti = re[b] * s + im[b] * c;
        re[b] = re[a] - tr; im[b] = im[a] - ti; re[a] += tr; im[a] += ti;
      }
    }
  }
  function drawSpectrum(ctx, W, H, maxHz) {
    ctx.clearRect(0, 0, W, H);
    const N = 8192, re = new Float64Array(N), im = new Float64Array(N);
    for (let i = 0; i < N; i++) re[i] = ring[(total - N + i) & (RING - 1)] * (0.5 - 0.5 * Math.cos(2 * Math.PI * i / N));
    fft(re, im);
    const mag = i => 20 * Math.log10(Math.max(1e-7, 4 * Math.hypot(re[i], im[i]) / N));
    const padL = 36, padR = 10, pt = 14, pb = 22, w = W - padL - padR, h = H - pt - pb, top = 0, lo = -80;
    const X = f => padL + f / maxHz * w, Y = d => pt + (1 - (Math.max(lo, Math.min(top, d)) - lo) / (top - lo)) * h;
    ctx.font = '10px ' + css('--sans'); ctx.fillStyle = css('--muted'); ctx.strokeStyle = dim(0.07);
    for (let g = 0; g <= 80; g += 20) { const y = Y(-g); ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke(); ctx.fillText(g ? '-' + g : '0 dB', 2, y + 3); }
    const step = maxHz > 6000 ? 2000 : maxHz > 2500 ? 1000 : maxHz > 1000 ? 500 : 100;
    for (let f = 0; f <= maxHz; f += step) ctx.fillText(f >= 1000 ? f / 1000 + 'k' : f, X(f) - 6, H - 6);
    ctx.beginPath(); ctx.moveTo(X(0), Y(lo));
    const bins = Math.min(N / 2, Math.ceil(maxHz / (SR / N)));
    for (let i = 1; i < bins; i++) ctx.lineTo(X(i * SR / N), Y(mag(i)));
    ctx.lineTo(X(bins * SR / N), Y(lo)); ctx.closePath();
    ctx.fillStyle = 'rgba(120,165,210,.25)'; ctx.fill(); ctx.strokeStyle = css('--accent'); ctx.stroke();
    // DC: the mean, measured over whole wavesets so it does not depend on where the window falls
    const { a, b } = windowOf(D.count || 4);
    let s = 0; for (let i = a; i < b; i++) s += ring[i & (RING - 1)];
    const dc = b > a ? s / (b - a) : 0, dcDb = 20 * Math.log10(Math.max(1e-7, Math.abs(dc)));
    ctx.strokeStyle = css('--rose'); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(X(0) + 2, Y(lo)); ctx.lineTo(X(0) + 2, Y(dcDb)); ctx.stroke(); ctx.lineWidth = 1;
    return dc;
  }

  // x against r for the current map, computed once per map and size
  const bifCache = {};
  function bifurcation(map, W, H) {
    const key = map + ':' + W + 'x' + H;
    if (bifCache[key]) return bifCache[key];
    const off = document.createElement('canvas'); off.width = W; off.height = H;
    const c = off.getContext('2d'), img = c.createImageData(W, H);
    for (let col = 0; col < W; col++) {
      const r = col / (W - 1), s = lib.mapInit(0.3);
      for (let k = 0; k < 300; k++) lib.stepMap(map, r, s);
      for (let k = 0; k < 220; k++) {
        lib.stepMap(map, r, s);
        const row = Math.round((1 - s.x) * (H - 1)), o = (row * W + col) * 4;
        img.data[o] = 210; img.data[o + 1] = 215; img.data[o + 2] = 225; img.data[o + 3] = Math.min(255, img.data[o + 3] + 70);
      }
    }
    c.putImageData(img, 0, 0);
    return (bifCache[key] = off);
  }
  function drawBif(ctx, W, H, map, rs, heard) {
    ctx.clearRect(0, 0, W, H);
    const padL = 26, pb = 18, pt = 8, w = Math.floor(W - padL - 8), h = Math.floor(H - pt - pb);
    ctx.globalAlpha = 0.55; ctx.drawImage(bifurcation(map, w, h), padL, pt); ctx.globalAlpha = 1;
    label(ctx, 'x', 6, pt + 10); label(ctx, '0', padL - 2, H - 4); label(ctx, 'r', padL + w / 2, H - 4); label(ctx, '1', padL + w - 6, H - 4);
    const X = r => padL + r * w, Y = x => pt + (1 - x) * h;
    const last = rs[rs.length - 1];
    if (last) { ctx.strokeStyle = css('--gold'); ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(X(last.r), pt); ctx.lineTo(X(last.r), pt + h); ctx.stroke(); ctx.setLineDash([]); }
    for (const r of rs.slice(-120)) {
      ctx.fillStyle = css('--accent'); ctx.beginPath(); ctx.arc(X(r.r), Y(r.x), 2.2, 0, 7); ctx.fill();
      if (heard && r.heard >= 0) { ctx.fillStyle = css('--mint'); ctx.beginPath(); ctx.arc(X(r.r) + 5, Y(r.heard), 2, 0, 7); ctx.fill(); }
    }
  }

  // r and x over the last few hundred wavesets
  function drawTrace(ctx, W, H, rs) {
    ctx.clearRect(0, 0, W, H);
    const pad = 12, w = W - 2 * pad, h = H - 28, list = rs.slice(-500), n = Math.max(1, list.length - 1);
    const X = i => pad + i / n * w, Y = v => 10 + (1 - v) * h;
    ctx.strokeStyle = css('--gold'); ctx.lineWidth = 1.4; ctx.beginPath();
    list.forEach((r, i) => { i ? ctx.lineTo(X(i), Y(r.r)) : ctx.moveTo(X(i), Y(r.r)); });
    ctx.stroke(); ctx.lineWidth = 1;
    ctx.fillStyle = css('--accent');
    list.forEach((r, i) => { ctx.fillRect(X(i) - 1, Y(r.x) - 1, 2, 2); });
    label(ctx, 'last ' + list.length + ' wavesets', W - pad - 110, H - 4);
  }

  // the breakpoints of the current waveset, and the walk of its frequency
  function drawGendy(ctx, W, H, rs, v) {
    ctx.clearRect(0, 0, W, H);
    const last = rs[rs.length - 1]; if (!last) return;
    const left = W * 0.62, pad = 12, mid = H / 2, amp = H / 2 - 16, s = Math.min(0.99, Math.max(0.01, v.skew)), it = v.interp;
    ctx.strokeStyle = dim(0.12); ctx.beginPath(); ctx.moveTo(pad, mid); ctx.lineTo(left - pad, mid); ctx.stroke();
    const X = p => pad + p * (left - 2 * pad);
    ctx.strokeStyle = css('--accent'); ctx.lineWidth = 1.5; ctx.beginPath();
    for (let i = 0; i <= 400; i++) {
      const p = i / 400, y = p < s ? lib.WsGendy.curve(last.pos, last.pos.length, p / s, it) : -lib.WsGendy.curve(last.neg, last.neg.length, (p - s) / (1 - s), it);
      i ? ctx.lineTo(X(p), mid - y * amp) : ctx.moveTo(X(p), mid - y * amp);
    }
    ctx.stroke(); ctx.lineWidth = 1;
    ctx.fillStyle = css('--gold'); const n = last.pos.length;
    for (let k = 0; k < n; k++) {
      const pp = (k + 1) / (n + 1);
      ctx.beginPath(); ctx.arc(X(pp * s), mid - last.pos[k] * amp, 3, 0, 7); ctx.fill();
      ctx.beginPath(); ctx.arc(X(s + pp * (1 - s)), mid + last.neg[k] * amp, 3, 0, 7); ctx.fill();
    }
    label(ctx, 'one waveset, breakpoints', pad, H - 4);
    // frequency walk, log scale between minFreq and maxFreq
    const lo = Math.log2(Math.min(v.minFreq, v.maxFreq)), hi = Math.log2(Math.max(v.minFreq, v.maxFreq)), list = rs.slice(-160);
    const x0 = left + 10, w = W - x0 - pad, Y = f => 10 + (1 - (Math.log2(f) - lo) / Math.max(1e-9, hi - lo)) * (H - 30);
    ctx.strokeStyle = dim(0.15); ctx.strokeRect(x0, 10, w, H - 30);
    ctx.strokeStyle = css('--mint'); ctx.beginPath();
    list.forEach((r, i) => { const x = x0 + i / Math.max(1, list.length - 1) * w; i ? ctx.lineTo(x, Y(r.freq)) : ctx.moveTo(x, Y(r.freq)); });
    ctx.stroke();
    label(ctx, 'waveset frequency', x0, H - 4);
  }

  // the levels of the current tree, as rows of half-cycles: light positive, dark negative
  function drawTree(ctx, W, H, last) {
    ctx.clearRect(0, 0, W, H);
    if (!last) return;
    const pad = 12, w = W - 2 * pad, rows = last.levels + 1, rh = Math.min(26, (H - 30) / rows);
    const scratch = { edge: new Float64Array(4097), gain: new Float64Array(4096), n: 0, node: lib.WsNest.prototype.node };
    for (let L = 0; L <= last.levels; L++) {
      scratch.n = 0;
      const b = Object.assign({}, last.b, { depth: L, aPos: 0, aNeg: 0 });
      scratch.node(b, last.x, last.y, last.prev, 0, 0, 1, 1, 1);
      scratch.edge[scratch.n] = 1;
      const y = 8 + L * rh;
      for (let j = 0; j < scratch.n; j++) {
        const x0 = pad + scratch.edge[j] * w, x1 = pad + scratch.edge[j + 1] * w;
        ctx.fillStyle = scratch.gain[j] > 0 ? 'rgba(120,165,210,.75)' : 'rgba(120,165,210,.25)';
        ctx.fillRect(x0, y, Math.max(0.6, x1 - x0 - (x1 - x0 > 3 ? 1 : 0)), rh - 4);
      }
      label(ctx, L === 0 ? 'level 0' : String(L), W - pad - 40, y + rh - 8, dim(0.6));
    }
    // zero crossings lost: neighbouring bottom half-cycles with the same sign
    const g = last.gain, e = last.edge, yb = 8 + rows * rh + 4;
    ctx.fillStyle = css('--rose'); let lost = 0;
    for (let j = 1; j < g.length; j++) if ((g[j] > 0) === (g[j - 1] > 0)) { lost++; ctx.beginPath(); ctx.arc(pad + e[j] * w, yb, 2.4, 0, 7); ctx.fill(); }
    label(ctx, `${g.length} half-cycles, ${lost} zero crossings removed by a parent's sign change`, pad, H - 4);
    return lost;
  }

  // smallest period (up to 16) of the last 64 states, or 0 if none
  function period(rs) {
    const xs = rs.slice(-64).map(r => r.x);
    if (xs.length < 48) return -1;
    for (let p = 1; p <= 16; p++) { let ok = true; for (let i = p; i < xs.length; i++) if (Math.abs(xs[i] - xs[i - p]) > 1e-6) { ok = false; break; } if (ok) return p; }
    return 0;
  }
  const describePeriod = p => (p < 0 ? '' : p === 0 ? 'no period up to 16: chaotic or quasi-periodic' : p === 1 ? 'fixed point' : 'period ' + p);

  // ---- per-view drawing ---------------------------------------------------------------
  const readout = document.getElementById('readout');
  function draw() {
    const v = Kit.values(el);
    const Ww = waveCv.getBoundingClientRect().width, Hw = waveCv.getBoundingClientRect().height;
    const Wl = lowCv.getBoundingClientRect().width, Hl = lowCv.getBoundingClientRect().height;
    const { a, b, rs } = windowOf(D.count || 6);
    const done = recs.filter(r => r.at < total), last = done[done.length - 1];
    let text = '';
    drawWave(wctx, Ww, Hw, a, b, rs);
    if (D.view === 'spectrum') {
      const dc = drawSpectrum(lctx, Wl, Hl, D.maxHz(v));
      text = (last ? `waveset ${Math.round(last.freq)} Hz` : '') + `  ·  DC ${dc.toFixed(4)}`;
    } else if (D.view === 'bif') {
      drawBif(lctx, Wl, Hl, Math.trunc(v.map), done, D.ugen === 'WsHear');
      text = last ? `x ${last.x.toFixed(3)}  ·  waveset ${Math.round(last.freq)} Hz  ·  ${describePeriod(period(done))}` : '';
      if (D.ugen === 'WsHear' && last) {
        const hs = done.slice(-64).filter(r => r.heard >= 0);
        const md = hs.length ? hs.reduce((s, r) => s + Math.abs(r.heard - r.x), 0) / hs.length : 0;
        text += `  ·  heard ${hs.length} of the last ${Math.min(64, done.length)}, mean |heard − made| ${md.toFixed(3)}`;
      }
    } else if (D.view === 'trace') {
      drawTrace(lctx, Wl, Hl, done);
      text = last ? `r ${last.r.toFixed(3)}  ·  x ${last.x.toFixed(3)}  ·  ${describePeriod(period(done))}` : '';
    } else if (D.view === 'gendy') {
      drawGendy(lctx, Wl, Hl, done, v);
      text = last ? `waveset ${Math.round(last.freq)} Hz` : '';
    } else if (D.view === 'nest') {
      drawTree(lctx, Wl, Hl, last);
      text = last ? `top waveset ${last.freq.toFixed(2)} Hz  ·  levels drawn ${last.levels} of ${Math.trunc(v.depth)}` + (last.levels < Math.trunc(v.depth) ? ' (lowered so no half-cycle is under 4 samples)' : '') : '';
    }
    if (readout) readout.textContent = text;
  }

  // ---- audio and lifecycle ------------------------------------------------------------
  let dirty = true;
  const getState = Kit.playButton(document.getElementById('play'), async () => {
    const s = await Kit.build({ processor: 'crossings', prelude: ['crossingscore'] });
    ring = new Float32Array(RING); total = 0; recs = [];
    s.node.port.onmessage = e => push(e.data.wave, e.data.recs.map(r => Object.assign(r, {})));
    s.node.port.postMessage({ type: 'params', value: config() });
    return s;
  });
  function send() { const s = getState(); if (s) s.node.port.postMessage({ type: 'params', value: config() }); }
  IDS.forEach(id => el[id].addEventListener('input', () => { read(); send(); dirty = true; }));
  Kit.presets(window.PRESETS || {}, p => { for (const k in p) if (el[k]) el[k].value = p[k]; read(); send(); dirty = true; });
  read();
  (function loop() {
    if (!playing() && dirty) { preview(); dirty = false; }
    draw();
    requestAnimationFrame(loop);
  })();
})();
