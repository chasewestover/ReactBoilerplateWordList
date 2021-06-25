import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addWord state domain
 */

const selectAddWordDomain = state => state.addWord || initialState;
/**
 * Default selector used by AddWord
 */

const makeSelectNewWord = () =>
  createSelector(
    selectAddWordDomain,
    substate => substate.newWord,
  );

const makeSelectValidation = () =>
  createSelector(
    selectAddWordDomain,
    substate => substate.validation,
  );

const makeSelectError = () =>
  createSelector(
    selectAddWordDomain,
    substate => substate.error,
  );

export {
  makeSelectError,
  makeSelectValidation,
  makeSelectNewWord,
  selectAddWordDomain,
};
