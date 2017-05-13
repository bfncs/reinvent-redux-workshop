import reducer from './binaryDecisionReducer';

describe('binary decision reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ value: true });
  });

  it('should toggle the value on TOGGLE action', () => {
    const state = { value: true };
    const action = { type: 'TOGGLE' };
    expect(reducer(state, action)).toEqual({ value: false });
  });
});
