import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';

function Mixes() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return <div className="container">
      <SEO
        title="Mixes - Bjarni Gunnarsson"
        description="DJ mixes and curated sound selections by Bjarni Gunnarsson."
        path="/mixes"
      />
      <div className="content">
        <div className="music-submenu">

          <ul className="nav nav-pills">
            <li>
              <Link to="/music">pieces</Link>
            </li>
            <li>
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
            <li className="active">
              <Link to="/mixes">mixes</Link>
            </li>

          </ul>

          <div className="hr"><hr/></div>

        </div>

        <div className="media">
        <iframe title="Embedded content" width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbjarnig%2Fcyclic-executive%2F" frameBorder="0" ></iframe>
        </div>
        
        <div className="media">
        <iframe title="Embedded content" width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Featthisradio%2Fbjarni-gunnarsson-the-order-of-time%2F" frameBorder="0" ></iframe>
        </div>

        <br/><div className="hr"><hr/></div>

        <div className="media">
        <iframe title="Embedded content" width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbjarnig%2Fdubitatio%2F" frameBorder="0" ></iframe>
        </div>

        <br/><div className="hr"><hr/></div>

        <div className="media">
        <iframe title="Embedded content" width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fsecretthirteen%2Fsecret-thirteen-mix-096-ein%C3%B3ma%2F" frameBorder="0" ></iframe>
        </div>

        <br/><div className="hr"><hr/></div>

        <div className="media">
        <iframe title="Embedded content" width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbjarnig%2Fcrates%2F" frameBorder="0" ></iframe>
        </div>

        <br/><div className="hr"><hr/></div>

        <div className="media">
        <iframe title="Embedded content" width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbjarnig%2Finanticipable%2F" frameBorder="0" ></iframe>
        </div>

        <br/><div className="hr"><hr/></div>

        <div className="media">
        <iframe title="Embedded content" width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbjarnig%2Fpartega%2F" frameBorder="0" ></iframe>
        </div>

        <br/><div className="hr"><hr/></div>

        <div className="media">
        <iframe title="Embedded content" width="100%" height="600" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbjarnig%2Ffarfrom%2F" frameBorder="0" ></iframe>
        </div>

      </div>
    </div>
}

export default Mixes;
