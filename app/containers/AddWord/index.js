/**
 *
 * AddWord
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Redirect } from 'react-router-dom';
import {
  makeSelectError,
  makeSelectNewWord,
  makeSelectValidation,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  changeWord,
  resetForm,
  validateAndSubmit,
  validationMessage,
} from './actions';
import Input from './Input';
import Button from './Button';
import CenteredSection from './CenteredSection';

export function AddWord({
  resetFormData,
  newWord,
  validation,
  onChangeWord,
  onSubmitForm,
}) {
  useInjectReducer({ key: 'addWord', reducer });
  useInjectSaga({ key: 'addWord', saga });

  if (validation === 'success') {
    resetFormData();
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Helmet>
        <title>AddWord</title>
        <meta name="description" content="Description of AddWord" />
      </Helmet>
      <CenteredSection>
        <h1>Add a word here</h1>
        <form onSubmit={onSubmitForm}>
          <Input val={newWord} onChange={onChangeWord} />
          <Button primary type="submit">
            Submit
          </Button>
        </form>
        {validation && <div>{validation}</div>} 
      </CenteredSection>
    </div>
  );
}

AddWord.propTypes = {
  newWord: PropTypes.string,
  validation: PropTypes.string,
  onChangeWord: PropTypes.func,
  onSubmitForm: PropTypes.func,
  resetFormData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  addWord: makeSelectNewWord(),
  validation: makeSelectValidation(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeWord: evt => {
      dispatch(changeWord(evt.target.value));
      dispatch(validationMessage(''));
    },
    onSubmitForm: evt => {
      evt.preventDefault();
      dispatch(validateAndSubmit());
    },
    resetFormData: () => {
      dispatch(resetForm());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddWord);
