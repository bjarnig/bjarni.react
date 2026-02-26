import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import GoogleAnalytics from './components/GoogleAnalytics';
import './assets/css/app.css';
import './assets/css/style.css';
import './assets/css/custom.css';

// Import components directly
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

function NavMenuItem({ to, children, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} onClick={onClick}>{children}</Link>
    </li>
  );
}

function App() {
  const [menuDisplay, setMenuDisplay] = useState('none');

  const navbarToggleClick = () => {
    setMenuDisplay(prev => prev === 'none' ? 'block' : 'none');
  };

  const closeMenu = () => {
    setMenuDisplay('none');
  };

  return (
    <Router>
      <div>
        <GoogleAnalytics />
        <div>
          <div className="navbar navbar-fixed-top">
            <div className="container">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse" onClick={navbarToggleClick}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">bjarni gunnarsson</a>
                <div className="nav-collapse collapse">
                  <ul className="nav navbar-nav pull-right">
                    <NavMenuItem to="/current">current</NavMenuItem>
                    <NavMenuItem to="/music">works</NavMenuItem>
                    <NavMenuItem to="/releases">releases</NavMenuItem>
                    <NavMenuItem to="/courses">courses</NavMenuItem>
                    <NavMenuItem to="/about">about</NavMenuItem>
                  </ul>
                </div>
            </div>
            <div id="phonemenu" style={{ display: menuDisplay }}>
              <ul className="nav navbar-nav pull-right">
                <NavMenuItem to="/current" onClick={closeMenu}>current</NavMenuItem>
                <NavMenuItem to="/music" onClick={closeMenu}>works</NavMenuItem>
                <NavMenuItem to="/releases" onClick={closeMenu}>releases</NavMenuItem>
                <NavMenuItem to="/courses" onClick={closeMenu}>courses</NavMenuItem>
                <NavMenuItem to="/about" onClick={closeMenu}>about</NavMenuItem>
              </ul>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/music" element={<Music />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/live" element={<Live />} />
            <Route path="/mixes" element={<Mixes />} />
            <Route path="/visual" element={<Visual />} />
            <Route path="/excerpts" element={<Excerpts />} />
            <Route path="/current" element={<Current />} />
            <Route path="/past" element={<Past />} />
            <Route path="/releases" element={<Releases />} />
            <Route path="/code" element={<Code />} />
            <Route path="/writings" element={<Writings />} />
            <Route path="/press" element={<Press />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/paths" element={<Paths />} />
            <Route path="/processes" element={<Processes />} />
            <Route path="/pma" element={<Pma />} />
            <Route path="/pmb" element={<Pmb />} />
            <Route path="/cwa" element={<Cwa />} />
            <Route path="/workshops" element={<Workshops />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
