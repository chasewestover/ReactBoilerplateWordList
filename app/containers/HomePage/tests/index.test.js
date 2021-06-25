/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { HomePage, mapDispatchToProps } from '../index';
// import { changeUsername } from '../actions';
import { loadWords } from '../../App/actions';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            loading={false}
            error={false}
            words={[]}
            populateWords={() => {}}
            onClickWord={() => {}}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch the words on mount', () => {
    const populateSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            loading={false}
            error={false}
            words={[]}
            populateWords={populateSpy}
            onClickWord={() => {}}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(populateSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onClickWords', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onClickWord).toBeDefined();
      });
    });

    describe('populateWords', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.populateWords).toBeDefined();
      });

      it('should dispatch loadWords when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.populateWords();
        expect(dispatch).toHaveBeenCalledWith(loadWords());
      });
    });
  });
});
