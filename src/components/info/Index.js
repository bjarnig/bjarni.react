import React, { Component } from "react";

import OpacityImage from "./../common/OpacityImage";
const imageurl = "https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/";
// const brwn1 = imageurl + "brwn1b.png";
// const brwn2 = imageurl + "brwn2b.png";
// const brwn3 = imageurl + "brwn3b.png";
// const brwn4 = imageurl + "brwn4b.png";
// const brwn5 = imageurl + "brwn5b.png";
// const brwn6 = imageurl + "brwn6b.png";
// const brwn7 = imageurl + "brwn7b.png";
// const brwn8 = imageurl + "brwn8b.png";
// const brwn9 = imageurl + "brwn9b.png";

const upic1 = imageurl + "DSC_0901.jpg";
const upic2 = imageurl + "DSC_0899.jpg";
const upic3 = imageurl + "DSC_0898.jpg";
const upic4 = imageurl + "DSC_0895.jpg";
const upic5 = imageurl + "DSC_0893.jpg";
const upic6 = imageurl + "DSC_0891.jpg";


class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
          <div className="bio">
            {/* <div className="row">
              <div className="col-lg-4 col-sm-4 col-xs-2">
                <a href="current">
                <OpacityImage imageUrl={brwn1} />
                <h5>News </h5>
                </a>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-2">
                <a href="music">
                <OpacityImage imageUrl={brwn2} />
                <h5>Pieces </h5>
                </a>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-2">
                <a href="code">
                <OpacityImage imageUrl={brwn3} />
                <h5>Code</h5>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-xs-2">
                <a href="writings">
                <OpacityImage imageUrl={brwn4} />
                <h5>Writings </h5>
                </a>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-2">
                <a href="courses">
                <OpacityImage imageUrl={brwn6} />
                <h5>Courses </h5>
                </a>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-2">
                <a href="press">
                <OpacityImage imageUrl={brwn8} />
                <h5>Press </h5>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-xs-2">
                <a href="releases">
                <OpacityImage imageUrl={brwn7} />
                <h5>Releases </h5>
                </a>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-2">
                <a href="visual">
                <OpacityImage imageUrl={brwn5} />
                <h5>Visual </h5>
                </a>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-2">
                <a href="works">
                <OpacityImage imageUrl={brwn9} />
                <h5>Works </h5>
                </a>
              </div>
            </div> */}

            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <a href="https://flagdayrecordings.bandcamp.com/album/upics">
                <OpacityImage imageUrl={upic5} />
                &nbsp;
                </a>
              </div>
              
              <div className="col-lg-6 col-sm-6 col-xs-12">
              <a href="https://flagdayrecordings.bandcamp.com/album/upics">
                <OpacityImage imageUrl={upic2} />
                &nbsp;
                </a>
              </div>
            </div> 

             <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <a href="https://flagdayrecordings.bandcamp.com/album/upics">
                <OpacityImage imageUrl={upic3} />
                &nbsp;
                </a>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <a href="https://flagdayrecordings.bandcamp.com/album/upics">
                <OpacityImage imageUrl={upic4} />
                &nbsp;
                </a>
              </div>
            </div> 

             <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <a href="https://flagdayrecordings.bandcamp.com/album/upics">
                <OpacityImage imageUrl={upic1} />
                &nbsp;
                </a>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <a href="https://flagdayrecordings.bandcamp.com/album/upics">
                <OpacityImage imageUrl={upic6} />
                &nbsp;
                </a>
              </div>
            </div> 
           
          </div>
        </div>
      </div>
    );
  }
}

export default About;
