import { Component, createElement } from 'react';

export default ({ getState, dispatch, subscribe }) => (
  mapStateToProps,
  mapDispatchToProps
) => childComponent =>
  class Connected extends Component {
    componentDidMount() {
      this.unsubscribe = subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    render() {
      return createElement(childComponent, {
        ...mapStateToProps(getState()),
        ...mapDispatchToProps(dispatch),
      });
    }
  };
