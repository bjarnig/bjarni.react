import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import StructuredData from '../StructuredData';

// import about from './../../assets/images/bjarni-gunnarsson.jpg';
// import about from './../../assets/images/bjarni.jpg';
// import about from './../../assets/images/bjarni-azi.jpeg';

import OpacityImage from './../common/OpacityImage';
const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const about = imageurl + 'bjarni-azimbw.png';

class About extends Component {

  componentDidMount() { window.scrollTo(0, 0) };

  render() { 
    return (
      <>
        <StructuredData type="person" />
        <Helmet>
          <title>About Bjarni Gunnarsson - Icelandic Composer and Computer Scientist</title>
          <meta name="description" content="Bjarni Gunnarsson is an Icelandic Composer and Computer Scientist from Reykjavík, Iceland. Faculty member at the Institute of Sonology, Royal Conservatory in The Hague. Expert in process-based sound and algorithmic composition." />
          <meta name="keywords" content="Bjarni Gunnarsson, Icelandic composer, computer scientist, algorithmic composition, process-based sound, Sonology, Royal Conservatory, The Hague, electronic music, computer music, spatial audio, wavefield synthesis" />
          
          {/* Open Graph */}
          <meta property="og:title" content="About Bjarni Gunnarsson - Icelandic Composer and Computer Scientist" />
          <meta property="og:description" content="Bjarni Gunnarsson is an Icelandic Composer and Computer Scientist from Reykjavík, Iceland. Faculty member at the Institute of Sonology, Royal Conservatory in The Hague." />
          <meta property="og:type" content="profile" />
          <meta property="og:url" content="https://bjarni-gunnarsson.net/about" />
          <meta property="og:image" content={about} />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="About Bjarni Gunnarsson - Icelandic Composer and Computer Scientist" />
          <meta name="twitter:description" content="Bjarni Gunnarsson is an Icelandic Composer and Computer Scientist from Reykjavík, Iceland. Faculty member at the Institute of Sonology." />
          <meta name="twitter:image" content={about} />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://bjarni-gunnarsson.net/about" />
        </Helmet>
        <div className="container">
          <div className="content">
            <ul className="nav nav-pills"><li className="active"><a href="/about">bio</a></li>
            <li><a href="/works">catalog</a></li>
            </ul>
            <div className="hr"><hr /></div>

            <div className="row">
              <div className="col-lg-12">
                {/* <OpacityImage imageUrl= {about} /> */}
                {/* <div className="img-center"><img onload="this.style.opacity='1.0';" src={bjarni} alt="Bjarni Gunnarsson" className="img-responsive" /></div> */}
              </div>
            </div>
            <div className="bio">
              <div className="row">
                <div className="col-lg-8">
                <p>Bjarni Gunnarsson is an Icelandic composer and programmer exploring algorithmic sound, generative structures, and live-coded systems. His work focuses on how sound can emerge through processes, interaction, instability, and the internal behavior of systems. Instead of composing with sound alone, he composes with the conditions under which sound happens.</p>
                <p>Using custom environments, he constructs situations where sonic forms evolve through feedback, pattern formation, inference, and layered interactions. These environments are often open-ended, producing material that shifts over time and challenges traditional notions of control and structure. Processes are set in motion that listen, respond within in music that is both relational and self-contained. Recent projects include database-driven composition, parametric synthesis, reactive sound networks, and real-time systems shaped by sound analysis and classification. </p>
                <p>His work has been presented at ICMC, ICLC, SMC, and xCoAx, and performed at festivals including Tectonics, Rewire, Today’s Art, Sonar, and Présences Électroniques. His music appears on labels such as SUPERPANG, SØVN, 3LEAVES, Flag Day Recordings, Tartaruga, and Shipwrec. Solo releases include Safn 2006–2009, Processes & Potentials, Paths, Lueur, Volume & Void, Cendres, Anticlines, and UPICS.</p>
                <p>He teaches algorithmic composition and computer music at the Institute of Sonology, Royal Conservatory in The Hague. He studied programming at the University of Reykjavík and composition with Gerard Pape, Trevor Wishart, Agostino Di Scipio, and Curtis Roads at CCMIX in Paris, and completed a master’s degree at Sonology under Paul Berg, Kees Tazelaar, and Richard Barrett.</p>
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
                    <p style={{ fontSize: '11px' }}> bjarnig@gmail.com </p>
                    {/* <p> [ Photo from <a href="https://www.azimuthfoundation.net/6-2/">Azimuth #6-2</a> ]</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
