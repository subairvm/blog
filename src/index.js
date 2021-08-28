import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter, Router} from 'react-router-dom'
import Service from './About';
import Contact from './Contact';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


