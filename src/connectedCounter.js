import Counter from './Counter';
import connect from './connect';

export default store =>
  connect(store)(
    state => ({ value: state.counter.value }),
    dispatch => ({
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
    })
  )(Counter);
