import { makeSelectNewWord, selectAddWordDomain } from '../selectors';

describe('selectAddWord', () => {
  it('should select the AddWord state', () => {
    const addWord = {
      data: {},
    };
    const mockedState = {
      addWord,
    };
    expect(selectAddWordDomain(mockedState)).toEqual(addWord);
  });
});

describe('makeSelectNewWord', () => {
  const newWordSelector = makeSelectNewWord();
  it('should select the new word', () => {
    const newWord = 'reggie';
    const mockedState = {
      addWord: {
        newWord,
      },
    };
    expect(newWordSelector(mockedState)).toEqual(newWord);
  });
});
