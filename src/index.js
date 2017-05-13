import React from 'react';
import ReactDOM from 'react-dom';
import StoreProvider from './StoreProvider';
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

ReactDOM.render(
  <StoreProvider store={store}>
    <div>
      <ConnectedCounter />
      <ConnectedBinaryDecision />
    </div>
  </StoreProvider>,
  document.getElementById('root')
);
