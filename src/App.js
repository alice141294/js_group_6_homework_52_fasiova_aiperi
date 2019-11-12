import React, {Component} from 'react';
import './App.css';
import Circle from "./components/Circle/circle";

class App extends Component{
  state = {
    numbers: []
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