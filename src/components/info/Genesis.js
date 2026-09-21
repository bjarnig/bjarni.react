import React from 'react';

// Components
import SEO from './../common/SEO';

// Styles
import './../../assets/css/docpage.css';
import { ThirdsFigure, FieldFigure, LadderFigure } from './GenesisFigures';

// The form: seven sections, each a multiple of one twelve-second unit,
// in the ratios 4:5:6:7:9:11:13 taken in this order.
const UNIT = 12;
const SECTIONS = [
  { n: 5, process: 'clover', note: 'low, narrow' },
  { n: 9, process: 'fern', note: 'wide, wandering' },
  { n: 4, process: 'nettle', note: 'densest, 79 events a second' },
  { n: 13, process: 'yarrow', note: 'the descent' },
  { n: 6, process: 'moss', note: 'grains' },
  { n: 11, process: 'teasel', note: 'sparse, 7 events a second' },
  { n: 7, process: 'bramble', note: 'bright, dense' }
];

const clock = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

function FormDiagram() {
  const total = SECTIONS.reduce((a, s) => a + s.n, 0);
  const W = 1000, H = 132, PAD = 8, BAR_Y = 46, BAR_H = 44;
  let acc = 0;
  const blocks = SECTIONS.map((s, i) => {
    const x = (acc / total) * W;
    const w = (s.n / total) * W;
    const entry = acc * UNIT;
    acc += s.n;
    return { ...s, i, x, w, entry, seconds: s.n * UNIT };
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img"
         aria-label="Seven sections across eleven minutes, drawn to scale"
         style={{ display: 'block', margin: '1.5rem 0', overflow: 'visible' }}>
      {blocks.map(b => (
        <g key={b.i}>
          <rect x={b.x + PAD / 2} y={BAR_Y} width={Math.max(b.w - PAD, 2)} height={BAR_H}
                fill={b.i === 3 ? '#A3CEF1' : 'rgba(255,255,255,0.13)'}
                stroke={b.i === 3 ? '#A3CEF1' : 'rgba(255,255,255,0.35)'} strokeWidth="1" />
          <text x={b.x + b.w / 2} y={BAR_Y + 28} textAnchor="middle"
                fill={b.i === 3 ? '#171b21' : '#ffffff'}
                fontSize="19" fontFamily="'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif">{b.n}</text>
          <text x={b.x + b.w / 2} y={BAR_Y - 12} textAnchor="middle"
                fill="rgba(255,255,255,0.75)" fontSize="15"
                fontFamily="'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif">{clock(b.seconds)}</text>
          <text x={b.x + b.w / 2} y={BAR_Y + BAR_H + 22} textAnchor="middle"
                fill="rgba(255,255,255,0.55)" fontSize="13"
                fontFamily="'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif">{b.process}</text>
        </g>
      ))}
      <line x1="0" y1={BAR_Y + BAR_H + 34} x2={W} y2={BAR_Y + BAR_H + 34}
            stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
      <text x="0" y={BAR_Y + BAR_H + 52} fill="rgba(255,255,255,0.45)" fontSize="13"
            fontFamily="'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif">0:00</text>
      <text x={W} y={BAR_Y + BAR_H + 52} textAnchor="end" fill="rgba(255,255,255,0.45)"
            fontSize="13" fontFamily="'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif">11:00</text>
    </svg>
  );
}

function Genesis() {
  return <div className="docpage">
      <SEO
        title="Genesis (2026) - Bjarni Gunnarsson"
        description="Genesis: an eleven-minute piece in seven sections, built from ten demand-rate synthesis processes in SuperCollider."
        path="/works/docs/genesis"
        noindex={true}
      />
      <h1 className="doc-title">Genesis</h1>
      <p className="doc-standfirst">
        Eleven minutes in seven sections, for four channels. An instrument of ten
        demand-rate processes, and one traversal of it. 2026.
      </p>

      <nav className="doc-toc">
        <div className="doc-toc-label">Contents</div>
        <ol>
          <li><a href="#instrument">The instrument</a></li>
          <li><a href="#form">The form</a></li>
          <li><a href="#material">Telling the sections apart</a></li>
          <li><a href="#generators">The generators, playable</a></li>
          <li><a href="#koenig">After Koenig</a></li>
        </ol>
      </nav>

          <h2 id="instrument"><span className="doc-num">1</span>The instrument</h2>

      <p>
            Genesis is both an instrument and a piece. The instrument is a set of ten
            synthesis processes written in SuperCollider, each one built on demand-rate
            generators: streams of values that are selected rather than computed, and
            that drive amplitude and time directly at the level of the waveform. The
            piece is one traversal of that set.
          </p>

          <p>
            Each of the ten was rendered for sixty seconds and measured before any of it
            was composed with. The results decided most of what followed. Six of the ten
            turned out to be stationary, holding within 0.3 dB over a minute, and only
            four move at all. One of them, and only one, genuinely travels: its spectral
            centroid falls by a third over the course of a minute. Knowing which material
            holds and which material goes somewhere is what the form is built on.
          </p>

          <figure className="wide">
            <ThirdsFigure />
            <figcaption>
              <span className="doc-fignum">Fig. 1</span>
              Spectral centroid measured over the first, second and third twenty seconds
              of each sixty-second render. Nine of the ten hold within seven percent of
              where they began. Yarrow falls by a third, and is the only material in the
              set that goes anywhere on its own.
            </figcaption>
          </figure>

          <h2 id="form"><span className="doc-num">2</span>The form</h2>

          <p>
            Seven sections across eleven minutes, each a multiple of a single
            twelve-second unit, in the ratios 4:5:6:7:9:11:13. Drawn to scale:
          </p>

          <figure className="wide">
            <FormDiagram />
            <figcaption>
              <span className="doc-fignum">Fig. 2</span>
              The seven sections drawn to scale, with each section's multiple of the
              twelve-second unit inside it and its material below. The fourth section,
              marked, is the only one whose spectrum travels.
            </figcaption>
          </figure>

          <p>
            The order is not a shape. The direction reverses at every one of the six
            boundaries, so no section is longer or shorter than the last for more than a
            step at a time, and nothing accumulates into a gradient or an arrival. The
            shortest section sits away from both ends. The longest falls fourth of seven,
            and holds the one material that travels, so the centre of the piece is a slow
            descent rather than a climax.
          </p>

          <p>
            A common unit was chosen over unrelated durations for a reason that took some
            measuring to see. An earlier version drew its seven lengths at random within a
            range and rejected any set where one section was a simple multiple of another.
            It read as seven durations on paper and about four in the ear: its four
            shortest sat within sixteen percent of each other, and a five percent
            difference in the length of a section is not a difference anyone hears. Built
            on a unit, the smallest possible difference between two sections is one whole
            unit. Here no section is within forty-eight seconds of its neighbour.
          </p>

          <h2 id="material"><span className="doc-num">3</span>Telling the sections apart</h2>

          <p>
            Each of the seven sections uses one of the ten processes and none returns.
            There is no recapitulation and no development. The sections are told apart on
            four measured axes:
          </p>

          <table className="table">
            <thead>
              <tr>
                <th>Axis</th>
                <th>Measured as</th>
                <th>Range across the ten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Register</td>
                <td>spectral centroid</td>
                <td>1,750 Hz to 15,113 Hz, about 3.1 octaves</td>
              </tr>
              <tr>
                <td>Wobble</td>
                <td>centroid standard deviation</td>
                <td>139 Hz to 3,298 Hz, 24 to 1</td>
              </tr>
              <tr>
                <td>Density</td>
                <td>events per second</td>
                <td>7.1 to 78.7, 11 to 1</td>
              </tr>
              <tr>
                <td>Journey</td>
                <td>centroid drift over a minute</td>
                <td>one process falls 31.5%, no other moves more than 7%</td>
              </tr>
            </tbody>
          </table>

          <figure className="wide">
            <FieldFigure />
            <figcaption>
              <span className="doc-fignum">Fig. 3</span>
              The ten placed by how far apart they measured, in a projection holding
              72% of the variance. Only relative distance means anything here; the
              directions do not. Filled markers are the seven the piece uses. Each of
              the three left out sits nearer to one that was kept than any two of the
              kept ones are to each other: sedge to moss at 0.27, thistle to fern at
              0.32, gorse to clover at 0.43, against 0.40 for the closest chosen pair
              and 0.60 on average.
            </figcaption>
          </figure>

          <p>
            Wobble and journey are not the same thing and they want different sections.
            The most restless of the ten wanders across three thousand hertz and ends
            where it started. Another wanders less and is the only one that actually
            travels. For a section that has to develop rather than shimmer, only one
            material qualifies, and it holds the long fourth section.
          </p>

          <h2 id="generators"><span className="doc-num">4</span>The generators, playable</h2>

          <p>
            Two of the generators are given below as playable versions, ported from their
            C++ sources to run in the browser. The parameter names are the ones the
            instrument uses. Press play in each; the drawing and the sound are the same
            numbers.
          </p>

          <p>
            <strong>Cyclegen</strong> puts a fixed number of breakpoints in every cycle and
            lets each one walk from wherever it was last time, while a frequency sequence
            steps the pitch once per cycle. The control worth moving first is{' '}
            <code>stiffness</code>: at zero the breakpoints walk freely, and at one they
            are pulled onto a fixed template, so the same generator covers a waveform that
            is drifting and a waveform that is chosen. The upper panel draws the walk
            against the template it is being pulled toward.
          </p>

          <figure className="wide">
            <iframe src="/demos/genesis/cyclegen/index.html?compact=1" loading="lazy"
                    title="Cyclegen, interactive" />
            <figcaption>
              <span className="doc-fignum">Fig. 4</span>
              Cyclegen, ported from its C++ source to run in the browser. The drawing and
              the sound are the same numbers. <a href="/demos/genesis/cyclegen/index.html">Open full size</a>
            </figcaption>
          </figure>

          <p>
            <strong>Grainstoch</strong> emits a small waveform as a grain, and redraws that
            waveform between one grain and the next. The walk therefore happens across
            grains rather than inside them, which makes <code>ampStep</code> a control over
            how far each grain departs from the one before: at zero the same grain repeats
            and the train fuses into a pitch, and as it rises the train stops fusing at all.
          </p>

          <figure className="wide">
            <iframe src="/demos/genesis/grainstoch/index.html?compact=1" loading="lazy"
                    title="Grainstoch, interactive" />
            <figcaption>
              <span className="doc-fignum">Fig. 5</span>
              Grainstoch, ported from its C++ source to run in the browser. The drawing and
              the sound are the same numbers. <a href="/demos/genesis/grainstoch/index.html">Open full size</a>
            </figcaption>
          </figure>

          <h2 id="koenig"><span className="doc-num">5</span>After Koenig</h2>

          <p>
            The synthesis follows Gottfried Michael Koenig's SSP, the sound synthesis
            program he worked on at the Institute of Sonology through the 1970s. SSP
            applied selection principles to amplitude and time values directly, building a
            waveform the way a score is built. Koenig had asked in 1963 how instrumental
            experience in macro-time might be transferred to micro-time, and SSP is the
            answer he gave: the same principles that had ordered the macrostructure of a
            composition, turned on the microstructure of a sound.
          </p>

          <figure className="wide">
            <LadderFigure />
            <figcaption>
              <span className="doc-fignum">Fig. 6</span>
              SSP's own four steps run from a micro level of operation to a more macro
              one, and stop at a single sound. The piece runs the same selection
              principles once more, a scale above that, to place the seven sections.
            </figcaption>
          </figure>

          <p>
            The transfer runs downwards, and it is worth being clear that this is not a
            music that emerges from its material. The rules arrive from above. Genesis
            takes the same six selection principles and runs them at a third scale, the
            form itself, which is a further step in Koenig's own direction rather than a
            departure from it.
          </p>

          <p>
            It does not resolve the tension, and the piece is not an argument that it
            should be resolved. One selection principle can govern a waveform and a form
            and still not mean the same thing in both places: at the scale of the sample no
            individual choice is audible as a choice, and the draws fuse into a material,
            while at the scale of a section every choice is the object of attention and can
            be counted. The unity is exact in the description and absent in the ear. That
            gap is where the piece sits.
          </p>

          <div className="doc-notes">
            <div className="doc-toc-label">Notes</div>
            <ol>
              <li>
                Written in SuperCollider. Several of the generators come from{' '}
                <a href="https://github.com/bjarnig/Tether">Tether</a>, a set of
                experimental UGens for breakpoint synthesis, where the points of a
                waveform are driven by walks, chaotic maps, coupled oscillators and
                population models rather than selected from a table.
              </li>
              <li>
                The measurements come from rendering each of the ten processes for sixty
                seconds at its own defaults and analysing the result, rather than from
                reading the code. Figures quoted here are from that pass.
              </li>
              <li>
                Koenig's 1963 formulation is quoted in the SSP documentation, Institute of
                Sonology. SSP is described there as an hypothesis, and intended to be
                experimental.
              </li>
            </ol>
          </div>

    </div>;
}

export default Genesis;
