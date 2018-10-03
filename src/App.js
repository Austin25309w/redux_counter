import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  

  increment = () => {
    this.props.dispatch({type: "INCREMENT"})
  }

  decrement = () => {
    this.props.dispatch({type: "DECREMENT"})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Counter</h1> 
          <h2>{this.props.count}</h2>
          <p>
            
           <button
            onClick = {this.increment}
           > + </button>
           <button
            onClick = {this.decrement}
           > - </button>
          </p>
          
        </header>
      </div>
    );
  }
}

function ReduxStateputinReactProps(state){
  return {
    count: state.count
  }
}

export default connect(ReduxStateputinReactProps)(App);
