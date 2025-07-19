import React, {Component} from 'react';
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';

class Live extends Component {

  componentDidMount() { window.scrollTo(0, 0) }

  render() {
    return <div className="container">

      <div className="content">
        <div className="music-submenu">

        <ul className="nav nav-pills">
                <li>
                  <a href="music">pieces</a>
                </li>
                <li className="active">
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
}

export default Live;
