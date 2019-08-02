import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DangerButton from './DangerButton';
import registerServiceWorker from './registerServiceWorker';

// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render((
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>
// ))

ReactDOM.render(<App />, document.getElementById('root'));

// registerServiceWorker();
