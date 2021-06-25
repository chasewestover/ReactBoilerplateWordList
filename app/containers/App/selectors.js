import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectGlobal = state => state.global || initialState;

const makeSelectWords = () =>
  createSelector(
    selectGlobal,
    state => state.words,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectDeleteId = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.deleteId,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  makeSelectWords,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectDeleteId,
};
