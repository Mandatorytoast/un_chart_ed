import React from 'react';
import Chart from 'react-apexcharts';
import SideNav from './sidenav';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: {
        chart: {
          id: "Test Chart",
        },
        xaxis: {
          categories: ["Test", "Data"]
        }

      },
      series: [{
        name: "Series 1",
        data: [20, 30]
      }]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let current = this.state.series[0].data[0] + 20;
    this.setState({
      series: [{
        ...this.state.series[0],
        data: [current,30],
      }],
    });

  }

  render(){
    return (
      <div>
        <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
        <button class="waves-effect waves-light btn" onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

export default App;
