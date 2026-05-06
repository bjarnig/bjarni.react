import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';

function Live() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return <div className="container">
      <SEO
        title="Live - Bjarni Gunnarsson"
        description="Live performances and live-coding work by Bjarni Gunnarsson, including multichannel and WFS-based concerts."
        path="/live"
      />
      <div className="content">
        <div className="music-submenu">

        <ul className="nav nav-pills">
                <li>
                  <Link to="/music">pieces</Link>
                </li>
                <li className="active">
                  <Link to="/live">live</Link>
                </li>
                <li>
                  <Link to="/collaborations">collaborations</Link>
                </li>
                 <li>
                  <Link to="/writings">writings</Link>
                </li>
                <li>
                <a href="https://github.com/bjarnig" target="_blank" rel="noopener noreferrer">software</a>
                </li>
                 <li>
                <a href="https://www.youtube.com/@bjarni-gunnarsson" target="_blank" rel="noopener noreferrer">
                visual</a>
                </li>
              </ul>

          <div className="hr"><hr/></div>

        </div>

    <div className="media">
    <h4>ICLC</h4>
    <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403082631&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>

    <div className="media">
    <h4>Ghent</h4>
    <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/640450551&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>

    <div className="media">
    <h4>Utrecht</h4>
    <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/248736798&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>

    <div className="media">
    <h4>Brussels</h4>
    <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F27069515&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>

    <div className="media">
    <h4>Den Haag</h4>
    <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F10416675&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>

    <div className="media">
    <h4>MGBG, live set, Brussels</h4>
    <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F26870332&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>

    <div className="media">
    <h4>Einóma, live set, Netherlands</h4>
    <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F27067420&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>


      </div>
    </div>
}

export default Live;
