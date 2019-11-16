import React from 'react';
import {Link} from 'react-router-dom';

//TODO Change images to actual working examples of the graphs
//TODO fix images on medium sized screens

class App extends React.Component {
  render(){
    return (
      <div id="app">
        <h1>un_chart_ed</h1>
        <div className="intro-block">
          <p>
            Welcome to the simplest chart maker on the internet.<br />
            Choose the type of chart you would like to create below to get started.
            <br />
          </p>
          <div className="row">
            <div className="col s12 m12 l4">
              <Link to='/bar'>
                <div className="s">
                  <img src="https://sharepoint.github.io/sp-dev-fx-controls-react/assets/BarChart.png" alt="bar chart" />
                  <h2>bar</h2>
                </div>
              </Link>
            </div>
            <div className="col s12 m12 l4">
              <Link to="/test">
                <div className="s">
                  <img src="https://www.excel-easy.com/examples/images/line-chart/line-chart.png" alt="line chart" />
                  <h2>line</h2>
                </div>
              </Link>
            </div>
            <div className="col s12 m12 l4">
              <Link to="/test">
                <div className="s">
                  <img src="https://1.bp.blogspot.com/-nyrFCBD1qQM/WZEoxmDoW-I/AAAAAAAAQew/LLIM0FtNdzQb3IRvtoTYgWpvKoajz6HJgCLcBGAs/s1600/Angular%2B4%2B%2Bpie%2Bchart%2Bexample.png" alt="pie chart"/>
                  <h2>pie</h2>
                </div>
              </Link>
            </div>
          </div>
          <p>
            For even more options, click the hamburger menu icon at the top left of the page.<br />
            Alternatively, on mobile, just swipe from the left.
          </p>
        </div>

      </div>
    )
  }
}

export default App;
