export default (state = { value: true }, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { value: !state.value };
    default:
      return state;
  }
};
