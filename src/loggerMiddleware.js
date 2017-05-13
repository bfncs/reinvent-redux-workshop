export default ({ getState }) => next => action => {
  console.group(action.type);
  console.info('DISPATCHING', action);
  const result = next(action);
  console.log('Next state', getState());
  console.groupEnd(action.type);
  return result;
};
