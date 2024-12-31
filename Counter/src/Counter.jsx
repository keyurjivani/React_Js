import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment} style={{ margin: '5px', padding: '10px 20px' }}>
          Increment
        </button>
        <button onClick={this.decrement} style={{ margin: '5px', padding: '10px 20px' }}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
