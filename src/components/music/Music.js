import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import StructuredData from '../StructuredData';

function Music() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
      <>
        <StructuredData type="music" />
        <SEO
          title="Music - Bjarni Gunnarsson | Electronic Music Compositions"
          description="Listen to electronic music compositions by Bjarni Gunnarsson. Featuring works like Vacuum (UPICS), Anticlines, Polytree, Volume and Void, and more process-based electronic music."
          path="/music"
          type="music.album"
        />
        <div className="container">

          <div className="content">

            <div className="music-submenu">

              <ul className="nav nav-pills">
                <li className="active">
                  <Link to="/music">pieces</Link>
                </li>
                <li>
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
            <h4>Ever-present Change</h4>
            <iframe title="Embedded content" width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2132545137&color=%23242a31&auto_play=false&;show_artwork=true"></iframe>
            </div>

            <div className="media">
            <h4>Vacuum (UPICS)</h4>
            <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1376658418&color=%234c4655&auto_play=false&;show_artwork=true"></iframe>
            
            </div>


            <div className="media">
            <h4>Anticlines</h4>
            <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1168878487&color=%234c4655&auto_play=false&;show_artwork=true"></iframe>
            </div>


            <div className="media">
            <h4>Polytree</h4>
            <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/937805527&color=%234c4655&auto_play=false&;show_artwork=true"></iframe>
            </div>

            <div className="media">
              <h4>Volume and Void</h4>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/899657986&color=%234c4655&auto_play=false&;show_artwork=true"></iframe>
            </div>

            <div className="media">
              <h4>Prisme</h4>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/535356630&color=%234c4655&auto_play=false&;show_artwork=true"></iframe>
            </div>

            <div className="media">
              <h4>Ubieties</h4>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259066161&amp;color=1C6E8C&amp;auto_play=false&amp;show_artwork=true"></iframe>
            </div>

            <div className="media">
              <h4>Aukera</h4>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F108329364&amp;color=1C6E8C&amp;auto_play=false&amp;show_artwork=true"></iframe>
            </div>

            <div className="media">
              <h4>Grey Seeds</h4>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91176605&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
            </div>

            <div className="media">
              <h4>Angst</h4>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F27070454&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
            </div>

            <div className="media">
              <h4>Fingrafjall</h4>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F8429288&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
            </div>

            <div className="media">
              <h4>Aftur</h4>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F8228363&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
            </div>

            <div className="media">
              <h4>Samtimis</h4>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F8428732&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
            </div>

          </div>
        </div>
      </>
    )
}

export default Music;
