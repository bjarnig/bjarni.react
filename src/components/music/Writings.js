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
const research = imageurl + 'research.png';
const academia = imageurl + 'academia.png';
const iclc2023 = imageurl + "iclc2023.png";

class Collaborations extends Component {

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

        {/* <article>
            {" "}
            <div className="date">Balancing Behaviours</div>
            <div className="hr">
              <hr />
            </div> 
            <p>ICLC 2023</p>
            
            <div className="img-center">
              <a href="https://echo.orpheusinstituut.be/article/balancing-behaviours" target="_blank">
                <OpacityImage imageUrl={iclc2023} />
              </a>
            
            </div>
           
            <p>Playing as part of ICLC 2023 'Alternative Algorithms'. Doors 19:30 / Show: 20:00, EKKO in Utrecht.</p>
            <p>‘Blocking Behaviours’ concerns the real-time interpretation of two simulations of complex behaviour through an agent-based system. The simulations enforce a way of thinking that revolves around balancing behaviours, an attitude that considers musical output as something that emerges from an interaction with an autonomous system. The simulation acts as a generative, rule-based system producing output that is subject to different kinds of observation algorithms. The idea is that evolving processes are set in motion where the creator/composer becomes an observer of various developments. The output can not always be controlled in detail but is instead interpreted and further processed. The interpretation involves a mapping between different modes of representations in order to simplify or combine. In ‘Blocking Behaviours’ the idea is to explore the boundary of generative behaviour, control and and direct access to computer sound synthesis.</p>
            <p><a href="https://iclc.toplap.org/2023" target="_blank">https://iclc.toplap.org/2023</a></p>
            <p><a href="https://ekko.nl/event/alternative-algorithms" target="_blank">https://ekko.nl/event/alternative-algorithms</a></p>
            
          </article>*/}


        <div className="media">
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
        </div>


    </div>
    </div>
  }
}

export default Collaborations;
