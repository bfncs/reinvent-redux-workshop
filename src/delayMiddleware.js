export default store => next => action => {
  const { delay } = action;

  if (!delay) {
    return next(action);
  }

  console.info(`Delayed action for ${delay}ms`, action);
  setTimeout(() => next(action), action.delay);
};
