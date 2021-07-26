import React, {Component} from 'react';
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';

import Music from './Live';
import Live from './Live';
import Visual from './Visual';
import Collaborations from './Visual';
import Excerpts from './Excerpts';

class Mixes extends Component {
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
              <a href="collaborations">co</a>
            </li>
            <li>
              <a href="visual">visual</a>
            </li>
            <li className="active">
              <a href="mixes">mixes</a>
            </li>
          
          </ul>

          <div className="hr"><hr/></div>

        </div>

        <div className="media">
        <iframe width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbjarnig%2Fcyclic-executive%2F" frameborder="0" ></iframe>
        </div>
        
        <div className="media">
        <iframe width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Featthisradio%2Fbjarni-gunnarsson-the-order-of-time%2F" frameborder="0" ></iframe>
        </div>

        <br/><div className="hr"><hr/></div>

        <div className="media">
        <iframe width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbjarnig%2Fdubitatio%2F" frameborder="0" ></iframe>
        </div>

        <br/><div className="hr"><hr/></div>

        <div className="media">
        <iframe width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fsecretthirteen%2Fsecret-thirteen-mix-096-ein%C3%B3ma%2F" frameborder="0" ></iframe>
        </div>

        <br/><div className="hr"><hr/></div>

        <div className="media">
        <iframe width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbjarnig%2Fcrates%2F" frameborder="0" ></iframe>
        </div>

        <br/><div className="hr"><hr/></div>

        <div className="media">
        <iframe width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbjarnig%2Finanticipable%2F" frameborder="0" ></iframe>
        </div>

        <br/><div className="hr"><hr/></div>

        <div className="media">
        <iframe width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbjarnig%2Fpartega%2F" frameborder="0" ></iframe>
        </div>

        <br/><div className="hr"><hr/></div>

        <div className="media">
        <iframe width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbjarnig%2Ffarfrom%2F" frameborder="0" ></iframe>
        </div>

      </div>
    </div>
  }
}

export default Mixes;
