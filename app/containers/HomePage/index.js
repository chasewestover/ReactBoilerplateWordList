/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectWords,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Ul from './Ul';
import { deleteWord, loadWords } from '../App/actions';
import saga from './saga';
import Loading from '../../components/Loading';
import Section from '../AddWord/Section';

export function HomePage({
  words,
  loading,
  error,
  populateWords,
  onClickWord,
}) {
  useInjectSaga({ key: 'home', saga });

  useEffect(() => {
    if (words.length === 0) {
      populateWords();
    }
  }, []);

  return (
    <article>
      <Helmet>
        <title>Word List</title>
      </Helmet>
      <Section style={{ width: '60%' }}>
        <h1>It's a list of words!</h1>
        <h4>Click on a word to remove it</h4>
        {loading ? (
          <Loading />
        ) : (
          <Ul>
            {words.length > 0 &&
              words.map(w => (
                <li onClick={() => onClickWord(w.id)} key={w.id}>
                  {w.word}
                </li>
              ))}
          </Ul>
        )}
        {error && <div>Something went wrong</div>}
      </Section>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  words: PropTypes.array,
  populateWords: PropTypes.func,
  onClickWord: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  words: makeSelectWords(),
});

export function mapDispatchToProps(dispatch) {
  return {
    populateWords: () => dispatch(loadWords()),
    onClickWord: id => dispatch(deleteWord(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
