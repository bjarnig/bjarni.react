import React, {Component} from 'react';
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';




class Visual extends Component {

  constructor(props) {
    super(props);
    this.state = { ustreamStyle1:{ border: '0px none transparent'}, ustreamStyle2:{ padding: '2px 0px 4px', width: '0px', background: '#ffffff', display: 'block', color: '#000000', 'font-weight': 'normal', 'font-size': '10px', 'text-decoration':'underline', 'text-align': 'center' } };
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

        {/* <div className="row">

<div className="col-lg-6">
    <h5>Composing with Algorithms </h5>
    <OpacityImage imageUrl= {context} />
    <br />
    <p><a className="btn btn-default" href="/cwa">Access Course</a></p>
</div>

<div className="col-lg-6">
    <h5>Programming and Music 1</h5>
    <OpacityImage imageUrl= {copaline} />
    <br />
    <p><a className="btn btn-default" href="/pma">Access Course</a></p>
</div>

</div>
<div className="row">

<div className="col-lg-4">
    <h5>Programming and Music 2</h5>
    <OpacityImage imageUrl= {music} />
    <br />
    <p><a className="btn btn-default" href="/pmb">Access Course</a></p>
</div>

</div> */}
        
        <div className="media">
        <div className="date">Blocking Behaviours, LIVE at ICLC 2023</div>
        <br />
        <iframe title="Embedded content" src="https://www.youtube.com/embed/NJQ1mNvPo9k?si=Slm7KUCS-aEkGQY2" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div className="hr"><hr/></div>

        <div className="media">
        <div className="date">SuperCollider and the Terra.js</div>
        <br />
        <iframe title="Embedded content" src="https://www.youtube.com/embed/jX81DTc2FwU" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div className="hr"><hr/></div>

        <div className="media">
        <div className="date">Hydra and SuperCollider</div>
        <br />
        <iframe title="Embedded content" src="https://youtube.com/embed/-s_ivshe_Yo" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div className="hr"><hr/></div>

        <div className="media">
        <div className="date">Simulation-driven synthesis</div>
        <br />
        <iframe title="Embedded content" src="https://youtube.com/embed/xudh-zwMoj0" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div className="hr"><hr/></div>

        <div className="media">
        <div className="date">SNDArchive</div>
        <br />
        <iframe title="Embedded content" src="https://youtube.com/embed/5q_3-A8dJ7Q" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div className="hr"><hr/></div>
        
        <div className="media">
        <div className="date">OF</div>
        <br />
        <iframe title="Embedded content" src="https://youtube.com/embed/Wv6qKqIKzLk" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div className="hr"><hr/></div>
        
        <div className="media">
        <div className="date">Copaline</div>
        <br />
        <iframe title="Embedded content" src="https://player.vimeo.com/video/313406191" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div className="hr"><hr/></div>

        <div className="media">
        <div className="date">Synthetic Environment</div>
        <br />
        <iframe title="Embedded content" src="https://player.vimeo.com/video/325550871" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div className="hr"><hr/></div>

        <div className="media">
        <div className="date">GRM Présences électronique</div>
        <br />
        <iframe title="Embedded content" width="100%" height="500" src="https://www.youtube.com/embed/XRnw5RrwtxQ" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className="hr"><hr/></div>

          <div className="media">
          <div className="date">Journal Afghan</div>
            <iframe title="Embedded content" src="https://player.vimeo.com/video/152695407" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <p><a href="https://vimeo.com/152695407">JOURNAL AFGHAN TRAILER</a> from <a href="https://vimeo.com/user2695439">Cedric Dupire</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
          </div>
          <br /><br /><div className="hr"><hr/></div>

        <div className="media">
        <div className="date">Grey Seeds</div>
        <iframe title="Embedded content" src="https://player.vimeo.com/video/62161204" width="100%" height="600" frameborder="0" allowfullscreen></iframe>
        </div>
        <br /><br /><div className="hr"><hr/></div>

        <div className="media">
        <div className="date">O Sal Da Lua, A outra experiência</div>
        <br />
        <iframe title="Embedded content" src="https://player.vimeo.com/video/76064055" width="100%" height="600" frameborder="0" allowfullscreen></iframe>
        {/* <iframe title="Embedded content" src="https://player.vimeo.com/video/76064055" width="100%" height="600" frameborder="0" mozallowfullscreen allowfullscreen></iframe> */}
        </div>
        <br /><br /><div className="hr"><hr/></div>

        <div className="media">
        <div className="date">Dried Up</div>
        <br />
          <iframe title="Embedded content" src="https://player.vimeo.com/video/8992814" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <p><a href="https://vimeo.com/8992814">DRIED UP - Bjarni Gunnarsson / Super 8 by Cedric Dupire</a> from <a href="https://vimeo.com/user2695439">Cedric Dupire</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </div>

        <br /><br /><div className="hr"><hr/></div>

          <div className="media">
          <div className="date">Azimuth documentary</div>
          <br />
            <iframe title="Embedded content" src="https://player.vimeo.com/video/291798789" width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <p><a href="https://vimeo.com/291798789">Azimuth</a> from <a href="https://vimeo.com/user89839883">Azimuth</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
          </div>

          <br /><br />
          <div className="hr"><hr/></div>

        <div className="media">
        <p><a href="http://vimeo.com/8825907">Timeless</a> from <a href="http://vimeo.com/user1678659"> Toni Polkowski (FKSD)</a>. Music by me.</p>
          <iframe title="Embedded content" src="https://player.vimeo.com/video/8825907" width="1000" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <p><a href="https://vimeo.com/8825907">Timeless</a> from <a href="https://vimeo.com/user1678659">FKSD</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </div>

        <br /><br /><div className="hr"><hr/></div>

      <div className="media">
        <p>MGBG live</p>
        <div className="video-container">
        <iframe title="Embedded content" width="100%" height="600" src="http://www.youtube.com/embed/wXbM0ajiTuA" frameborder="0" allowfullscreen></iframe>
        </div></div>

      </div>
    </div>
  }
}

export default Visual;
