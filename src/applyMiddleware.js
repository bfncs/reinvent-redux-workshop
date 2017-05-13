const compose = (...funcs) => arg => funcs.reduceRight((acc, f) => f(acc), arg);

export default (...middlewares) => createStore => (reducer, initialState) => {
  const store = createStore(reducer, initialState);
  const { getState, dispatch } = store;

  const chain = middlewares.map(middleware =>
    middleware({ getState, dispatch })
  );
  const chainedDispatch = compose(...chain)(dispatch);

  return { ...store, dispatch: chainedDispatch };
};
