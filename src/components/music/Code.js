import React, { useEffect } from 'react';

// Components
import OpacityImage from './../common/OpacityImage';
import SEO from './../common/SEO';

// Images
const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const code = imageurl + 'code.png';

function Collaborations() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const bandcampStyle = { border: '0', width: '100%', height: '120px' };

  return <div className="container">
      <SEO
        title="Code - Bjarni Gunnarsson"
        description="Open-source code, software experiments, and SuperCollider tools by Bjarni Gunnarsson, supporting his work in algorithmic composition and process-based sound."
        path="/code"
      />
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
              <a href="collaborations">collaborations</a>
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

export default Collaborations;
