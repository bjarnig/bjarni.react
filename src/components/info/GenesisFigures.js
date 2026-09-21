import React from 'react';

/* Figures for /works/docs/genesis.
   The two data figures carry numbers measured by rendering each of the ten
   processes for sixty seconds; see Works/Tools/genesis-verify/analysis.json.
   Coordinates for the field map are a classical MDS of that run's distance
   matrix, computed once and embedded so the page has nothing to compute. */

const INK = '#ffffff';
const ACCENT = '#A3CEF1';
const DIM = '#cfd2da';
const dim = a => `rgba(255,255,255,${a})`;
const FONT = '"Avenir Next", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif';
const SERIF = 'Palatino, "Book Antiqua", Georgia, serif';

/* ---- Fig: spectral centroid across the three thirds of each render ---- */

const THIRDS = [
  { name: 'bramble', c: [14868, 15467, 15005] },
  { name: 'sedge', c: [10480, 10579, 10771] },
  { name: 'nettle', c: [9589, 9661, 9478] },
  { name: 'moss', c: [8316, 8436, 8385] },
  { name: 'yarrow', c: [7377, 6608, 5052] },
  { name: 'thistle', c: [6874, 6885, 6867] },
  { name: 'fern', c: [6637, 6667, 6661] },
  { name: 'teasel', c: [5231, 5068, 4876] },
  { name: 'gorse', c: [2281, 2204, 2302] },
  { name: 'clover', c: [1721, 1778, 1754] }
];

export function ThirdsFigure() {
  const W = 1000, H = 400, L = 54, R = 134, T = 26, B = 40;
  const iw = W - L - R, ih = H - T - B;
  const max = 16000;
  const x = i => L + (i / 2) * iw;
  const y = hz => T + ih - (hz / max) * ih;

  // several processes finish at similar centroids, so the end labels would sit on
  // top of one another: nudge them apart in order, each kept near its own line
  const GAP = 18;
  const nudged = THIRDS.map(q => ({ name: q.name, at: y(q.c[2]) }))
    .sort((a, b) => a.at - b.at);
  for (let i = 1; i < nudged.length; i++)
    if (nudged[i].at - nudged[i - 1].at < GAP) nudged[i].at = nudged[i - 1].at + GAP;
  const labelY = {};
  nudged.forEach(l => { labelY[l.name] = l.at; });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img"
         aria-label="Spectral centroid measured over three thirds of each sixty second render"
         style={{ display: 'block', overflow: 'visible' }}>
      {[0, 4000, 8000, 12000, 16000].map(hz => (
        <g key={hz}>
          <line x1={L} y1={y(hz)} x2={L + iw} y2={y(hz)} stroke={dim(0.1)} />
          <text x={L - 8} y={y(hz) + 4} textAnchor="end" fill={dim(0.45)}
                fontSize="13" fontFamily={FONT}>{hz / 1000}k</text>
        </g>
      ))}
      {['first', 'second', 'third'].map((lab, i) => (
        <text key={lab} x={x(i)} y={H - 12} textAnchor="middle" fill={dim(0.45)}
              fontSize="13" fontFamily={FONT}>{lab}</text>
      ))}
      {THIRDS.map(p => {
        const travels = p.name === 'yarrow';
        return (
          <g key={p.name}>
            <polyline
              points={p.c.map((hz, i) => `${x(i)},${y(hz)}`).join(' ')}
              fill="none"
              stroke={travels ? ACCENT : dim(0.3)}
              strokeWidth={travels ? 2.6 : 1.4} />
            {p.c.map((hz, i) => (
              <circle key={i} cx={x(i)} cy={y(hz)} r={travels ? 4 : 2.6}
                      fill={travels ? ACCENT : dim(0.34)} />
            ))}
            <line x1={L + iw + 3} y1={y(p.c[2])} x2={L + iw + 14} y2={labelY[p.name]}
                  stroke={travels ? ACCENT : dim(0.22)} strokeWidth="1" />
            <text x={L + iw + 18} y={labelY[p.name] + 4}
                  fill={travels ? ACCENT : dim(0.5)}
                  fontSize={travels ? 14 : 13} fontFamily={FONT}>
              {p.name}{travels ? '  − 32%' : ''}
            </text>
          </g>
        );
      })}
      <text x={L} y={T - 10} fill={dim(0.45)} fontSize="13" fontFamily={FONT}>
        spectral centroid, Hz
      </text>
    </svg>
  );
}

/* ---- Fig: the material field, MDS of the measured distance matrix ---- */

