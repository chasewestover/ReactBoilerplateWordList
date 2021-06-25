/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeLatest } from 'redux-saga/effects';
import addWordSaga, { watchAddWord } from '../saga';
import { addWordSuccess } from '../../App/actions';
import { addWordError } from '../actions';
import { ADD_WORD } from '../constants';

/* eslint-disable redux-saga/yield-effects */
describe('add word Saga', () => {
  let addWordGen;

  beforeEach(() => {
    addWordGen = addWordSaga();

    const selectDescriptor = addWordGen.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = addWordGen.next({ word: 'word' }).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the reposLoaded action if it requests the data successfully', () => {
    const response = {
      data: [
        {
          word: 'albatross',
          id: 1,
        },
        {
          word: 'bug',
          id: 2,
        },
      ],
    };
    const putDescriptor = addWordGen.next(response).value;
    expect(putDescriptor).toEqual(put(addWordSuccess(response.data)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = addWordGen.throw(response).value;
    expect(putDescriptor).toEqual(put(addWordError(response)));
  });
});

describe('watchAddWord Saga', () => {
  const watchAddWordGen = watchAddWord();

  it('should start task to watch for ADD_WORD action', () => {
    const takeLatestDescriptor = watchAddWordGen.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(ADD_WORD, addWordSaga));
  });
});
