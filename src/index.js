import React from 'react';
import ReactDOM from 'react-dom';
import connectedCounter from './connectedCounter';
import connectedBinaryDecision from './connectedBinaryDecision';
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

const ConnectedCounter = connectedCounter(store);
const ConnectedBinaryDecision = connectedBinaryDecision(store);

ReactDOM.render(
  <div>
    <ConnectedCounter />
    <ConnectedBinaryDecision />
  </div>,
  document.getElementById('root')
);
