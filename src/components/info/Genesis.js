import React from 'react';

// Components
import SEO from './../common/SEO';

// Styles
import './../../assets/css/docpage.css';

// The form: seven sections, each a multiple of a single unit, in the ratios
// 4:5:6:7:9:11:13 taken in this order. 55 units of 13 s is 11:55, the twelve
// minutes of the programme; a 12 s unit gives 11:00.
const UNIT = 13;
const SECTIONS = [
  { n: 5, process: 'clover' },
  { n: 9, process: 'fern' },
  { n: 4, process: 'nettle' },
  { n: 13, process: 'yarrow' },
  { n: 6, process: 'moss' },
  { n: 11, process: 'teasel' },
  { n: 7, process: 'bramble' }
];

const clock = s => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;

function FormDiagram() {
  const total = SECTIONS.reduce((a, s) => a + s.n, 0);
  const W = 1000, H = 132, PAD = 8, BAR_Y = 46, BAR_H = 44;
  const FONT = "'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif";
  let acc = 0;
  const blocks = SECTIONS.map((s, i) => {
    const x = (acc / total) * W;
    const w = (s.n / total) * W;
    acc += s.n;
    return { ...s, i, x, w, seconds: s.n * UNIT };
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img"
         aria-label="Seven sections across twelve minutes, drawn to scale"
         style={{ display: 'block', margin: '1.5rem 0', overflow: 'visible' }}>
      {blocks.map(b => (
        <g key={b.i}>
          <rect x={b.x + PAD / 2} y={BAR_Y} width={Math.max(b.w - PAD, 2)} height={BAR_H}
                fill={b.i === 3 ? '#A3CEF1' : 'rgba(255,255,255,0.13)'}
                stroke={b.i === 3 ? '#A3CEF1' : 'rgba(255,255,255,0.35)'} strokeWidth="1" />
          <text x={b.x + b.w / 2} y={BAR_Y + 28} textAnchor="middle"
                fill={b.i === 3 ? '#171b21' : '#ffffff'}
                fontSize="19" fontFamily={FONT}>{b.n}</text>
          <text x={b.x + b.w / 2} y={BAR_Y - 12} textAnchor="middle"
                fill="rgba(255,255,255,0.75)" fontSize="15"
                fontFamily={FONT}>{clock(b.seconds)}</text>
          <text x={b.x + b.w / 2} y={BAR_Y + BAR_H + 22} textAnchor="middle"
                fill="rgba(255,255,255,0.55)" fontSize="13"
                fontFamily={FONT}>{b.process}</text>
        </g>
      ))}
      <line x1="0" y1={BAR_Y + BAR_H + 34} x2={W} y2={BAR_Y + BAR_H + 34}
            stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
      <text x="0" y={BAR_Y + BAR_H + 52} fill="rgba(255,255,255,0.45)" fontSize="13"
            fontFamily={FONT}>0:00</text>
      <text x={W} y={BAR_Y + BAR_H + 52} textAnchor="end" fill="rgba(255,255,255,0.45)"
            fontSize="13" fontFamily={FONT}>{clock(total * UNIT)}</text>
    </svg>
  );
}

// One playable generator. Served from /demos/genesis/<name>/ with the explicit
// index.html: a trailing slash falls through to the SPA and returns the shell.
function Demo({ name, num, title, children }) {
  return (
    <figure>
      <iframe src={`/demos/genesis/${name}/index.html?compact=1`} loading="lazy"
              title={`${title}, interactive`} />
      <figcaption>
        <span className="doc-fignum">Fig. {num}</span>
        <b>{title}.</b> {children}{' '}
        <a href={`/demos/genesis/${name}/index.html`}>Open full size</a>
      </figcaption>
    </figure>
  );
}

function Genesis() {
  return <div className="docpage">
      <SEO
        title="Genesis (2026) - Bjarni Gunnarsson"
        description="Genesis: twelve minutes in seven sections, with seven of the waveform generators it is built from, playable."
        path="/works/docs/genesis"
      />
      <h1 className="doc-title">Genesis</h1>
      <p className="doc-standfirst">
        
Genesis explores a set of sound synthesis procedures built from stochastic, chaotic and network-based functions. Each generator is a short program that produces continuously varying waveforms and places them within a predefined proportional structure. Koenig described electronically produced sound as "both a form-section and an acoustico-musical unit, a quantum", highlighting its role as both the part and the whole. The piece considers the continuity this idea implies and the tensions it introduces. It reflects on the scope of decisions, selections, and rules, and how these interact through the processes that make up the piece.

      </p>

      <h2 id="form"><span className="doc-num">1</span>Structure</h2>

      <p>
        The strutural sections are constructed from a single unit through the ratios
        4:5:6:7:9:11:13 taken in the order below. 
      </p>

      <figure>
        <FormDiagram />
        <figcaption>
          <span className="doc-fignum">Fig. 1</span>
        </figcaption>
      </figure>

      {/* <p>
        The direction reverses at every one of the six boundaries. The longest section falls fourth of
        seven and holds the one material that moves on its own. Building on a common unit means the smallest possible
        difference between two sections is one whole unit, so no section is within
        fifty seconds of its neighbour.
      </p> */}

      <h2 id="engine"><span className="doc-num">2</span>Material</h2>

      <p>
        Each section presents one generator as a constant stream. The generators write the waveform itself, point by point, from a list of
        amplitudes against a list of durations counted in samples. 
      </p>

      <Demo name="demand" num="2" title="Basic principle">
        A waveform written from two lists. The amplitude list are unrelated to the 
        nothing about pitch that is created from a duration list.
      </Demo>

      <Demo name="fold" num="3" title="Folding the stream">
        Three amplitudes taken round and round, which are close to a square wave. Everything else happens at the fold, where the stream is reflected back
        every time it crosses a threshold that is itself moving. 
      </Demo>

      <Demo name="edge" num="4" title="One sample a segment">
        The same engine with the durations taken to the limit. One control multiplies
        every duration at once and sweeps the material from a tone to broadband noise
        without altering the amplitude. 
      </Demo>

      <h2 id="generators"><span className="doc-num">3</span>Walks</h2>

      <p>
        The same principle with the next point chosen by a walk rather than read from a
        list, so the waveform has a memory of where it has been.
      </p>

      <Demo name="cyclegen" num="5" title="Drifting waveform">
        Every breakpoint of the cycle remembers where it was and steps from there, so
        the shape never repeats exactly. <i>stiffness</i> decides how far it may leave
        the fixed shape it is pulled toward: at 1 the waveform is chosen, at 0 it is
        found.
      </Demo>

      <Demo name="gendreve" num="6" title="Chaotic scale">
        Each breakpoint carries its own chaotic oscillator. The tether scales how far
        the chaos may take it, and a second tether does the same for the segment
        durations, so the period can be locked or left to breathe.
      </Demo>

      <Demo name="diststoch" num="7" title="Bounded waveform">
        The tether removed. What keeps the waveform in range is what happens when it
        reaches a bound, and the two bounds can behave differently: reflect, wrap, hold,
        or throw the walk somewhere random. 
      </Demo>

      <Demo name="grainstoch" num="8" title="Written waveform">
        The grain is itself a written waveform, redrawn between emissions rather than
        inside them. 
      </Demo>

      <h2 id="references"><span className="doc-num">4</span>References</h2>

      <ul className="doc-refs">
        <li>
          <a href="https://github.com/bjarnig/Genesis" target="_blank" rel="noopener noreferrer">Genesis</a>
          <span>The SuperCollider code for the piece: the generators, their presets and the tools for playing them.</span>
          <a className="doc-ref-url" href="https://github.com/bjarnig/Genesis" target="_blank" rel="noopener noreferrer">github.com/bjarnig/Genesis</a>
        </li>
        <li>
          <a href="https://github.com/bjarnig/Tether" target="_blank" rel="noopener noreferrer">Tether</a>
          <span>Experimental SuperCollider UGens for digital synthesis, the generators used in the walks.</span>
          <a className="doc-ref-url" href="https://github.com/bjarnig/Tether" target="_blank" rel="noopener noreferrer">github.com/bjarnig/Tether</a>
        </li>
      </ul>

    </div>;
}

export default Genesis;
