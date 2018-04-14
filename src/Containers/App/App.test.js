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

  beforeEach (() => {
    wrapper = shallow(<App 
      postRecipes={mockpostRecipes} 
      logoutUser={mocklogoutUser}
      user={mockUser}
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
});

describe('mapStateToProps', () => {
  const state = {user: {email:'dog@gmail.com', uid: 24}};
  const expected = { email: 'dog@gmail.com', uid: 24 };
  const mapped = mapStateToProps(state);
  expect(mapped.user).toEqual(expected);
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
});
