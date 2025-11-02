import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import StructuredData from '../StructuredData';

// import about from './../../assets/images/bjarni-gunnarsson.jpg';
// import about from './../../assets/images/bjarni.jpg';
// import about from './../../assets/images/bjarni-azi.jpeg';


const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const about = imageurl + 'bjarni-gunnarsson.png';

class About extends Component {

  componentDidMount() { window.scrollTo(0, 0) };

  render() { 
    return (
      <>
        <StructuredData type="person" />
        <Helmet>
          <title>About Bjarni Gunnarsson - Composer and Programmer | Process-Based Sound & Algorithmic Composition</title>
          <meta name="description" content="Bjarni Gunnarsson is a composer and programmer exploring generative sound through computational processes. Faculty at Institute of Sonology, The Hague. Creator of process-based music systems and algorithmic composition." />
          <meta name="keywords" content="Bjarni Gunnarsson, composer, programmer, algorithmic composition, process-based sound, generative music, computational processes, Institute of Sonology, The Hague, electronic music, computer music, machine learning, database-driven composition, variational autoencoders, live coding, SUPERPANG, SØVN, 3LEAVES, Flag Day Recordings, Tartaruga, Shipwrec" />
          
          {/* Open Graph */}
          <meta property="og:title" content="About Bjarni Gunnarsson - Composer and Programmer | Process-Based Sound & Algorithmic Composition" />
          <meta property="og:description" content="Composer and programmer exploring generative sound through computational processes. Faculty at Institute of Sonology, The Hague. Creator of process-based music systems and algorithmic composition." />
          <meta property="og:type" content="profile" />
          <meta property="og:url" content="https://bjarni-gunnarsson.net/about" />
          <meta property="og:image" content={about} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Bjarni Gunnarsson - Composer and Programmer" />
          <meta property="og:image:type" content="image/png" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="About Bjarni Gunnarsson - Composer and Programmer" />
          <meta name="twitter:description" content="Composer and programmer exploring generative sound through computational processes. Faculty at Institute of Sonology, The Hague." />
          <meta name="twitter:image" content={about} />
          <meta name="twitter:image:alt" content="Bjarni Gunnarsson - Composer and Programmer" />
          
          {/* Additional SEO meta tags */}
          <meta name="author" content="Bjarni Gunnarsson" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          
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
                <p>Bjarni Gunnarsson is a composer and programmer investigating the generative behaviour of sound in computational processes. His work examines how sound organisation emerges from interactions, exploring concepts such as feedback, inference, and networks. He studies how systems can model and influence the behaviour of sound, focusing on emergence, temporal complexity, and evolving relations between dynamic material.</p>
                <p>Recent projects include database-driven recomposition, agent-based simulations with mapped synthesis and live-coded interference, observation-driven mappings, block-based sequencing using small-world graphs, real-time network growth with interrupt control, latent-space interpolation, and sequential inference for audio-to-structure mapping.</p>
                <p>His work has been presented at ICMC, ICLC, SMC, and xCoAx, and performed at festivals including Tectonics, Rewire, Today's Art, Sonar, and Présences Électroniques. His writings have been published by ECHO – Journal of Music, Thought and Technology (Orpheus Instituut) and The Journal for Artistic Research (JAR). His music appears on labels such as SUPERPANG, SØVN, 3LEAVES, Flag Day Recordings, Tartaruga, and Shipwrec. Solo releases include Safn 2006–2009, Processes & Potentials, Paths, Lueur, Volume & Void, Cendres, Anticlines, and UPICS.</p>
                <p>He teaches algorithmic composition and computer music at the Institute of Sonology, Royal Conservatory in The Hague. He studied computer science at the University of Reykjavík and composition with Gerard Pape, Trevor Wishart, Agostino Di Scipio, and Curtis Roads at CCMIX in Paris. He completed a master's degree in Sonology under Paul Berg, Kees Tazelaar, and Richard Barrett.</p>
                </div>
                
                <div className="col-lg-4">
                  <div className="biolinks">
                    <p> <a href="https://bjarni.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp</a></p>
                    <p> <a href="https://soundcloud.com/bjarni" target="_blank" rel="noopener noreferrer">SoundCloud</a></p>
                    <p> <a href="https://github.com/bjarnig" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    <p> <a href="https://www.discogs.com/artist/5895598-Bjarni-%C3%9E%C3%B3r-Gunnarsson" target="_blank" rel="noopener noreferrer">Discogs</a></p>
                    <p> <a href="https://sonology.academia.edu/BjarniGunnarsson" target="_blank" rel="noopener noreferrer">Academia.edu</a></p>
                    <p> <a href="https://www.researchcatalogue.net/profile/?person=427702" target="_blank" rel="noopener noreferrer">Research Catalogue</a></p>
                    <p> <a href="http://sonology.org" target="_blank" rel="noopener noreferrer">Sonology</a></p>
                    <p> <a href="http://einoma.com" target="_blank" rel="noopener noreferrer">Einóma</a></p>
                    <p> <a href="https://soundcloud.com/mgbg" target="_blank" rel="noopener noreferrer">MGBG</a></p>
                    <p> <a href="https://www.youtube.com/@bjarni-gunnarsson" target="_blank" rel="noopener noreferrer">Youtube</a></p>
                    <p> <a href="https://www.mixcloud.com/bjarnig/" target="_blank" rel="noopener noreferrer">Mixcloud</a></p>
                    <p> <a href="https://instagram.com/blindni" target="_blank" rel="noopener noreferrer">Instagram</a></p>
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
