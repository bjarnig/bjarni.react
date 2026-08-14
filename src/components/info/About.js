import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StructuredData from '../StructuredData';
import SEO from '../common/SEO';

// import about from './../../assets/images/bjarni-gunnarsson.jpg';
// import about from './../../assets/images/bjarni.jpg';
// import about from './../../assets/images/bjarni-azi.jpeg';


const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const about = imageurl + 'bjarni-gunnarsson.png';

// Groups are labelled on desktop; on mobile the labels are hidden and the
// links reflow into one separated run (see .biolinks in custom.css).
const linkGroups = [
  {
    label: 'Listen',
    links: [
      { name: 'Bandcamp', url: 'https://bjarni.bandcamp.com' },
      { name: 'SoundCloud', url: 'https://soundcloud.com/bjarni' },
      { name: 'Discogs', url: 'https://www.discogs.com/artist/5895598-Bjarni-%C3%9E%C3%B3r-Gunnarsson' },
    ],
  },
  {
    label: 'Research',
    links: [
      { name: 'GitHub', url: 'https://github.com/bjarnig' },
      { name: 'Academia.edu', url: 'https://sonology.academia.edu/BjarniGunnarsson' },
      { name: 'Research Catalogue', url: 'https://www.researchcatalogue.net/profile/?person=427702' },
    ],
  },
  {
    label: 'Projects',
    links: [
      { name: 'Sonology', url: 'http://sonology.org' },
      { name: 'Einóma', url: 'http://einoma.com' },
      { name: 'MGBG', url: 'https://soundcloud.com/mgbg' },
    ],
  },
  {
    label: 'Elsewhere',
    links: [
      { name: 'Youtube', url: 'https://www.youtube.com/@bjarni-gunnarsson' },
      { name: 'Mixcloud', url: 'https://www.mixcloud.com/bjarnig/' },
      { name: 'Instagram', url: 'https://instagram.com/blindni' },
    ],
  },
];

function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
      <>
        <StructuredData type="person" />
        <SEO
          title="Biography - Bjarni Gunnarsson | Composer and Programmer"
          description="Bjarni Gunnarsson explores generative sound through computational processes. Faculty at Institute of Sonology, The Hague. Creator of process-based music systems and algorithmic composition."
          path="/about"
          image={about}
          type="profile"
        />
        <div className="container">
          <div className="content prose">
            <ul className="nav nav-pills"><li className="active"><Link to="/about">bio</Link></li>
            <li><Link to="/works">catalog</Link></li>
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
                    {linkGroups.map((group) => (
                      <div className="linkgroup" key={group.label}>
                        <h4>{group.label}</h4>
                        <ul>
                          {group.links.map((link) => (
                            <li key={link.url}>
                              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <p className="biomail">bjarnig@gmail.com</p>
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

export default About;
