import React, {Component} from 'react';
import './App.css';
import Circle from "./components/Circle/circle";

class App extends Component{
  state = {
    numbers: []
  };
  
  generateNewNums = () => {
    let array = [];
    
    for(let i = 0; i < 5;) {
      const number = Math.floor(Math.random() * (36 - 5 + 1) + 5);
      
      if(array.includes(number)) {
        continue;
      }
      else {
        array.push(number);
        i++
      }
    }
    
    array.sort((a,b) => {
      return a-b;
    });
    this.setState({
      numbers: array,
    })
  };
  
  render() {
    return (
      <div className="App">
      <div>
      <button className='btn' onClick={this.generateNewNums}>New Numbers</button>
      </div>
      {this.state.numbers.map(number=>{
        return <Circle number={number} />
      })}
      </div>
      );
    }
    
  }
  
  export default App;