import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import createStore from './createStore';
import counterReducer from './counterReducer';
import './index.css';

const { getState, dispatch, subscribe } = createStore(counterReducer);

ReactDOM.render(
  <Counter getState={getState} dispatch={dispatch} subscribe={subscribe} />,
  document.getElementById('root')
);
