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
      <div>
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
          <button className='btn'>slide</button>
        </a>
      </div>    
    )
  }
}

export default SideNav;
