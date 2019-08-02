import React, {Component} from 'react';
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';

import Collaborations from './Collaborations';
import Live from './Live';
import Mixes from './Mixes';
import Visual from './Visual';
import Excerpts from './Excerpts';

class Music extends Component {
  render() {
    return <div className="container">

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
              <a href="visual">visual</a>
            </li>
            <li>
              <a href="mixes">mixes</a>
            </li>
            <li>
              <a href="excerpts">excerpts</a>
            </li>
          </ul>

          <div className="hr"><hr/></div>

        </div>

        <div className="media">
          <p>Prisme</p>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/535356630&color=%234c4655&auto_play=false&;show_artwork=true"></iframe>
        </div>

        <div className="media">
          <p>Ubieties</p>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259066161&amp;color=1C6E8C&amp;auto_play=false&amp;show_artwork=true"></iframe>
        </div>

        <div className="media">
          <p>Aukera</p>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F108329364&amp;color=1C6E8C&amp;auto_play=false&amp;show_artwork=true"></iframe>
        </div>

        <div className="media">
          <p>Grey Seeds</p>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F91176605&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
        </div>

        <div className="media">
          <p>Angst</p>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F27070454&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
        </div>

        <div className="media">
          <p>Fingrafjall</p>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F8429288&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
        </div>

        <div className="media">
          <p>Aftur</p>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F8228363&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
        </div>

        <div className="media">
          <p>Samtimis</p>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F8428732&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
        </div>

      </div>
    </div>
  }
}

export default Music;
