import  React,{Component}  from 'react';
import './index.css';

class TemperatureInput extends Component{
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

  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
  }

  export default TemperatureInput;