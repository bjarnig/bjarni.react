import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import StructuredData from '../StructuredData';
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';

class Music extends Component {

  componentDidMount() { window.scrollTo(0, 0) }

  render() {
    return (
      <>
        <StructuredData type="music" />
        <Helmet>
          <title>Music - Bjarni Gunnarsson | Electronic Music Compositions</title>
          <meta name="description" content="Listen to electronic music compositions by Bjarni Gunnarsson. Featuring works like Vacuum (UPICS), Anticlines, Polytree, Volume and Void, and more process-based electronic music." />
          <meta name="keywords" content="Bjarni Gunnarsson music, electronic music, process-based music, algorithmic composition, Vacuum UPICS, Anticlines, Polytree, Volume and Void, Prisme, Ubieties, Aukera, Grey Seeds, Angst, Fingrafjall, Aftur, Samtimis" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Music - Bjarni Gunnarsson | Electronic Music Compositions" />
          <meta property="og:description" content="Listen to electronic music compositions by Bjarni Gunnarsson. Featuring works like Vacuum (UPICS), Anticlines, Polytree, Volume and Void, and more." />
          <meta property="og:type" content="music.album" />
          <meta property="og:url" content="https://bjarni-gunnarsson.net/music" />
          <meta property="og:image" content="https://bjarni-gunnarsson.net/bg.jpg" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Music - Bjarni Gunnarsson | Electronic Music Compositions" />
          <meta name="twitter:description" content="Listen to electronic music compositions by Bjarni Gunnarsson. Featuring works like Vacuum (UPICS), Anticlines, Polytree, Volume and Void." />
          <meta name="twitter:image" content="https://bjarni-gunnarsson.net/bg.jpg" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://bjarni-gunnarsson.net/music" />
        </Helmet>
        <div className="container">

          <div className="content">

            <div className="music-submenu">

              <ul className="nav nav-pills">
                <li className="active">
                  <a href="music">pieces</a>
                </li>
                <li>
                  <a href="live">live</a>
                </li>
                <li>
                  <a href="collaborations">collaborations</a>
                </li>
                 <li>
                  <a href="writings">writings</a>
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
            <p>Vacuum (UPICS)</p>
            <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1376658418&color=%234c4655&auto_play=false&;show_artwork=true"></iframe>
            
            </div>


            <div className="media">
            <p>Anticlines</p>
            <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1168878487&color=%234c4655&auto_play=false&;show_artwork=true"></iframe>
            </div>


            <div className="media">
            <p>Polytree</p>
            <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/937805527&color=%234c4655&auto_play=false&;show_artwork=true"></iframe>
            </div>

            <div className="media">
              <p>Volume and Void</p>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/899657986&color=%234c4655&auto_play=false&;show_artwork=true"></iframe>
            </div>

            <div className="media">
              <p>Prisme</p>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/535356630&color=%234c4655&auto_play=false&;show_artwork=true"></iframe>
            </div>

            <div className="media">
              <p>Ubieties</p>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259066161&amp;color=1C6E8C&amp;auto_play=false&amp;show_artwork=true"></iframe>
            </div>

            <div className="media">
              <p>Aukera</p>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F108329364&amp;color=1C6E8C&amp;auto_play=false&amp;show_artwork=true"></iframe>
            </div>

            <div className="media">
              <p>Grey Seeds</p>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91176605&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
            </div>

            <div className="media">
              <p>Angst</p>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F27070454&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
            </div>

            <div className="media">
              <p>Fingrafjall</p>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F8429288&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
            </div>

            <div className="media">
              <p>Aftur</p>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F8228363&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
            </div>

            <div className="media">
              <p>Samtimis</p>
              <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F8428732&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default Music;
