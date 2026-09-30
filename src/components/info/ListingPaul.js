import React, { useMemo, useState } from 'react';

import SEO from './../common/SEO';
import CDS from './../../data/paulCds.json';

import './../../assets/css/listing.css';

const SHOW = 8;
const named = s => (s && s !== '-' ? s : '');

const prepared = CDS.map(c => {
  const title = c.t && c.t !== 'NIL' ? c.t : '';
  const comps = [...new Set(c.tr.map(t => named(t[0])).filter(Boolean))];
  return {
    ...c,
    title,
    comps,
    label: title || (comps.length === 1 ? comps[0] : 'Untitled disc'),
    hay: (c.t + ' ' + c.tr.flat().join(' ')).toLowerCase()
  };
});

function Disc({ c }) {
  const [open, setOpen] = useState(false);
  const rows = open ? c.tr : c.tr.slice(0, SHOW);
  return (
    <article className="cd">
      <div className="cd-cover">
        {c.img
          ? <img src={`/listing/paul/covers/${c.img}`} alt={`Cover of ${c.label}`} loading="lazy" />
          : <div className="cd-blank"><span>{c.label}</span></div>}
        <span className="cd-num">CD {c.n.padStart(3, '0')}</span>
      </div>
      <div className="cd-body">
        <h2 className={c.title ? '' : 'untitled'}>{c.title || '(no title)'}</h2>
        {c.comps.length > 1 && (
          <div className="cd-comps">
            {c.comps.slice(0, 6).join(', ')}{c.comps.length > 6 ? ` +${c.comps.length - 6} more` : ''}
          </div>
        )}
        <ol>
          {rows.map((t, i) => (
            <li key={i}>
              <span className="who">{named(t[0])}</span>{named(t[0]) && ', '}{t[1]}
              {t[2] && <span className="perf"> ({t[2]})</span>}
            </li>
          ))}
        </ol>
        {c.tr.length > SHOW && (
          <button type="button" className="cd-more" onClick={() => setOpen(!open)}>
            {open ? 'show fewer' : `show all ${c.tr.length} tracks`}
          </button>
        )}
        {c.img && c.src && (
          <div className="cd-src">cover: <a href={c.src[0]} target="_blank" rel="noopener noreferrer">{c.src[1]}</a></div>
        )}
      </div>
    </article>
  );
}

function ListingPaul() {
  const [q, setQ] = useState('');
  const [onlyCovers, setOnlyCovers] = useState(false);

  const list = useMemo(() => {
    const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return prepared.filter(c => (!onlyCovers || c.img) && words.every(w => c.hay.includes(w)));
  }, [q, onlyCovers]);

  const tracks = prepared.reduce((a, c) => a + c.tr.length, 0);

  return (
    <div className="cdshelf">
      <SEO
        title="CD listing"
        description="A private listing."
        path="/listing/paul"
        noindex
      />
      <h1 className="doc-title">The CD collection</h1>
      <p className="doc-standfirst">
        {prepared.length} discs, {tracks} tracks, offered by Paul Berg. Covers are matched
        automatically from MusicBrainz and Apple Music and link to their source; a disc
        without a match shows a blank sleeve.
      </p>

      <div className="cd-bar">
        <input
          type="search"
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="search title, composer, work or performer"
          aria-label="Search"
        />
        <label>
          <input type="checkbox" checked={onlyCovers} onChange={e => setOnlyCovers(e.target.checked)} />
          covers only
        </label>
        <span className="cd-count">{list.length} shown</span>
      </div>

      {list.length
        ? <div className="cd-grid">{list.map(c => <Disc key={c.n} c={c} />)}</div>
        : <p className="cd-empty">No discs match that search.</p>}
    </div>
  );
}

export default ListingPaul;
