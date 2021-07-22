import React, { Component } from 'react';

import about from './../../assets/images/bjarni-gunnarsson.jpg';
import bjarni from './../../assets/images/bjarni.jpg';

class About extends Component {
  render() { return<div className="container">
    <div className="content">
        <ul className="nav nav-pills"><li className="active"><a href="/about">bio</a></li><li><a href="/works">works</a></li><li><a href="/works">articles</a></li></ul>
        <div className="hr"><hr /></div>

      <div className="row">
      <div className="col-lg-6">

      {/* <div className="img-center"><img onload="this.style.opacity='1.0';" src={bjarni} alt="Bjarni Gunnarsson" className="img-responsive" /></div> */}
      <div className="img-center"><img onload="this.style.opacity='1.0';" src={about} alt="Bjarni Gunnarsson" className="img-responsive" /></div>
      <h1>bjarnig@gmail.com </h1></div>
      <div className="col-lg-6">

      <div className="bio">
      <p>
        Icelandic Composer and Software Engineer. Released numerous LP´s, EP´s, compilation tracks and reworks on labels like Vertical Form, Thule, Uni:form, Spezial Material, Trachanik, LMALC, Shipwrec, 3LEAVES, Granny and Tartaruga records.
        </p>

        <p>Perfomed his music in concerts and festivals in Belgium, Canada, Croatia, Denmark, England, France, Germany, Greece, Holland, Switzerland, Italy, Ireland and Iceland. Collections of his solo works can be found on the CDs “Safn 2006-2009” (2010), "Processes & Potentials" (2013), "Paths" (2016) and "Lueur" (2018). </p>

        <p>Concerned with process-based ideas. Sounds focusing on internal activity and motion. Compositions that put into foreground behaviors, actions, fluid sound structures, fuzzy materials or forms.</p>

        <p>Interested in exploring the contact between composed computer sound structures and space. Has presented/worked in various spatial configurations such as at the WFS system in Leiden (192 speakers), the WFS system in Berlin (832 speakers), the BEAST system in Birmingham (up to 100 speakers), GRM Paris as well as recent 8 and 4 channel formations.
        </p>

        <p>Faculty member at the Institute of Sonology, Royal Conservatory in The Hague and currently teacher of algorithmic composition and computer music. Studied composition with Gerard Pape, Trevor Wishart, Agostino Di Scipio and Curtis Roads at the CCMIX music center in Paris. Holds a masters degree from Sonology completed with Paul Berg, Kees Tazelaar and Richard Barrett.
        </p>

        <p>Currently working with algorithmic composition, generative environments, compositions and live electronics. Also working on new material with his long-lasting electronic music duo Einóma, and for MGBG, a duo of voice and electronics with Marie Guilleray.</p>
        </div>
      </div>
    </div>
    </div>
  </div>
  }
}

export default About;
