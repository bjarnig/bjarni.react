import React, { Component } from 'react';

// import about from './../../assets/images/bjarni-gunnarsson.jpg';
// import about from './../../assets/images/bjarni.jpg';
// import about from './../../assets/images/bjarni-azi.jpeg';

import OpacityImage from './../common/OpacityImage';
const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const about = imageurl + 'bjarni-azimbw.png';

class About extends Component {

  componentDidMount() { window.scrollTo(0, 0) };

  render() { return<div className="container">
    <div className="content">
        <ul className="nav nav-pills"><li className="active"><a href="/about">bio</a></li>
        <li><a href="/works">works</a></li>
        </ul>
        <div className="hr"><hr /></div>

      <div className="row">
        <div className="col-lg-12">
        <OpacityImage imageUrl= {about} />
        {/* <div className="img-center"><img onload="this.style.opacity='1.0';" src={bjarni} alt="Bjarni Gunnarsson" className="img-responsive" /></div> */}
        </div>
      </div>
      <div className="bio">
      <div className="row">
      <div className="col-lg-8">
     
         <p>
         Composer and Computer Scientist from Reykjavík, Iceland. Interested in process-based sound and algorithmic composition. How sound and software interacts and the relationship between algorithms and musical behaviour. Recently exploring adaptive synthetic environments, generative sound streams, digital interrupts, and machine-listening applications.
        </p>

        <p>
        Performed in festivals such as Tectonics, Rewire, Today's Art, Sonar and Presences Electroniques and in countries such as Belgium, Canada, Croatia, Denmark, England, France, Germany, Greece, Holland, Switzerland, Italy, Ireland and Iceland. Released on labels such as Vertical Form, Thule, Uni:form, Spezial Material, Trachanik, LMALC, Shipwrec, 3LEAVES, Granny, Tartaruga, SUPERPANG and SØVN.  Collections of his solo works can be found on the releases “Safn 2006-2009” (2010), "Processes & Potentials" (2013), "Paths" (2016), "Lueur" (2018), "Volume & Void" (2020), "Cendres" (2020) and  "Anticlines" (2021). 
        </p>

        <p>
        Interested in exploring the contact between composed computer sound structures and space. Has presented/worked in various spatial configurations such as at the WFS system in The Hague (192 speakers), the WFS system in Berlin (832 speakers), the BEAST system in Birmingham (up to 100 speakers), GRM Paris as well as recent 8 and 4 channel formations.
        </p>

        <p>
        A faculty member at the Institute of Sonology, Royal Conservatory in The Hague and currently a teacher of algorithmic composition and computer music. Studied computer science at the University of Reykjavík and composition with Gerard Pape, Trevor Wishart, Agostino Di Scipio and Curtis Roads at the CCMIX music centre in Paris. Holds a masters degree from Sonology completed with Paul Berg, Kees Tazelaar and Richard Barrett.
        </p>

        <p>
        Currently working with algorithmic composition, generative environments, compositions and live electronics. Also working on new material with his long-lasting electronic music duo Einóma, and for MGBG, a duo of voice and electronics with Marie Guilleray.
        </p>

    
       
      </div>
      
      <div className="col-lg-4">
      <div className="biolinks">
       <p> <a href="https://bjarni.bandcamp.com" target="_blank"> - Bandcamp - </a></p>
       <p> <a href="https://soundcloud.com/bjarni" target="_blank"> - SoundCloud - </a></p>
       <p> <a href="https://github.com/bjarnig" target="_blank"> - GitHub - </a></p>
       <p> <a href="https://www.discogs.com/artist/5895598-Bjarni-%C3%9E%C3%B3r-Gunnarsson" target="_blank"> - Discogs - </a></p>
       <p> <a href="https://sonology.academia.edu/BjarniGunnarsson" target="_blank"> - Academia.edu - </a></p>
       <p> <a href="https://www.researchcatalogue.net/profile/?person=427702" target="_blank"> - Research Catalogue - </a></p>
       <p> <a href="http://sonology.org" target="_blank"> - Sonology - </a></p>
       <p> <a href="http://einoma.com" target="_blank"> - Einóma - </a></p>
       <p> <a href="https://soundcloud.com/mgbg" target="_blank"> - MGBG - </a></p>
       <p> <a href="https://www.youtube.com/@bjarni-gunnarsson" target="_blank"> - Youtube - </a></p>
       <p> <a href="https://vimeo.com/blindni" target="_blank"> - Vimeo - </a></p>
       <p> <a href="https://www.mixcloud.com/bjarnig/" target="_blank"> - Mixcloud - </a></p>
       <p> <a href="https://instagram.com/blindni" target="_blank"> - Instagram - </a></p>
       <p> <a href="https://twitter.com/blindni" target="_blank"> - Twitter - </a></p>
       <p> <a href="https://www.facebook.com/xbjarni.gunnarsson" target="_blank"> - Facebook - </a></p>
       <p> <strong> bjarnig@gmail.com </strong> </p>
       <p> [ Photo from <a href="https://www.azimuthfoundation.net/6-2/">Azimuth #6-2</a> ]</p>
       </div>
      </div>
      </div>
      </div>
      </div>
  </div>
  }
}

export default About;
