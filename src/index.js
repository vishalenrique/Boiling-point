import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
}

function tryConvert(temperature,convert){
  temperature = parseFloat(temperature);
  if(Number.isNaN(temperature)){
    return '';
  }
  const output = convert(temperature);
  const finalResult = Math.round(output*1000)/1000;
  return finalResult.toString();
}

function toCelsius(fahrenheit){
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius){
  return (celsius * 9 / 5) + 32;
}


class TemperatureInput extends React.Component{
  handleChange=(e)=>{
    this.props.onTemperatureChange(e.target.value);
  }
  
  render(){
    const temperature = this.props.temperature;
    const scale = this.props.scale; 
    return(
      <fieldset>
        <legend>Enter the temperature in {scaleNames[scale]}</legend>
        <input value={temperature}
               onChange ={this.handleChange}/>
      </fieldset>
    );
  }
}

class Calculator extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      temperature:'',
      scale : 'c'
    };
  }

  handleCelsiusChange = (temperature) => {
    this.setState({
      scale:'c',
      temperature:temperature
    });
  }
  handlefahrenheitChange = (temperature) => {
    this.setState({
      scale:'f',
      temperature:temperature
    });
  }
  
  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale ==='f'?tryConvert(temperature,toCelsius):temperature;
    const fahrenheit = scale ==='c'?tryConvert(temperature,toFahrenheit):temperature; 

    return(
      <div>
      <TemperatureInput 
      temperature = {celsius}
      scale = "c"
      onTemperatureChange = {this.handleCelsiusChange}/>

       <TemperatureInput 
      temperature = {fahrenheit}
      scale = "f"
      onTemperatureChange = {this.handlefahrenheitChange}/>

      <BoilingPoint celsius = {celsius}/>
      </div>
    );
  }
}

function BoilingPoint(props){
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
  
  ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
  );
  