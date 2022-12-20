import React from "react";
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import OutputScreenRow from "./outputScreenRow.js";


const endsWithOperator = /[*+/]+$/;
const endsWithNegative = /[-]$/;
const endsWithNegativeSign = /\d[*/+‑]{1}‑$/;

class Calculator extends React.Component {
    constructor() {
        super();
    
        this.state = {
        input: '',
        output: '0',
        decimalClicked: false,
        operatorClicked: false,
        equalsPressed: false, 
        result: ''
        }
    
        // Bind our handleNumbers method (sets 'this' explicitly
        // to refer to this component) We did this because 'this'
        // would refer to the source of the click events
        //this.handleNumbers = this.handleNumbers.bind(this);
    }

    handleOperator = (e) => {
        this.setState({decimalClicked: false});
        let currentOperator = e.target.value;
    if(this.state.equalsPressed === true){
        this.setState({input: this.state.result.concat(' '  + currentOperator), output: this.state.result.concat(currentOperator), equalsPressed: false, operatorClicked:true});
    }else if(this.state.operatorClicked === false)
      {
        this.setState({input: this.state.input.concat(' ' + currentOperator), output: this.state.input.concat(' ' + currentOperator), operatorClicked: true});
      }
    
    else if(endsWithNegative.test(this.state.input)){
        let displayWithoutLastTwoOperators = this.state.input.substring(0,this.state.input.length-3);
        this.setState({input: displayWithoutLastTwoOperators + ' ' + e.currentTarget.value, output: e.currentTarget.value, operatorClicked: true});
    }
    
    else if(endsWithOperator.test(this.state.input)){
        if(currentOperator === "-"){
          this.setState({input: this.state.input.concat(' ' + currentOperator), output: currentOperator, operatorClicked: true});
        } 
        else{
            let displayWithoutLastOperator = this.state.input.substring(0,this.state.input.length-1);
            this.setState({input: displayWithoutLastOperator + ' ' + e.currentTarget.value, output: e.currentTarget.value, operatorClicked: true});
        }
      }
    }
    handleDecimal = () => {
        if(this.state.decimalClicked === false){ 
            this.setState({input: this.state.input.concat('.'), output: this.state.input.concat('.'), decimalClicked: true});
        }

    }

    handleClear = () =>{
        this.setState({ input: '', output: '0', decimalClicked: false, operatorClicked: false, equalsPressed: false, result: ''});
    }

    handleEquals = () =>{
        var ans= '';
        ans = eval(this.state.input).toString();
        this.setState({input: '', output: ans, decimalClicked: false, equalsPressed: true, operatorClicked: false, result: ans});
    }
    // method to handle all click events from our buttons
    handleNumbers = (event) => { //fix this methodd
        this.setState({operatorClicked: false});
        const value = event.target.value;
        if(this.state.input==='' || this.state.input==='0'){
        this.setState({input: value, output: value});
        } else{
        this.setState({input: this.state.input.concat(value), output: this.state.input.concat(value)});
        }
    }  

    render()
    {
        return (
            <div className="frame">
                <CalculatorTitle value="Javascript Calculator" id="title"/>
                <div className='mainCalc' id="main-calc">
                    <div className="screen">
                        <OutputScreenRow className="screen-row" value={this.state.input}/>
                        <OutputScreen id="display" output={this.state.output}/>
                    </div>
                    
                    <div className="btn-grid">
                        <button onClick={this.handleClear} id="clear" value={'Clear'} className="btn-color-purple">Clear</button>
                        <button onClick={this.handleOperator} id="divide" value={'/'} className="btn-color-red">/</button>
                        <button onClick={this.handleOperator} id="multiply" value={'*'} className="btn-color-red">*</button>
                        <button onClick={this.handleNumbers} id="seven" value={'7'} className="btn-color-black">7</button>
                        <button onClick={this.handleNumbers} id="eight" value={'8'} className="btn-color-black">8</button>
                        <button onClick={this.handleNumbers} id="nine" value={'9'} className="btn-color-black">9</button>
                        <button onClick={this.handleOperator} id="subtract" value={'-'} className="btn-color-red">-</button>
                        <button onClick={this.handleNumbers} id="four" value={'4'} className="btn-color-black">4</button>
                        <button onClick={this.handleNumbers} id="five" value={'5'} className="btn-color-black">5</button>
                        <button onClick={this.handleNumbers} id="six" value={'6'} className="btn-color-black">6</button>
                        <button onClick={this.handleOperator} id="add" value={'+'} className="btn-color-red">+</button>
                        <button onClick={this.handleNumbers} id="one" value={'1'} className="btn-color-black">1</button>
                        <button onClick={this.handleNumbers} id="two" value={'2'} className="btn-color-black">2</button>
                        <button onClick={this.handleNumbers} id="three" value={'3'} className="btn-color-black">3</button>
                        <button onClick={this.handleNumbers} id="zero" value={'0'} className="btn-color-black">0</button>
                        <button onClick={this.handleDecimal} id="decimal" value={'.'} className="btn-color-grey">.</button>
                        <button onClick={this.handleEquals} id="equals" value={'='} className="btn-color-orange">=</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;