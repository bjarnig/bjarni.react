import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';
import GoogleAnalytics from './components/GoogleAnalytics';
import './assets/css/app.css';
import './assets/css/style.css';
import './assets/css/custom.css';

// Import components directly for react-snap compatibility
import Current from './components/info/Current';
import Past from './components/info/Past';
import Index from './components/info/Index';
import Music from './components/music/Music';
import Collaborations from './components/music/Collaborations';
import Code from './components/music/Code';
import Writings from './components/music/Writings';
import Live from './components/music/Live';
import Mixes from './components/music/Mixes';
import Excerpts from './components/music/Excerpts';
import Visual from './components/music/Visual';
import Releases from './components/info/Releases';
import Press from './components/info/Press';
import Paths from './components/info/Paths';
import Processes from './components/info/Processes';
import Courses from './components/courses/Courses';
import About from './components/info/About';
import Works from './components/info/Works';
import Pma from './components/courses/PMA';
import Pmb from './components/courses/PMB';
import Cwa from './components/courses/CWA';
import Workshops from './components/courses/Workshops';

// let divStyle = {
//   display: 'none'
// };



class App extends React.Component {

 //  getNavLinkClass = (path) => {
 //   return this.props.location.pathname === path ? 'active' : '';
 // }

 state = {
  divStyle : {
    display: 'none'
  }
};

navbarToggleClick = () => {
 
  if(this.state.divStyle.display === 'none') {
    this.setState({
      divStyle : {
        display: 'block'
      }
    });
  } else {
    this.setState({
      divStyle : {
        display: 'none'
      }
    });
  }

}

render() {

    return (
      <Router>
        <div>
          <GoogleAnalytics />
          <div>
            <div className="navbar navbar-fixed-top">
              <div className="container">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse" onClick={this.navbarToggleClick}>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">bjarni gunnarsson</a>
                  <div className="nav-collapse collapse">
                    <ul className="nav navbar-nav pull-right">
                      <LinkContainer to="/current" activeClassName="active">
                        <NavItem>
                          current
                        </NavItem>
                      </LinkContainer>
                      <LinkContainer to="/music" activeClassName="active">
                        <NavItem>
                          works
                        </NavItem>
                      </LinkContainer>
                      <LinkContainer to="/releases" activeClassName="active">
                        <NavItem>
                          releases
                        </NavItem>
                      </LinkContainer>
                      <LinkContainer to="/courses" activeClassName="active">
                        <NavItem>
                          courses
                        </NavItem>
                      </LinkContainer>
                      <LinkContainer to="/about" activeClassName="active">
                        <NavItem>
                          about
                        </NavItem>
                      </LinkContainer>
                    </ul>
                  </div>
              </div>
              <div id="phonemenu" style={this.state.divStyle}>
                <ul className="nav navbar-nav pull-right">
                <LinkContainer to="/current" activeClassName="active" onClick={this.navbarToggleClick}>
                        <NavItem>
                          current
                        </NavItem>
                      </LinkContainer>
                      <LinkContainer to="/music" activeClassName="active" onClick={this.navbarToggleClick}>
                        <NavItem>
                          works
                        </NavItem>
                      </LinkContainer>
                      <LinkContainer to="/releases" activeClassName="active" onClick={this.navbarToggleClick}>
                        <NavItem>
                          releases
                        </NavItem>
                      </LinkContainer>
                      <LinkContainer to="/courses" activeClassName="active" onClick={this.navbarToggleClick}>
                        <NavItem>
                          courses
                        </NavItem>
                      </LinkContainer>
                      <LinkContainer to="/about" activeClassName="active" onClick={this.navbarToggleClick}>
                        <NavItem>
                          about
                        </NavItem>
                      </LinkContainer>
                </ul>
              </div>
            </div>
              <Route exact path="/" render={(props) => <Index {...props} />} />
              <Route path="/music" render={(props) => <Music {...props} />} />
              <Route path="/collaborations" render={(props) => <Collaborations {...props} />} />
              <Route path="/live" render={(props) => <Live {...props} />} />
              <Route path="/mixes" render={(props) => <Mixes {...props} />} />
              <Route path="/visual" render={(props) => <Visual {...props} />} />
              <Route path="/excerpts" render={(props) => <Excerpts {...props} />} />
              <Route path="/current" render={(props) => <Current {...props} />} />
              <Route path="/past" render={(props) => <Past {...props} />} />
              <Route path="/releases" render={(props) => <Releases {...props} />} />
              <Route path="/code" render={(props) => <Code {...props} />} />
              <Route path="/writings" render={(props) => <Writings {...props} />} />
              <Route path="/press" render={(props) => <Press {...props} />} />
              <Route path="/courses" render={(props) => <Courses {...props} />} />
              <Route path="/about" render={(props) => <About {...props} />} />
              <Route path="/works" render={(props) => <Works {...props} />} />
              <Route path="/paths" render={(props) => <Paths {...props} />} />
              <Route path="/processes" render={(props) => <Processes {...props} />} />
              <Route path="/pma" render={(props) => <Pma {...props} />} />
              <Route path="/pmb" render={(props) => <Pmb {...props} />} />
              <Route path="/cwa" render={(props) => <Cwa {...props} />} />
              <Route path="/workshops" render={(props) => <Workshops {...props} />} />
          </div>
        </div>
      </Router>
    )
  };
}



export default App;
