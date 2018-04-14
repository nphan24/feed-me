import userReducer from './userReducer';
import * as Actions from '../Actions/';
import * as mock from '../mockData/mockData';

describe('userReducer', () => {
  it('should return a default state', () => {
    const expected = {};
    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('should add a user to state', () => {
    const expected = mock.mockUser;
    const user = mock.mockUser;
    expect(userReducer(undefined, Actions.addUser(user))).toEqual(expected);
  });

  it('should log out the user', () => {
    const state = mock.mockUserArray;
    const user = mock.mockUser;
    const expected = {};
    expect(userReducer(state, Actions.logoutUser(user))).toEqual(expected);
  });
});
