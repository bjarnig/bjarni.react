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
import Collaborations from './Collaborations';

class Excerpts extends Component {
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
            <li>
              <a href="collaborations">collaborations</a>
            </li>
            <li>
              <a href="visual">visual</a>
            </li>
            <li>
              <a href="mixes">mixes</a>
            </li>
            <li className="active">
              <a href="excerpts">excerpts</a>
            </li>
          </ul>

          <div className="hr"><hr/></div>

        </div>

        <h1>excerpts from other pieces</h1>

<div class="contentleft">
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Undrun(excerpt).mp3" target="_blank">Undrun</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Migrateur(excerpt).mp3" target="_blank">Migrateur</a>
</div>
<br /><br />
<div class="contentleft">
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Timeout(excerpt).mp3" target="_blank">Timeout</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Omniscient(excerpt).mp3" target="_blank">Omniscient</a>
</div>
<br /><br />
<div class="contentleft">
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/DettaSaman(excerpt).mp3" target="_blank">Detta saman</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Pice(excerpt).mp3" target="_blank">Pice</a>
</div>
<br /><br /><br/><br/>

      </div>
    </div>
  }
}

export default Excerpts;
