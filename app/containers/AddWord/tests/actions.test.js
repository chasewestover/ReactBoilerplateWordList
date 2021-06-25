import { addWord, changeWord } from '../actions';
import { ADD_WORD, CHANGE_WORD } from '../constants';

describe('AddWord actions', () => {
  describe('addWord', () => {
    it('should return the correct action', () => {
      const expected = {
        type: ADD_WORD,
        word: 'word',
      };
      expect(addWord('word')).toEqual(expected);
    });
  });
});

describe('changeWord actions', () => {
  describe('changeWord', () => {
    it('should return the correct action', () => {
      const expected = {
        type: CHANGE_WORD,
        word: 'word',
      };
      expect(changeWord('word')).toEqual(expected);
    });
  });
});
