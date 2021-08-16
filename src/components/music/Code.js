import React, {Component} from 'react';
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';

// Components
import OpacityImage from './../common/OpacityImage';

// Images
const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const code = imageurl + 'code.png';

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
            <li className="active">
              <a href="code">software</a>
            </li>
            <li>
              <a href="writings">writings</a>
            </li>
            <li>
              <a href="live">live</a>
            </li>
            <li>
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

          <div className="media">
          <p>GitHub</p>
          <div className="img-center-noborder">
          <a href="https://github.com/bjarnig">
            <OpacityImage imageUrl= {code} />
            </a>
          </div>
        </div>
        </div>
      
      </div>
    </div>
  }
}

export default Collaborations;
