import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../common/SEO';
import StructuredData from '../StructuredData';

// Components
import OpacityImage from './../common/OpacityImage';

// Images
const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const algorithms = imageurl + 'xcwa.jpg';
const programming = imageurl + 'xpma.jpg';
const music = imageurl + 'xpmb.jpg';
const workshop = imageurl + 'xworkshop.jpg';

function Courses() {
  const navigate = useNavigate();
  const handleImageClick = (url) => {
    navigate(url);
  };

  return (
      <>
        <StructuredData type="courses" />
        <SEO
          title="Courses - Bjarni Gunnarsson | Algorithmic Composition & Computer Music"
          description="Learn algorithmic composition and computer music with Bjarni Gunnarsson. Courses include Composing with Algorithms, Programming and Music 1 & 2, and specialized workshops."
          path="/courses"
        />
        <div className="container">
          <div className="music">
            <div className="date">2025 - 2026</div>
            <div className="hr"><hr /></div>
            <div className="row">

              <div className="col-lg-6">
                  <h4>Composing with Algorithms </h4>
                  <OpacityImage imageUrl= {algorithms} onClick={() => handleImageClick('/cwa')} />
                  <br />
                  <p><Link className="btn btn-default" to="/cwa">Access</Link></p>
              </div>

              <div className="col-lg-6">
                  <h4>Programming and Music 1</h4>
                  <OpacityImage imageUrl= {programming} onClick={() => handleImageClick('/pma')} />
                  <br />
                  <p><Link className="btn btn-default" to="/pma">Access</Link></p>
              </div>

              </div>

              <div className="row">

              <div className="col-lg-6">
                  <h4>Programming and Music 2</h4>
                  <OpacityImage imageUrl= {music} onClick={() => handleImageClick('/pmb')} />
                  <br />
                  <p><Link className="btn btn-default" to="/pmb">Access</Link></p>
              </div>

              <div className="col-lg-6">
                  <h4>Workshops</h4>
                  <OpacityImage imageUrl= {workshop} onClick={() => handleImageClick('/workshops')} />
                  <br />
                  <p><Link className="btn btn-default" to="/workshops">Access</Link></p>
              </div>

              

            </div>

          </div>
        </div>
      </>
    );
}

export default Courses;
