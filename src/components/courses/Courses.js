import React, { Component } from 'react';

// Components
import OpacityImage from './../common/OpacityImage';

// Images
const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const algorithms = imageurl + 'xcwa.jpg';
const programming = imageurl + 'xpma.jpg';
const music = imageurl + 'xpmb.jpg';
const workshop = imageurl + 'xworkshop.jpg';

class Courses extends Component {
  render() { return<div className="container">
      <div className="music">
        <div className="date">2023 - 2024</div>
        <div className="hr"><hr /></div>
        <div className="row">

          <div className="col-lg-6">
              <h5>Composing with Algorithms </h5>
              <OpacityImage imageUrl= {algorithms} />
              <br />
              <p><a className="btn btn-default" href="/cwa">Access</a></p>
          </div>

          <div className="col-lg-6">
              <h5>Programming and Music 1</h5>
              <OpacityImage imageUrl= {programming} />
              <br />
              <p><a className="btn btn-default" href="/pma">Access</a></p>
          </div>

          </div>

          <div className="row">
      
          <div className="col-lg-6">
              <h5>Programming and Music 2</h5>
              <OpacityImage imageUrl= {music} />
              <br />
              <p><a className="btn btn-default" href="/pmb">Access</a></p>
          </div>

          <div className="col-lg-6">
              <h5>Workshops</h5>
              <OpacityImage imageUrl= {workshop} />
              <br />
              <p><a className="btn btn-default" href="/workshops">Access</a></p>
          </div>

          

        </div>

      </div>
  </div>
  }
}

export default Courses;
