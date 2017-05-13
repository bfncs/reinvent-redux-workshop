import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BinaryDecision from './BinaryDecision';

class ConnectedBinaryDecision extends Component {
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
    this.props.dispatch({ type: 'TOGGLE', delay: 2000 });
  };

  render() {
    const { binaryDecision: { value } } = this.props.getState();
    return <BinaryDecision value={value} toggle={this.increment} />;
  }
}

export default ConnectedBinaryDecision;
