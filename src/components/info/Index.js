import React, { Component } from "react";

import OpacityImage from "./../common/OpacityImage";
const imageurl = "https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/";
const about = imageurl + "hb.png";

// const hydra = new Hydra({ detectAudio: false });

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          {/* <ul className="nav nav-pills">
            <li className="active">
              <a href="/about">bio</a>
            </li>
            <li>
              <a href="/works">works</a>
            </li>
          </ul> */}
          {/* <div className="hr">
            <hr />
          </div> */}

<iframe src="https://hydra.ojack.xyz/?sketch_id=wOCJUPsTZ9HDQSrN" height={600} width={800}></iframe>

          <div className="row">
            <div className="col-lg-12">

              
              {/* <OpacityImage imageUrl={about} /> */}
              {/* <div className="img-center"><img onload="this.style.opacity='1.0';" src={bjarni} alt="Bjarni Gunnarsson" className="img-responsive" /></div> */}
            </div>
          </div>
          <div className="bio">
            <div className="row">
              <div className="col-lg-8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
