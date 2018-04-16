import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import * as mock from '../../mockData/mockData';
import * as Actions from '../../Actions';
import { fetchRandomRecipes } from '../../Api/ApiCalls/fetchRandomRecipes';
import * as firebase from '../../firebase/auth';
jest.mock('../../Api/ApiCalls/fetchRandomRecipes');

describe('App', () => {
  let wrapper;
  let mockpostRecipes = jest.fn();
  let mocklogoutUser = jest.fn();
  let mockUser = {email:'dog.gmail.com', uid: 24};
  let mockHistory = {push: jest.fn()};
  let mockPromptSignIn = jest.fn();
  let mockError = 'Please sign in to view Favorites';

  beforeEach(() => {
    wrapper = shallow(<App 
      postRecipes={mockpostRecipes} 
      logoutUser={mocklogoutUser}
      promptSignIn={mockPromptSignIn}
      user={mockUser}
      error={mockError}
      history={mockHistory}
    />, {
      disableLifecycleMethods: false
    });
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchRandomRecipes', () => {
    expect(fetchRandomRecipes).toHaveBeenCalled();
  });

  it('should call postRecipes on componentDidMount', () => {
    expect(mockpostRecipes).toHaveBeenCalledWith(mock.recipes);
  });

  it('should call doSignOut on handleLogout', () => {
    firebase.doSignOut = jest.fn();
    wrapper.instance().handleLogout();
    expect(firebase.doSignOut).toHaveBeenCalled();
  });

  it('should call history.push with the correct params', () => {
    wrapper.instance().handleLogout();
    expect(mockHistory.push).toHaveBeenCalledWith('/');
  });

  it('should call logoutUser on handleLogout', () => {
    expect(mocklogoutUser).toHaveBeenCalled();
  });

  it('should call prompSignIn on handleFavorites', () => {
    wrapper.instance().handleFavorites();
    expect(mockPromptSignIn).toHaveBeenCalledWith(mockError);
  });
});

describe('mapStateToProps', () => {
  it('should map user to props', () => {
    const state = {user: {email:'dog@gmail.com', uid: 24}};
    const expected = { email: 'dog@gmail.com', uid: 24 };
    const mapped = mapStateToProps(state);
    expect(mapped.user).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with the correct params in postRecipes', () => {
    const mockDispatch = jest.fn();
    const recipe = mock.mockRecipe;
    const expected = Actions.postRecipes(recipe);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.postRecipes(recipe);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with the correct params in logoutUser', () => {
    const mockDispatch = jest.fn();
    const user = mock.mockUser;
    const expected = Actions.logoutUser(user);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logoutUser(user);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with the correct params in PromptSignIn', () => {
    const mockDispatch = jest.fn();
    const error = 'error';
    const expected = Actions.promptSignIn(error);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.promptSignIn(error);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
