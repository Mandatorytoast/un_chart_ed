import React from 'react';
import Chart from 'react-apexcharts';

class Barchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        colors: ["#FA255e"],
        chart: {
          id: "example bar",
        },
        xaxis: {
          categories: ["example 1", "example 2"],
        }
      },
      series: [{
        name: "example-series",
        data: [20, 30],
      }]
    }
  }
  render() {
    return (
      <div className="bar-chart">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div> 
      </div>
    )
  }
}

export default Barchart;
