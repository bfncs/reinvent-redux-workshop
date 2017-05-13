import { Component, Children } from 'react';
import PropTypes from 'prop-types';

export const storeShape = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired,
});

class StoreProvider extends Component {
  static propTypes = {
    store: storeShape.isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = {
    store: storeShape.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.store = props.store;
  }

  getChildContext() {
    return { store: this.store };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default StoreProvider;
