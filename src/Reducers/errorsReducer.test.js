import errorReducer from './errorsReducer';
import { promptSignIn } from '../Actions';

describe('errorReducer', () => {
  it('should return a default state', () => {
    const expected = false;
    expect(errorReducer(undefined, {})).toEqual(expected);
  });

  it('should return an error to prompt sign in', () => {
    const error = 'please sign in to add favorites';
    const expected = 'please sign in to add favorites';
    expect(errorReducer(undefined, promptSignIn(error))).toEqual(expected);
  });
});
