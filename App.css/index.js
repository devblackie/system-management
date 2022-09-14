import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from '../src/constants/App';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <Router>
    <App />
  </Router>
);


