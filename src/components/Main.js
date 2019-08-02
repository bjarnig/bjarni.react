import React, {Component} from 'react';

// Styles
import './../assets/css/style.css';
import './../assets/css/custom.css';
import './../assets/css/login.css';
import './../assets/css/admin.css';
import './../assets/css/app.css';
import './../assets/css/main.css';

// Images
import cedric from './../assets/images/cedric.jpg';
import cedric2 from './../assets/images/cedric2.jpg';
import cedric3 from './../assets/images/cedric3.jpg';
import cedric4 from './../assets/images/cedric4.jpg';
import cedric5 from './../assets/images/cedric5.jpg';
import cedric6 from './../assets/images/cedric6.jpg';
import lueur1   from './../assets/images/lueura.png';
import lueur2   from './../assets/images/lueurb.png';
import lueur3   from './../assets/images/lueurc.png';
import lueur4   from './../assets/images/lueurd.png';

// Components
import FrontImage from './common/FrontImage';
import FrontImageLarge from './common/FrontImageLarge';

class Main extends Component {
  render() {
    return <div className="container">
      <div className="content">
        <div className="main">
          <div className="row">
            <FrontImage imageUrl={cedric5} link="/current" text="Current"/>
            <FrontImage imageUrl={cedric3} link="/music" text="Music"/>
            <FrontImage imageUrl={cedric6} link="/releases" text="Releases"/>
            <FrontImage imageUrl={cedric2} link="/about" text="About"/>
            <FrontImage imageUrl={cedric} link="/courses" text="Courses"/>
            <FrontImage imageUrl={cedric4} link="/press" text="Press"/>
          </div>
        </div>
      </div>
    </div>
  }
}

// Main

export default Main;
