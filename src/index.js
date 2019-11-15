import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';
//import Chart from 'react-apexcharts';
import 'materialize-css';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import SideNav from './components/sidenav';
import Test from './components/test';
import Barchart from './components/barchart';

const routing = (
  <Router>
    <SideNav />
    <div className="container">
      <Route exact path="/" component={App} />
      <Route path="/test" component={Test} />
      <Route path="/bar" component={Barchart} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
