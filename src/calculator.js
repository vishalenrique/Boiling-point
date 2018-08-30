import  React,{Component} from 'react';
import './index.css';
import  TemperatureInput from './temperature-input';
import  BoilingPoint from './boiling-point';

class Calculator extends Component{

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

  export default Calculator;

