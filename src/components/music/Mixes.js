import React, { useEffect } from 'react';

function Mixes() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

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
