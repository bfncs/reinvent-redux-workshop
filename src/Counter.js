import React, { Component } from 'react';
import reducer from './counterReducer';

class Counter extends Component {
  state = reducer(undefined, {});

  dispatch(action) {
    this.setState(prevState => reducer(prevState, action));
  }

  increment = () => {
    this.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.dispatch({ type: 'DECREMENT' });
  };

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
