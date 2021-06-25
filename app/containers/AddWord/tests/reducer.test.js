import produce from 'immer';
import { CHANGE_WORD, VALIDATION_MESSAGE } from '../constants';
import addWordReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('addWordReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      newWord: '',
      validation: '',
      error: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(addWordReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle CHANGE_WORD correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.newWord = 'l';
      draft.validation = '';
    });

    expect(addWordReducer(state, { type: CHANGE_WORD, word: 'l' })).toEqual(
      expectedResult,
    );
  });

  it('should handle VALIDATION_ERROR_MESSAGE correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.validation = 'no';
    });

    expect(
      addWordReducer(state, { type: VALIDATION_MESSAGE, msg: 'no' }),
    ).toEqual(expectedResult);
  });
});
