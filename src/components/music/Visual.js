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
import Collaborations from './Visual';
import Excerpts from './Excerpts';

class Visual extends Component {

  constructor(props) {
    super(props);
    this.state = { ustreamStyle1:{ border: '0px none transparent'}, ustreamStyle2:{ padding: '2px 0px 4px', width: '0px', background: '#ffffff', display: 'block', color: '#000000', 'font-weight': 'normal', 'font-size': '10px', 'text-decoration':'underline', 'text-align': 'center' } };
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
            <li>
              <a href="collaborations">collaborations</a>
            </li>
            <li className="active">
              <a href="visual">visual</a>
            </li>
            <li>
              <a href="mixes">mixes</a>
            </li>
          
          </ul>

          <div className="hr"><hr/></div>

        </div>

        <div className="media">
        <div className="date">Copaline</div>
        
        <br />
        <iframe src="https://player.vimeo.com/video/313406191" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div className="hr"><hr/></div>

        <div className="media">
        <div className="date">Synthetic Environment</div>
        <br />
        <iframe src="https://player.vimeo.com/video/325550871" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div className="hr"><hr/></div>

        <div className="media">
        <div className="date">GRM Présences électronique</div>
        <br />
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/XRnw5RrwtxQ" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className="hr"><hr/></div>

          <div className="media">
          <div className="date">Journal Afghan</div>
            <iframe src="https://player.vimeo.com/video/152695407" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <p><a href="https://vimeo.com/152695407">JOURNAL AFGHAN TRAILER</a> from <a href="https://vimeo.com/user2695439">Cedric Dupire</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
          </div>
          <br /><br /><div className="hr"><hr/></div>

        <div className="media">
        <div className="date">Grey Seeds</div>
        <iframe src="https://player.vimeo.com/video/62161204" width="100%" height="600" frameborder="0" allowfullscreen></iframe>
        </div>
        <br /><br /><div className="hr"><hr/></div>

        <div className="media">
        <div className="date">O Sal Da Lua, A outra experiência</div>
        <br />
        <iframe src="https://player.vimeo.com/video/76064055" width="100%" height="600" frameborder="0" allowfullscreen></iframe>
        {/* <iframe src="https://player.vimeo.com/video/76064055" width="100%" height="600" frameborder="0" mozallowfullscreen allowfullscreen></iframe> */}
        </div>
        <br /><br /><div className="hr"><hr/></div>

        <div className="media">
        <div className="date">Dried Up</div>
        <br />
          <iframe src="https://player.vimeo.com/video/8992814" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <p><a href="https://vimeo.com/8992814">DRIED UP - Bjarni Gunnarsson / Super 8 by Cedric Dupire</a> from <a href="https://vimeo.com/user2695439">Cedric Dupire</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </div>

        <br /><br /><div className="hr"><hr/></div>

          <div className="media">
          <div className="date">Azimuth documentary</div>
          <br />
            <iframe src="https://player.vimeo.com/video/291798789" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <p><a href="https://vimeo.com/291798789">Azimuth</a> from <a href="https://vimeo.com/user89839883">Azimuth</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
          </div>

          <br /><br />
          <div className="hr"><hr/></div>

        <div className="media">
        <p><a href="http://vimeo.com/8825907">Timeless</a> from <a href="http://vimeo.com/user1678659"> Toni Polkowski (FKSD)</a>. Music by me.</p>
          <iframe src="https://player.vimeo.com/video/8825907" width="1000" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <p><a href="https://vimeo.com/8825907">Timeless</a> from <a href="https://vimeo.com/user1678659">FKSD</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </div>

        <br /><br /><div className="hr"><hr/></div>

      <div className="media">
        <p>MGBG live</p>
        <div className="video-container">
        <iframe width="100%" height="600" src="http://www.youtube.com/embed/wXbM0ajiTuA" frameborder="0" allowfullscreen></iframe>
        </div></div>

      </div>
    </div>
  }
}

export default Visual;
