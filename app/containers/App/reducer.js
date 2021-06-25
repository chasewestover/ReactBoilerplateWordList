/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_WORDS_SUCCESS,
  LOAD_WORDS,
  LOAD_WORDS_ERROR,
  ADD_WORD_SUCCESS,
  DELETE_WORD_ERROR,
  DELETE_WORD_SUCCESS,
  DELETE_WORD,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  words: [],
  deleteId: '',
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_WORDS:
        draft.loading = true;
        draft.error = false;
        draft.words = [];
        break;

      case LOAD_WORDS_SUCCESS:
        draft.words = action.words;
        draft.loading = false;
        break;

      case LOAD_WORDS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case ADD_WORD_SUCCESS:
        draft.words = [action.word, ...state.words];
        break;

      case DELETE_WORD:
        draft.deleteId = action.id;
        break;

      case DELETE_WORD_SUCCESS:
        draft.words = state.words.filter(w => w.id !== action.id);
        draft.deleteId = '';
        break;

      case DELETE_WORD_ERROR:
        draft.error = action.error;
        draft.loading = false;
        draft.deleteId = '';
        break;
    }
  });

export default appReducer;
