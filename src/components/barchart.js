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
          categories: ['Example A', 'Example B', 'Example C'],
        }
      },
      series: [{
        name: "example-series",
        data: [22,33,44],
      }]
    }
    this.inputEvent = this.inputEvent.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLabelInput = this.handleLabelInput.bind(this);
    this.handleRemoveInput = this.handleRemoveInput.bind(this);
  }

  //Changes the data in real time as the user types into 
  //the data input boxes. 
  inputEvent(e){
    let currentData = [ ...this.state.series[0].data];
    let targetInt = parseInt(e.target.name)
    currentData[targetInt] = parseInt(e.target.value)
    this.setState({
      series:[{
        ...this.state.series[0],
        data: currentData,
      }]
    });
  }

  //Changes the Labels in real time as the user types into the
  //label input boxes
  handleLabelInput(e) {
    let currentData = [ ...this.state.options.xaxis.categories ];
    let targetLabel = parseInt(e.target.name.slice(5, e.target.name.length));
    currentData[targetLabel] = e.target.value;
    this.setState({
      options:{
        ...this.state.options,
        xaxis: {
          categories: currentData,
        } 
      }
    });
  }

  //Removes the row of inputs from the input area as well as
  //removing the label and data point in state which 
  //updates the graph in real time
  handleRemoveInput(e){
    let currentData = [ ...this.state.series[0].data ];
    let currentCategories = [ ...this.state.options.xaxis.categories ];
    let index = parseInt(e.target.id.slice(13, e.target.id.length));

    currentData.splice(index, 1);
    currentCategories.splice(index, 1)

    this.setState({
      options: {
        ...this.state.options,
        xaxis: {
          categories: currentCategories,
        },
      },
      series: [{
        ...this.state.series[0],
        data: currentData,
      }]
    });
    e.target.blur();

  }

  //Lpops through this.state.series[0].data.length and adds an input
  //row to the input area with a unique id and name for each. Also
  //sets the value for each of the inputs with the corrosponding state
  renderInput() { 
    let inputArray = []
    for (var i = 0; i < this.state.series[0].data.length; i++) {
      let dataValue = this.state.series[0].data[i]
      let labelValue = this.state.options.xaxis.categories[i]
      inputArray.push(
        <div className='row' key={'input' + i}>
          <div className='col m8'>
            <input type='text' name={'label' + i} value={labelValue} onChange={this.handleLabelInput}/>
          </div>
          <div className='col m3'> 
            <input type='number' name={i} onChange={this.inputEvent} value={dataValue}/>
          </div> 
          <div className='col m1'>
            <button className='btn waves-effect' id={'remove-button' + i} onClick={this.handleRemoveInput}>Remove</button> 
          </div>
        </div>
      )
    }
    return inputArray;
  }

  //Handler for the add button, adds an extra point of data to state and
  //a 'new' label to the end of categories
  handleInput(e){
    let currentCategories = [...this.state.options.xaxis.categories];
    let currentData = [...this.state.series[0].data];
    console.log(currentCategories)
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
    e.target.blur();
  }

  render() {
    return (
      <div className="chart">
        <h1>{this.props.type.toUpperCase()} Chart</h1>
        <div className="row">
          <div className="col l8">
            <div className="bar-chart">
              <div className="row">
                <div className="mixed-chart">
                  <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type={this.props.type}
                    width="700"
                  />
                </div>
              </div> 
            </div>
          </div>
          <div className="col l4">
            <div className="inputs">         
              <div className='row'>
                <div className= 'col m8'>
                  <h2>
                    Labels
                  </h2>
                </div>
                <div className= 'col m4'>
                  <h2>
                    Data
                  </h2>
                </div>
              </div>
              {this.renderInput()}
            </div>
            <div className="controls">
              <button className='btn waves-effect' onClick={this.handleInput}>add</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Barchart;
