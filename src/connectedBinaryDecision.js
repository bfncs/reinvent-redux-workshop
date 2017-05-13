import BinaryDecision from './BinaryDecision';
import connect from './connect';

export default store =>
  connect(store)(
    state => ({ value: state.binaryDecision.value }),
    dispatch => ({ toggle: () => dispatch({ type: 'TOGGLE', delay: 2000 }) })
  )(BinaryDecision);
