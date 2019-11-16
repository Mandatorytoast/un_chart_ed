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
    this.inputEvent = this.inputEvent.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  inputEvent(e){
    let currentData = [ ...this.state.series[0].data];
    currentData[0] = parseInt(e.target.value)
    console.log(currentData);
    this.setState({
      series:[{
        ...this.state.series[0],
        data: currentData,
      }]
    });
  }


  renderInput(i) {
    return(
      <input type='text' name={i} onInput={this.inputEvent}/>
    )
  }

  handleInput(){
    let currentCategories = this.state.options.xaxis.categories;
    let currentData = this.state.series[0].data;
    currentCategories.push("New");
    currentData.push(0);
    this.setState({
      options: {
        ...this.state.options,
        xaxis:{
          categories: currentCategories,
        }
      },
      series: [{
        ...this.state.series,
        data: currentData,
      }]
    }) 
  }

  render() {
    return (
      <div className="row">
        <div className="col l8">
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
        </div>
        <div className="col l4">
          <div className="inputs">         
            {this.renderInput(0)}
            {this.renderInput(1)}
          </div>
          <div className="controls">
            <button className='btn' onClick={this.handleInput}>add</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Barchart;
