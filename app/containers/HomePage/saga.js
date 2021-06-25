/**
 * Gets the list of words
 */

import {
  call,
  put,
  takeLatest,
  select,
  takeEvery,
  all,
} from 'redux-saga/effects';
import { LOAD_WORDS, DELETE_WORD } from 'containers/App/constants';
import {
  wordsLoaded,
  wordsLoadingError,
  deleteWordError,
  deleteWordSuccess,
} from 'containers/App/actions';
import axios from 'axios';
import { makeSelectDeleteId } from 'containers/App/selectors';

/**
 * Words request/response handler
 */

export function* getWords() {
  try {
    const result = yield call(axios.get, '/api/words');
    yield put(wordsLoaded(result.data));
  } catch (err) {
    yield put(wordsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* watchGetWords() {
  yield takeLatest(LOAD_WORDS, getWords);
}

export function* deleteWordSaga() {
  const id = yield select(makeSelectDeleteId());
  try {
    const result = yield call(axios.delete, `/api/words/${id}`);
    // delete the word from the backend
    yield put(deleteWordSuccess(result.data[0].id));
  } catch (err) {
    yield put(deleteWordError(err));
  }
}

export function* watchDeleteWord() {
  yield takeEvery(DELETE_WORD, deleteWordSaga);
}

export default function* rootSaga() {
  yield all([watchDeleteWord(), watchGetWords()]);
}
