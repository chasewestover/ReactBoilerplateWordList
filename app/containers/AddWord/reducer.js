/*
 *
 * AddWord reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_WORD,
  ADD_WORD_ERROR,
  VALIDATION_MESSAGE,
  RESET_FORM,
} from './constants';

export const initialState = {
  newWord: '',
  validation: '',
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const addWordReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_WORD:
        draft.newWord = action.word;
        draft.validation = '';
        break;
      case ADD_WORD_ERROR:
        break;
      case VALIDATION_MESSAGE:
        draft.validation = action.msg;
        break;
      case RESET_FORM:
        draft.validation = '';
        draft.newWord = '';
        break;
    }
  });

export default addWordReducer;
