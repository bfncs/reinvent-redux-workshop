import { Component, createElement } from 'react';
import { storeShape } from './StoreProvider';

export default (mapStateToProps, mapDispatchToProps) => childComponent =>
  class Connected extends Component {
    static contextTypes = {
      store: storeShape,
    };
    componentDidMount() {
      this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    render() {
      const { getState, dispatch } = this.context.store;
      return createElement(childComponent, {
        ...mapStateToProps(getState()),
        ...mapDispatchToProps(dispatch),
      });
    }
  };
