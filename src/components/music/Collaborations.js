import React, {Component} from 'react';
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';

import Music from './Live';
import Live from './Live';
import Mixes from './Mixes';
import Visual from './Visual';
import Excerpts from './Excerpts';

class Collaborations extends Component {

constructor(props) {
  super(props);
  this.state = { bandcampStyle:{ border: '0', width: '100%', height: '120px' } };
}

  render() {
    return <div className="container">

      <div className="content">

        <div className="music-submenu">

          <ul className="nav nav-pills">
            <li>
              <a href="music">pieces</a>
            </li>
            <li>
              <a href="code">software</a>
            </li>
            <li>
              <a href="writings">writings</a>
            </li>
            <li>
              <a href="live">live</a>
            </li>
            <li className="active">
              <a href="collaborations">co</a>
            </li>
           
            <li>
              <a href="visual">visual</a>
            </li>
            <li>
              <a href="mixes">mixes</a>
            </li>
           
          </ul>

          <div className="hr"><hr/></div>

        </div>

        <div className="media">
        <p>La philosophie du langage (with Marie Guilleray)</p>
        <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/569538492&amp;auto_play=false&amp;show_user=true&amp;show_reposts=true&amp;color=1C6E8C"></iframe>
        </div>

        <div className="media">
        <p>Vetrarvélin (with Steindór Kristinsson)</p>
        <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F27065952&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
        </div>

        <div className="media">
        <p>L'imaginaire du parleur (with Marie Guilleray)</p>
        <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/97481416&amp;auto_play=false&amp;show_user=true&amp;show_reposts=true&amp;color=1C6E8C"></iframe>
        </div>

        <div className="media">
        <p>Fallacies (with Miguel Negrão)</p>
        <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F76737385&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
        </div>

        <div className="media">
        <p>Goshawk (with Marie Guilleray)</p>
        <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F26872506&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
        </div>

        <div className="media">
        <p>Wall (with Jaike Stambach)</p>
        <iframe style={this.state.bandcampStyle} src="http://bandcamp.com/EmbeddedPlayer/album=2710841064/size=medium/bgcol=ffffff/linkcol=1C6E8C/t=11/transparent=true/" seamless><a href="http://lamadameaveclechien.bandcamp.com/album/dog010-soundtrack-to-the-end-of-the-world">DOG010 / Soundtrack To The End Of The World by Bjarni Gunnarsson &amp; Jaike Stambach</a></iframe>
        </div>

        <div className="media">
        <p>Orgel (with Steindór Kristinsson)</p>
        <iframe style={this.state.bandcampStyle} src="http://bandcamp.com/EmbeddedPlayer/album=2710841064/size=medium/bgcol=ffffff/linkcol=1C6E8C/t=10/transparent=true/" seamless><a href="http://lamadameaveclechien.bandcamp.com/album/dog010-soundtrack-to-the-end-of-the-world">DOG010 / Soundtrack To The End Of The World by Einóma</a></iframe>
        </div>

      </div>
    </div>
  }
}

export default Collaborations;
