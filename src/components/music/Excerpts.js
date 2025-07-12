import React, {Component} from 'react';
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';

class Excerpts extends Component {

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

<div className="contentleft">
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Undrun(excerpt).mp3" target="_blank" rel="noopener noreferrer">Undrun</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Migrateur(excerpt).mp3" target="_blank" rel="noopener noreferrer">Migrateur</a>
</div>
<br /><br />
<div className="contentleft">
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Timeout(excerpt).mp3" target="_blank" rel="noopener noreferrer">Timeout</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Omniscient(excerpt).mp3" target="_blank" rel="noopener noreferrer">Omniscient</a>
</div>
<br /><br />
<div className="contentleft">
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/DettaSaman(excerpt).mp3" target="_blank" rel="noopener noreferrer">Detta saman</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/excerpts/Pice(excerpt).mp3" target="_blank" rel="noopener noreferrer">Pice</a>
</div>
<br /><br /><br/><br/>

      </div>
    </div>
  }
}

export default Excerpts;
