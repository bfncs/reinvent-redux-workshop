import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedCounter from './ConnectedCounter';
import ConnectedBinaryDecision from './ConnectedBinaryDecision';
import createStore from './createStore';
import combineReducers from './combineReducers';
import applyMiddleware from './applyMiddleware';
import delay from './delayMiddleware';
import logger from './loggerMiddleware';
import counterReducer from './counterReducer';
import binaryDecisionReducer from './binaryDecisionReducer';
import './index.css';

const storeCreator = applyMiddleware(delay, logger);
const rootReducer = combineReducers({
  counter: counterReducer,
  binaryDecision: binaryDecisionReducer,
});

const store = storeCreator(createStore)(rootReducer);
const { getState, dispatch, subscribe } = store;

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