const FIELD = [
  { name: 'bramble', x: 0.185, y: 0.932, used: true },
  { name: 'clover', x: 1.000, y: 0.404, used: true },
  { name: 'fern', x: 0.412, y: 0.455, used: true },
  { name: 'gorse', x: 0.662, y: 0.000, used: false },
  { name: 'moss', x: 0.511, y: 0.726, used: true },
  { name: 'nettle', x: 0.000, y: 0.258, used: true },
  { name: 'sedge', x: 0.286, y: 0.798, used: false },
  { name: 'teasel', x: 0.841, y: 0.628, used: true },
  { name: 'thistle', x: 0.325, y: 0.440, used: false },
  { name: 'yarrow', x: 0.796, y: 1.000, used: true }
];

export function FieldFigure() {
  const W = 1000, H = 440, M = 70;
  const px = v => M + v * (W - 2 * M);
  const py = v => H - M - v * (H - 2 * M);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img"
         aria-label="The ten processes placed by measured distance from one another"
         style={{ display: 'block', overflow: 'visible' }}>
      <rect x={M - 18} y={M - 18} width={W - 2 * M + 36} height={H - 2 * M + 36}
            fill="none" stroke={dim(0.09)} />
      {FIELD.map(p => (
        <g key={p.name}>
          <circle cx={px(p.x)} cy={py(p.y)} r={p.used ? 7 : 5.5}
                  fill={p.used ? ACCENT : 'none'}
                  stroke={p.used ? ACCENT : dim(0.42)} strokeWidth="1.6" />
          <text x={px(p.x)} y={py(p.y) - 14} textAnchor="middle"
                fill={p.used ? INK : dim(0.5)} fontSize="14" fontFamily={FONT}>
            {p.name}
          </text>
        </g>
      ))}
      <text x={M - 18} y={H - M + 34} fill={dim(0.42)} fontSize="13" fontFamily={FONT}>
        relative distance only: closer means harder to tell apart, directions carry no meaning
      </text>
    </svg>
  );
}

/* ---- Fig: the SSP ladder, and the scale this piece adds above it ---- */

export function LadderFigure() {
  const W = 1000, H = 300;
  const steps = [
    { label: 'LIST', note: 'the values available' },
    { label: 'SELECT', note: 'which of them, by principle' },
    { label: 'SEGMENT', note: 'grouped into segments' },
    { label: 'PERMUTATION', note: 'put in an order' },
    { label: 'SOUND', note: 'a waveform' }
  ];
  const bw = 168, gap = 22, y = 150, h = 58;
  const x0 = (W - (steps.length * bw + (steps.length - 1) * gap)) / 2;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img"
         aria-label="Koenig's SSP hierarchy, with the form scale this piece adds above it"
         style={{ display: 'block', overflow: 'visible' }}>
      <rect x={x0} y={38} width={W - 2 * x0} height={h} fill="none"
            stroke={ACCENT} strokeWidth="1.6" strokeDasharray="5 4" />
      <text x={W / 2} y={38 + 26} textAnchor="middle" fill={ACCENT}
            fontSize="15" fontFamily={FONT} letterSpacing="0.08em">FORM</text>
      <text x={W / 2} y={38 + 46} textAnchor="middle" fill={dim(0.55)}
            fontSize="13" fontFamily={FONT}>
        seven sections, drawn with the same principles
      </text>
      <line x1={W / 2} y1={38 + h} x2={W / 2} y2={y} stroke={ACCENT}
            strokeWidth="1.4" strokeDasharray="4 4" />
      <polygon points={`${W / 2 - 5},${y - 9} ${W / 2 + 5},${y - 9} ${W / 2},${y}`}
               fill={ACCENT} />

      {steps.map((s, i) => {
        const x = x0 + i * (bw + gap);
        return (
          <g key={s.label}>
            <rect x={x} y={y} width={bw} height={h} fill={dim(0.06)}
                  stroke={dim(0.3)} />
            <text x={x + bw / 2} y={y + 25} textAnchor="middle" fill={INK}
                  fontSize="14" fontFamily={FONT} letterSpacing="0.06em">{s.label}</text>
            <text x={x + bw / 2} y={y + 44} textAnchor="middle" fill={dim(0.5)}
                  fontSize="12" fontFamily={FONT}>{s.note}</text>
            {i < steps.length - 1 && (
              <polygon
                points={`${x + bw + 4},${y + h / 2 - 5} ${x + bw + 4},${y + h / 2 + 5} ${x + bw + gap - 4},${y + h / 2}`}
                fill={dim(0.35)} />
            )}
          </g>
        );
      })}
      <text x={x0} y={y + h + 34} fill={dim(0.42)} fontSize="13" fontFamily={FONT}>
        SSP, 1979: four steps from a micro level of operation to a more macro one
      </text>
      <text x={x0} y={y + h + 56} fill={dim(0.42)} fontSize="13" fontFamily={FONT}>
        the same principles run once more, a scale above the sound
      </text>
    </svg>
  );
}
