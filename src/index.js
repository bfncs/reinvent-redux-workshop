import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedCounter from './ConnectedCounter';
import ConnectedBinaryDecision from './ConnectedBinaryDecision';
import createStore from './createStore';
import combineReducers from './combineReducers';
import counterReducer from './counterReducer';
import binaryDecisionReducer from './binaryDecisionReducer';
import './index.css';

const rootReducer = combineReducers({
  counter: counterReducer,
  binaryDecision: binaryDecisionReducer,
});
const { getState, dispatch, subscribe } = createStore(rootReducer);

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
