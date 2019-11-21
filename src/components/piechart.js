import React from 'react';
import Chart from 'react-apexcharts';

class Piechart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        labels: ['Example A', 'Example B', 'Example C'],
        theme:{
          monochrome:{
            enabled: true,
            color: '#FA244E'
          }
        }
      },

      series: [22,33,44],
    }

    this.handleInput = this.handleInput.bind(this);
    this.inputEvent = this.inputEvent.bind(this);
    this.handleLabelInput = this.handleLabelInput.bind(this);
    this.handleRemoveInput = this.handleRemoveInput.bind(this);
  }
    

  //Changes the data in real time as the user types into 
  //the data input boxes. 
  inputEvent(e){
    let currentData = [ ...this.state.series];
    let targetInt = parseInt(e.target.name);
    if (isNaN(parseInt(e.target.value))){
      currentData[targetInt] = 0;
    } else {
      if (parseInt(e.target.value.slice(0, 1)) === 0){
        currentData[targetInt] = parseInt(e.target.value.slice(1, e.target.value.length));
        e.target.value = currentData[targetInt];
      }else {
        currentData[targetInt] = parseInt(e.target.value);
      }
    }
    this.setState({
      series: currentData,
    });
  }
    

  //Changes the Labels in real time as the user types into the
  //label input boxes
  handleLabelInput(e) {
    let currentData = [ ...this.state.options.labels ];
    let targetLabel = parseInt(e.target.name.slice(5, e.target.name.length));
    currentData[targetLabel] = e.target.value;
    this.setState({
      options:{
        ...this.state.options,
        labels: currentData,
      }
    });
  }


  //Removes the row of inputs from the input area as well as
  //removing the label and data point in state which 
  //updates the graph in real time
  handleRemoveInput(e){
    let currentData = [ ...this.state.series];
    let currentCategories = [ ...this.state.options.labels ];
    let index = parseInt(e.target.id.slice(13, e.target.id.length));
    currentData.splice(index, 1);
    currentCategories.splice(index, 1)
    this.setState({
      options: {
        ...this.state.options,
        labels: currentCategories,
      },
      series: currentData,
    });
    e.target.blur()

  }

  //Loops through this.state.series.length and adds an input
  //row to the input area with a unique id and name for each. Also
  //sets the value for each of the inputs with the corrosponding state
  renderInput() { 
    let inputArray = []
    for (var i = 0; i < this.state.series.length; i++) {
      let dataValue = this.state.series[i];
      let labelValue = this.state.options.labels[i];
      inputArray.push(
        <div className='row' key={'input' + i}>
          <div className='col m8'>
            <input type='text' name={'label' + i}  value={labelValue} onChange={this.handleLabelInput}/>
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
    

  handleInput(e){
    let currentCategories = this.state.options.labels;
    let currentData = this.state.series;
    currentCategories.push("New");
    currentData.push(0);
    this.setState({
      ...this.state.options,
      options: {
        labels: currentCategories,
      },
      series: currentData,
    }) 
    e.target.blur();
  }

  render() {
    return (
      <div className="chart">
        <h1>Bar Chart</h1>
        <div className="row">
          <div className="col l8">
            <div className="bar-chart">
              <div className="row">
                <div className="mixed-chart">
                  <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="pie"
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

export default Piechart;
