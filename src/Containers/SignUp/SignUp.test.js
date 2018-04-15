import { SignUp, mapStateToProps, mapDispatchToProps } from '../SignUp/SignUp';
import React from 'react';
import { shallow } from 'enzyme';
import * as mock from '../../mockData/mockData';
import * as Actions from '../../Actions';
import * as firebase from '../../firebase/auth';
import { auth } from '../../firebase';
jest.mock('../../firebase');

describe('SignUp', () => {
  let wrapper;
  let mockUser = mock.mockUser;
  let mockaddUser = jest.fn();
  let mockHistory = {push: jest.fn()};

  beforeEach(()=> {
    wrapper = shallow(<SignUp
      user = {mockUser}
      addUser = {mockaddUser}
      history = {mockHistory}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set state on handleInput', () => {
    const mockEvent = { target: { value: 'dog@gmail', name: 'dog' } };
    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state('dog')).toEqual('dog@gmail');
  });

  it('should grab user information from firebase and create a new user with that information', () => {
    // const event = { preventDefault: jest.fn() };
    // firebase.login = jest.fn();
    // wrapper.instance().handleSubmit(event);
    // expect(firebase.signUp).toHaveBeenCalled();
  });

  it('should call addUser in handleSubmit', () => {

  });

  it('should set state back to its default values', () => {

  });

  it('should call history.push with the correct params', () => {
    // wrapper.instance().handleSubmit();
    // expect(mockHistory.push).toHaveBeenCalledWith('/');
  });

  it('should set the state to the error message if firebase fails to retreive a user', () => {

  });
});

describe('mapStateToProps', () => {
  it('correctly maps users to props ', () => {
    const user = mock.mockUser;
    const expected = user;
    const mockState = { user };
    const mapped = mapStateToProps(mockState);
    expect(mapped.user).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with correct params on addUser', () => {
    const mockDispatch = jest.fn();
    const user = mock.mockUser;
    const expected = Actions.addUser(user);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addUser(user);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});