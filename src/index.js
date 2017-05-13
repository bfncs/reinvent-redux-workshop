import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedCounter from './ConnectedCounter';
import createStore from './createStore';
import counterReducer from './counterReducer';
import './index.css';

const { getState, dispatch, subscribe } = createStore(counterReducer);

ReactDOM.render(
  <ConnectedCounter
    getState={getState}
    dispatch={dispatch}
    subscribe={subscribe}
  />,
  document.getElementById('root')
);
