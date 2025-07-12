import React, {Component} from 'react';
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';

// Components
import OpacityImage from './../common/OpacityImage';

// Images
const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const article = imageurl + "articleml.png";

class Writings extends Component {

constructor(props) {
  super(props);
  this.state = { bandcampStyle:{ border: '0', width: '100%', height: '120px' } };
}
  componentDidMount() { window.scrollTo(0, 0) }

  render() {
    return <div className="container">

      <div className="content">

        <div className="music-submenu">

        <ul className="nav nav-pills">
                <li className="active">
                  <a href="music">pieces</a>
                </li>
                <li>
                  <a href="live">live</a>
                </li>
                <li>
                  <a href="collaborations">collaborations</a>
                </li>
                 <li>
                  <a href="writings">writings</a>
                </li>
                <li>
                <a href="https://github.com/bjarnig" target="_blank" rel="noopener noreferrer">software</a>
                </li>
                 <li>
                <a href="https://www.youtube.com/@bjarni-gunnarsson" target="_blank" rel="noopener noreferrer">
                visual</a>
                </li>
              </ul>
          <div className="hr"><hr/></div>

        </div>

        <article>
            {" "}
            <div className="date">07-02-2025</div>
            <div className="hr">
              <hr />
            </div>
            <p>Lectorate Presentation</p>

 <div className="col-lg-12">
              <div className="img-center-noborder">
                <a
                  href="https://www.researchcatalogue.net/profile/show-exposition?exposition=2532879"
                  target="_blank" rel="noopener noreferrer"
                >
                  <OpacityImage imageUrl={article} />
                </a>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="img-center">
                <a
                  href="https://researchplatform.art/projects/crafting-creativity-uniting-neural-synthesis-machine-learning-and-algorithmic-composition-for-innovative-music-creation/"
                  target="_blank" rel="noopener noreferrer"
                >
                  <OpacityImage imageUrl={spectrograms} />
                </a>
              </div>
            </div> */}
            {/* <p>.<br/></p> */}
            <p>
            On 7 February, the lectorate ‘Music, Education and Society’ will present the outcomes of the research projects of 2024, as well as introduce the research group of 2025. The meeting is also the festive closing of the lectorate year.
            </p>
            <p>I will present my project: 'Recomposing Data: Machine Learning As Compositional Process'</p>
            <p>
            This research proposal concerns an approach to computer music that seeks to combine modern approaches in machine learning with established processes of algorithmic composition. The idea is to critically question the use of generative algorithms within the creative process and how the training and creation of data for machine learning can become an important part of that process.
            </p>
            <p>
              <a
                href="https://researchplatform.art/events/lectorate-event-music-education-society-2025/"
                target="_blank" rel="noopener noreferrer"
              >Event in Amare
              </a>
            </p>  
            <p>
              <a
                href="https://researchplatform.art/projects/crafting-creativity-uniting-neural-synthesis-machine-learning-and-algorithmic-composition-for-innovative-music-creation/"
                target="_blank" rel="noopener noreferrer"
              >The Project
              </a>
            </p>  
            <p>
              <a
                href="https://www.researchcatalogue.net/profile/show-exposition?exposition=2532879"
                target="_blank" rel="noopener noreferrer"
              >Article on the Research Catalogue 
              </a>
            </p>  
          </article>


        {/* <div className="media">
          <p>Research Catalogue</p>
          <div className="img-center">
          <a href="https://www.researchcatalogue.net/profile/?person=427702">
            <OpacityImage imageUrl= {research} />
            </a>
          </div>
        </div>

        <div className="media">
          <p>Academia.edu</p>
          <div className="img-center">
          <a href="https://sonology.academia.edu/BjarniGunnarsson">
            <OpacityImage imageUrl= {academia} />
            </a>
          </div>
        </div> */}


    </div>
    </div>
  }
}

export default Writings;
