import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedCounter from './ConnectedCounter';
import ConnectedBinaryDecision from './ConnectedBinaryDecision';
import createStore from './createStore';
import counterReducer from './counterReducer';
import './index.css';

const { getState, dispatch, subscribe } = createStore(counterReducer);

ReactDOM.render(
  <div>
    <ConnectedCounter
      getState={getState}
      dispatch={dispatch}
      subscribe={subscribe}
    />
    <ConnectedBinaryDecision
      getState={getState}
      dispatch={dispatch}
      subscribe={subscribe}
    />
  </div>,
  document.getElementById('root')
);
