import React, {Component} from 'react';
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';

class Collaborations extends Component {

constructor(props) {
  super(props);
  this.state = { bandcampStyle:{ border: '0', width: '100%', height: '120px' } };
}
  componentDidMount() { window.scrollTo(0, 0) }

  render() {
    return <div className="container">

      <div className="content">

        <div className="music-submenu">

        <ul className="nav nav-pills">
                <li>
                  <a href="music">pieces</a>
                </li>
                <li>
                  <a href="live">live</a>
                </li>
                <li className="active">
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
        <p>La philosophie du langage (with Marie Guilleray)</p>
        <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/569538492&amp;color=%234c4655&amp;auto_play=false&amp;show_artwork=true"></iframe>
        </div>

        <div className="media">
        <p>Vetrarvélin (with Steindór Kristinsson)</p>
        <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/27065952&amp;color=%234c4655&amp;auto_play=false&amp;show_artwork=true"></iframe>
        </div>

        <div className="media">
        <p>L'imaginaire du parleur (with Marie Guilleray)</p>
        <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/97481416&amp;color=%234c4655&amp;auto_play=false&amp;show_artwork=true"></iframe>
        </div>

        <div className="media">
        <p>Fallacies (with Miguel Negrão)</p>
        <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/76737385&amp;color=%234c4655&amp;auto_play=false&amp;show_artwork=true"></iframe>
        </div>

        <div className="media">
        <p>Goshawk (with Marie Guilleray)</p>
        <iframe title="Embedded content" width="100%" height="166" scrolling="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/26872506&amp;color=%234c4655&amp;auto_play=false&amp;show_artwork=true"></iframe>
        </div>

        <div className="media">
        <p>Wall (with Jaike Stambach)</p>
        <iframe title="Embedded content" style={this.state.bandcampStyle} src="https://bandcamp.com/EmbeddedPlayer/album=2710841064/size=medium/bgcol=ffffff/linkcol=1C6E8C/t=11/transparent=true/" seamless><a href="https://lamadameaveclechien.bandcamp.com/album/dog010-soundtrack-to-the-end-of-the-world">DOG010 / Soundtrack To The End Of The World by Bjarni Gunnarsson &amp; Jaike Stambach</a></iframe>
        </div>

        <div className="media">
        <p>Orgel (with Steindór Kristinsson)</p>
        <iframe title="Embedded content" style={this.state.bandcampStyle} src="https://bandcamp.com/EmbeddedPlayer/album=2710841064/size=medium/bgcol=ffffff/linkcol=1C6E8C/t=10/transparent=true/" seamless><a href="https://lamadameaveclechien.bandcamp.com/album/dog010-soundtrack-to-the-end-of-the-world">DOG010 / Soundtrack To The End Of The World by Einóma</a></iframe>
        </div>

      </div>
    </div>
  }
}

export default Collaborations;
