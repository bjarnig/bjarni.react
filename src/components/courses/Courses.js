import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import StructuredData from '../StructuredData';

// Components
import OpacityImage from './../common/OpacityImage';

// Images
const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const algorithms = imageurl + 'xcwa.jpg';
const programming = imageurl + 'xpma.jpg';
const music = imageurl + 'xpmb.jpg';
const workshop = imageurl + 'xworkshop.jpg';

class Courses extends Component {
  render() { 
    return (
      <>
        <StructuredData type="courses" />
        <Helmet>
          <title>Courses - Bjarni Gunnarsson | Algorithmic Composition & Computer Music</title>
          <meta name="description" content="Learn algorithmic composition and computer music with Bjarni Gunnarsson. Courses include Composing with Algorithms, Programming and Music 1 & 2, and specialized workshops." />
          <meta name="keywords" content="algorithmic composition course, computer music course, programming music, SuperCollider course, electronic music education, music technology course, Bjarni Gunnarsson teaching, Sonology courses" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Courses - Bjarni Gunnarsson | Algorithmic Composition & Computer Music" />
          <meta property="og:description" content="Learn algorithmic composition and computer music with Bjarni Gunnarsson. Courses include Composing with Algorithms, Programming and Music 1 & 2, and specialized workshops." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://bjarni-gunnarsson.net/courses" />
          <meta property="og:image" content="https://bjarni-gunnarsson.net/bg.jpg" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Courses - Bjarni Gunnarsson | Algorithmic Composition & Computer Music" />
          <meta name="twitter:description" content="Learn algorithmic composition and computer music with Bjarni Gunnarsson. Courses include Composing with Algorithms, Programming and Music 1 & 2." />
          <meta name="twitter:image" content="https://bjarni-gunnarsson.net/bg.jpg" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://bjarni-gunnarsson.net/courses" />
        </Helmet>
        <div className="container">
          <div className="music">
            <div className="date">2024 - 2025</div>
            <div className="hr"><hr /></div>
            <div className="row">

              <div className="col-lg-6">
                  <h4>Composing with Algorithms </h4>
                  <OpacityImage imageUrl= {algorithms} />
                  <br />
                  <p><a className="btn btn-default" href="/cwa">Access</a></p>
              </div>

              <div className="col-lg-6">
                  <h4>Programming and Music 1</h4>
                  <OpacityImage imageUrl= {programming} />
                  <br />
                  <p><a className="btn btn-default" href="/pma">Access</a></p>
              </div>

              </div>

              <div className="row">
          
              <div className="col-lg-6">
                  <h4>Programming and Music 2</h4>
                  <OpacityImage imageUrl= {music} />
                  <br />
                  <p><a className="btn btn-default" href="/pmb">Access</a></p>
              </div>

              <div className="col-lg-6">
                  <h4>Workshops</h4>
                  <OpacityImage imageUrl= {workshop} />
                  <br />
                  <p><a className="btn btn-default" href="/workshops">Access</a></p>
              </div>

              

            </div>

          </div>
        </div>
      </>
    );
  }
}

export default Courses;
