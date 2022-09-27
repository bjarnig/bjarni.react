import React, { Component } from 'react';

// Components
import OpacityImage from './../common/OpacityImage';

class Workshops extends Component {
  render() { return<div className="container">
      <div className="content">

<article>
        <div className="date"> 30.08.2022</div>
        <div className="hr"><hr /></div>
        <h1> Live Coding, Synthesis and Programming</h1>
        <a href="https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/2022-2023/StartupWeek.zip" target="_blank">
        <OpacityImage imageUrl= "https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/workshop.png" />
        </a>
        <p><a href="https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/2022-2023/StartupWeek.zip" target="_blank">Download materials</a></p>
        
      </article>


      </div>
  </div>
  }
}

export default Workshops;
