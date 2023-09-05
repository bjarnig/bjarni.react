import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, NavLink } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, MenuItem, NavItem } from 'react-bootstrap';
import SomeView from './views/view.js';
import logo from './logo.svg';
import Main from './components/Main';
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
import Lueur from './components/info/Lueur';
import Processes from './components/info/Processes';
import Courses from './components/courses/Courses';
import About from './components/info/About';
import Works from './components/info/Works';
import Pma from './components/courses/PMA';
import Pmb from './components/courses/PMB';
import Cwa from './components/courses/CWA';
import Workshops from './components/courses/Workshops';
// import Hydra from './assets/js/hydra-synth.js';

import './assets/css/style.css';
import './assets/css/custom.css';
import './assets/css/login.css';
import './assets/css/admin.css';
import './assets/css/app.css';
import './assets/css/main.css';

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
            <ul class="nav navbar-nav pull-right">
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
        <Route exact path="/" component={Index} />
        <Route path="/music" component={Music} />
        <Route path="/collaborations" component={Collaborations} />
        <Route path="/live" component={Live} />
        <Route path="/mixes" component={Mixes} />
        <Route path="/visual" component={Visual} />
        <Route path="/excerpts" component={Excerpts} />
        <Route path="/current" component={Current} />
        <Route path="/past" component={Past} />
        <Route path="/releases" component={Releases} />
        <Route path="/code" component={Code} />
        <Route path="/writings" component={Writings} />
        <Route path="/press" component={Press} />
        <Route path="/courses" component={Courses} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/paths" component={Paths} />
        <Route path="/processes" component={Processes} />
        <PrivateRoute path="/pma" component={Pma} />
        <PrivateRoute path="/pmb" component={Pmb} />
        <PrivateRoute path="/cwa" component={Cwa} />
        <PrivateRoute path="/workshops" component={Workshops} />
        <Route path="/login" component={Login} />
        </div>
      </Router>
    )
  };
}

const fakeAuth = {
  code: '',
  authenticate(code, cb) {
    this.code = code;
    setTimeout(cb, 1);
  },
  signout(cb) {
    this.code = '';
    setTimeout(cb, 1);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.code === 'success' ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class Login extends React.Component {

  state = {
    redirectTo : '',
    value : ''
  };

  login = () => {

    if(this.state.value === 'programming') {
        // fakeAuth.authenticate('success', () => {
        //     this.setState({ redirectTo: '/pma' });
        // });
    } else if(this.state.value === 'music') {
        fakeAuth.authenticate('success', () => {
            this.setState({ redirectTo: '/pmb' });
        });
    } else if(this.state.value === 'composing') {
        // fakeAuth.authenticate('success', () => {
        //     this.setState({ redirectTo: '/cwa' });
        // });
     } else if(this.state.value === 'workshop') {
      fakeAuth.authenticate('success', () => {
          this.setState({ redirectTo: '/workshops' });
      });
    } else {
        console.log('No login!');
     }
  };

  change = (e) => {
      this.setState({value : e.target.value});
  };

  render() {
    const { redirectTo } = this.state;

    if (redirectTo) {
      return <Redirect to={ redirectTo } />;
    }
    
    return (<div className="container">
        <div className="music">
            <h3>Access Course</h3>
            <div className="hr"><hr /></div>
              <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                      <label>Code</label>
                      <input type="text" className="form-control" value={this.state.value} onChange={this.change} />
                    </div>
                    <div>
                      <button className="btn btn-inverse btn-lg btn-login" onClick={this.login}>Log in</button>
                    </div>
                </div>
              </div>
        </div>
    </div>
    );
  }
}

export default App;
