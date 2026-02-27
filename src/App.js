import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import GoogleAnalytics from './components/GoogleAnalytics';
import './assets/css/app.css';
import './assets/css/style.css';
import './assets/css/custom.css';

// Lazy-loaded route components
const Current = lazy(() => import('./components/info/Current'));
const Past = lazy(() => import('./components/info/Past'));
const Index = lazy(() => import('./components/info/Index'));
const Music = lazy(() => import('./components/music/Music'));
const Collaborations = lazy(() => import('./components/music/Collaborations'));
const Code = lazy(() => import('./components/music/Code'));
const Writings = lazy(() => import('./components/music/Writings'));
const Live = lazy(() => import('./components/music/Live'));
const Mixes = lazy(() => import('./components/music/Mixes'));
const Excerpts = lazy(() => import('./components/music/Excerpts'));
const Visual = lazy(() => import('./components/music/Visual'));
const Releases = lazy(() => import('./components/info/Releases'));
const Press = lazy(() => import('./components/info/Press'));
const Paths = lazy(() => import('./components/info/Paths'));
const Processes = lazy(() => import('./components/info/Processes'));
const Courses = lazy(() => import('./components/courses/Courses'));
const About = lazy(() => import('./components/info/About'));
const Works = lazy(() => import('./components/info/Works'));
const Pma = lazy(() => import('./components/courses/PMA'));
const Pmb = lazy(() => import('./components/courses/PMB'));
const Cwa = lazy(() => import('./components/courses/CWA'));
const Workshops = lazy(() => import('./components/courses/Workshops'));

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
          <Suspense fallback={null}>
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
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
