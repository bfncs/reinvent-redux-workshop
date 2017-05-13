import reducer from './counterReducer';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ value: 0 });
  });

  it('should increment the value on INCREMENT action', () => {
    const state = { value: 0 };
    const action = { type: 'INCREMENT' };
    expect(reducer(state, action)).toEqual({ value: 1 });
  });

  it('should decrement the value on DECREMENT action', () => {
    const state = { value: 0 };
    const action = { type: 'DECREMENT' };
    expect(reducer(state, action)).toEqual({ value: -1 });
  });
});
