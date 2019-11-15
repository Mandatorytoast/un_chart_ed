import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

import '../index.js'


class SideNav extends React.Component {
  componentDidMount() {
    var element = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(element,{
      edge: "left",
      inDuration: 250
    });
  }
  render(){
    return (
      <div id="side-nav">
        <ul id="slide-out" className="sidenav">
          <li />
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>    
    )
  }
}

export default SideNav;
