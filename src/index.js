import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';
//import Chart from 'react-apexcharts';
import 'materialize-css';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import Barchart from './components/barchart';
import Piechart from './components/piechart';
import Radarchart from './components/radar';

const routing = (
  <Router>
    <div className="container">
      <Route exact path="/" component={App} />
      <Route path="/bar" component={Barchart} />
      <Route path='/pie' component={Piechart} />
      <Route path='/radar' component={Radarchart} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
