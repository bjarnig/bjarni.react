import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';

function Excerpts() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return <div className="container">
      <SEO
        title="Excerpts - Bjarni Gunnarsson"
        description="Audio excerpts and sound examples from Bjarni Gunnarsson's compositions and research projects."
        path="/excerpts"
      />
      <div className="content">
        <div className="music-submenu">

          <ul className="nav nav-pills">
            <li>
              <Link to="/music">pieces</Link>
            </li>
            <li>
              <Link to="/live">live</Link>
            </li>
            <li>
              <Link to="/collaborations">collaborations</Link>
            </li>
            <li>
              <Link to="/visual">visual</Link>
            </li>
            <li>
              <Link to="/mixes">mixes</Link>
            </li>
            <li className="active">
              <Link to="/excerpts">excerpts</Link>
            </li>
          </ul>

          <div className="hr"><hr/></div>

        </div>

        <h1>excerpts from other pieces</h1>

<div className="contentleft">
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Undrun(excerpt).mp3" target="_blank" rel="noopener noreferrer">Undrun</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Migrateur(excerpt).mp3" target="_blank" rel="noopener noreferrer">Migrateur</a>
</div>
<br /><br />
<div className="contentleft">
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Timeout(excerpt).mp3" target="_blank" rel="noopener noreferrer">Timeout</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Omniscient(excerpt).mp3" target="_blank" rel="noopener noreferrer">Omniscient</a>
</div>
<br /><br />
<div className="contentleft">
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/DettaSaman(excerpt).mp3" target="_blank" rel="noopener noreferrer">Detta saman</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Pice(excerpt).mp3" target="_blank" rel="noopener noreferrer">Pice</a>
</div>
<br /><br /><br/><br/>

      </div>
    </div>
}

export default Excerpts;
