/*
 *
 * AddWord actions
 *
 */

import {
  ADD_WORD,
  ADD_WORD_ERROR,
  CHANGE_WORD,
  RESET_FORM,
  VALIDATE_AND_SUBMIT,
  VALIDATION_MESSAGE,
} from './constants';

// dispatched when word added
export function changeWord(word) {
  return {
    type: CHANGE_WORD,
    word,
  };
}

// dispatched when word added
export function addWord(word) {
  return {
    type: ADD_WORD,
    word,
  };
}

// dispatch when adding a word fails
export function addWordError(error) {
  return {
    type: ADD_WORD_ERROR,
    error,
  };
}

// dispatch to validate and submit
export function validateAndSubmit() {
  return {
    type: VALIDATE_AND_SUBMIT,
  };
}

// dispatch when changing validation message
export function validationMessage(msg) {
  return {
    type: VALIDATION_MESSAGE,
    msg,
  };
}

// reset form data
export function resetForm() {
  return {
    type: RESET_FORM,
  };
}
