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
const research = imageurl + 'research.png';
const academia = imageurl + 'academia.png';

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
              <a href="code">software</a>
            </li>
            <li className="active">
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

        </div>

        <div className="media">
          <p>Research Catalogue</p>
          <div className="img-center">
          <a href="https://www.researchcatalogue.net/profile/?person=427702">
            <OpacityImage imageUrl= {research} />
            </a>
          </div>
        </div>

        <div className="media">
          <p>Academia.edu</p>
          <div className="img-center">
          <a href="https://sonology.academia.edu/BjarniGunnarsson">
            <OpacityImage imageUrl= {academia} />
            </a>
          </div>
        </div>


    </div>
    </div>
  }
}

export default Collaborations;
