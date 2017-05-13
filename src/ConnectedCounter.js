import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class ConnectedCounter extends Component {
  static propTypes = {
    getState: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.unsubscribe = this.props.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  render() {
    const { value } = this.props.getState();
    return (
      <Counter
        value={value}
        increment={this.increment}
        decrement={this.decrement}
      />
    );
  }
}

export default ConnectedCounter;
