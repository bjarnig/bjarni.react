import React, { Component } from "react";
import { Helmet } from "react-helmet";
import StructuredData from "../StructuredData";

import OpacityImage from "./../common/OpacityImage";
const imageurl = "https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/";

// const brwn1 = imageurl + "gdlb_sharpen.png";
// const brwn2 = imageurl + "gdli_blurb.png";
// const brwn3 = imageurl + "gdlf.png";
// const brwn4 = imageurl + "gdle.png";
// const brwn5 = imageurl + "gdlc_ripple.png";
// const brwn6 = imageurl + "gdlc.png";
// const brwn7 = imageurl + "gdlh.png";
// const brwn8 = imageurl + "gdla_dustb.png";
// const brwn9 = imageurl + "gdlb.png";

const brwn1 = imageurl + "gdle_blurbvarx_pink.png";
const brwn2 = imageurl + "gdw_ave_pink.png";
const brwn3 = imageurl + "gdle_blurb_pink.png";

// const brwn4 = imageurl + "gdlc_blurbxy.png";
// const brwn5 = imageurl + "gdla_blurbx.png";
// const brwn6 = imageurl + "gdlh_blurb.png";
const brwn4 = imageurl + "gdlwb_pink.png";
const brwn5 = imageurl + "gdlwc_pink.png";
const brwn6 = imageurl + "gdlwd_pink.png";

 

  // const brwn7 = imageurl + "gdla_dustb.png";
  // const brwn8 = imageurl + "gdlb_blurb.png";
  // const brwn9 = imageurl + "gdla_dusta.png";

  const brwn7 = imageurl + "gdlwg_pink.png";
  const brwn8 = imageurl + "gdlwe_pink.png";
  const brwn9 = imageurl + "gdlwf_pink.png";


// const upic1 = imageurl + "DSC_0901.jpg";
// const upic2 = imageurl + "DSC_0899.jpg";
// const upic3 = imageurl + "DSC_0898.jpg";
// const upic4 = imageurl + "DSC_0895.jpg";
// const upic5 = imageurl + "DSC_0893.jpg";
// const upic6 = imageurl + "DSC_0891.jpg";


class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <StructuredData type="homepage" />
        <Helmet>
          <title>Bjarni Gunnarsson - Icelandic Composer and Software Engineer</title>
          <meta name="description" content="Icelandic Composer and Software Engineer. Released on labels such as Vertical Form, Thule, Uni:form, Spezial Material, Trachanik, Lamadameaveclechien and Shipwrec. Currently concerned with process-based ideas and fluid sound structures." />
          <meta name="keywords" content="Bjarni Gunnarsson, electronic music, sonic art, electroacoustic, computer music, acousmatic music, SuperCollider, composition, sound art, wavefield synthesis, sound artist, composer, music" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Bjarni Gunnarsson - Icelandic Composer and Software Engineer" />
          <meta property="og:description" content="Icelandic Composer and Software Engineer. Concerned with process-based ideas. Sounds focusing on internal activity and motion." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://bjarni-gunnarsson.net" />
          <meta property="og:image" content="https://bjarni-gunnarsson.net/bg.jpg" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Bjarni Gunnarsson - Icelandic Composer and Software Engineer" />
          <meta name="twitter:description" content="Icelandic Composer and Software Engineer. Concerned with process-based ideas and fluid sound structures." />
          <meta name="twitter:image" content="https://bjarni-gunnarsson.net/bg.jpg" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://bjarni-gunnarsson.net" />
        </Helmet>
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-lg-12"></div>
            </div>
            <div className="bio">
              <div className="row">
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
                  <a href="https://github.com/bjarnig" target="_blank" rel="noopener noreferrer">
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
                  <OpacityImage imageUrl={brwn5} />
                  <h5>Courses </h5>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-2">
                  <a href="press">
                  <OpacityImage imageUrl={brwn6} />
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
                  <a href="https://www.youtube.com/@bjarni-gunnarsson" target="_blank" rel="noopener noreferrer">
                  <OpacityImage imageUrl={brwn8} />
                  <h5>Visual </h5>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-2">
                  <a href="works">
                  <OpacityImage imageUrl={brwn9} />
                  <h5>Catalog </h5>
                  </a>
                </div>
              </div> 



 {/*
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
              */}
             
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
