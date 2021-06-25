/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  ADD_WORD_SUCCESS,
  LOAD_WORDS,
  LOAD_WORDS_ERROR,
  LOAD_WORDS_SUCCESS,
  DELETE_WORD,
  DELETE_WORD_ERROR,
  DELETE_WORD_SUCCESS,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_WORDS
 */
export function loadWords() {
  return {
    type: LOAD_WORDS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} words List of words
 *
 * @return {object}      An action object with a type of LOAD_WORDS_SUCCESS passing the words
 */
export function wordsLoaded(words) {
  return {
    type: LOAD_WORDS_SUCCESS,
    words,
  };
}

/**
 * Dispatched when loading the words fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_WORDS_ERROR passing the error
 */
export function wordsLoadingError(error) {
  return {
    type: LOAD_WORDS_ERROR,
    error,
  };
}

// dispatches when a word successfully added to the backend
export function addWordSuccess(word) {
  return {
    type: ADD_WORD_SUCCESS,
    word,
  };
}

// dispatched when word added
export function deleteWord(id) {
  return {
    type: DELETE_WORD,
    id,
  };
}

// dispatch when adding a word fails
export function deleteWordSuccess(id) {
  return {
    type: DELETE_WORD_SUCCESS,
    id,
  };
}
// dispatch when adding a word fails
export function deleteWordError(err) {
  return {
    type: DELETE_WORD_ERROR,
    err,
  };
}
