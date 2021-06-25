import axios from 'axios';
import {
  call,
  put,
  select,
  takeEvery,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { addWordSuccess } from '../App/actions';
import { addWord, addWordError, validationMessage } from './actions';
import { VALIDATE_AND_SUBMIT, ADD_WORD } from './constants';
import { makeSelectNewWord } from './selectors';

export function* addWordSaga() {
  const word = yield select(makeSelectNewWord());
  try {
    const result = yield call(axios.post, '/api/words', {
      word,
    });
    // add the new word to the global words state
    yield put(addWordSuccess(result.data));
    yield put(validationMessage('success'));
  } catch (err) {
    yield put(addWordError(err));
  }
}

export function* watchAddWord() {
  yield takeLatest(ADD_WORD, addWordSaga);
}

export function* validateAndSubmitSaga() {
  const newWord = yield select(makeSelectNewWord());
  if (newWord === '') {
    yield put(validationMessage('New word must have at least one character'));
  } else if (/ /.test(newWord)) {
    yield put(validationMessage('Please enter a single word!'));
  } else {
    yield put(addWord(newWord));
  }
}

export function* watchValidateAndSubmit() {
  yield takeEvery(VALIDATE_AND_SUBMIT, validateAndSubmitSaga);
}

// Individual exports for testing
export default function* rootSaga() {
  yield all([watchAddWord(), watchValidateAndSubmit()]);
}
