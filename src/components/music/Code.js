import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/music">pieces</Link>
            </li>
            <li className="active">
              <Link to="/code">software</Link>
            </li>
            <li>
              <Link to="/writings">writings</Link>
            </li>
            <li>
              <Link to="/live">live</Link>
            </li>
            <li>
              <Link to="/collaborations">collaborations</Link>
            </li>

            <li>
              <Link to="/visual">visual</Link>
            </li>
            <li>
              <Link to="/mixes">mixes</Link>
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
