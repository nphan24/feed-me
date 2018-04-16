import { SignUp, mapStateToProps, mapDispatchToProps } from '../SignUp/SignUp';
import React from 'react';
import { shallow } from 'enzyme';
import * as mock from '../../mockData/mockData';
import * as Actions from '../../Actions';
import * as firebase from '../../firebase/auth';

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

  it('should call signUp on handlesubmit', () => {
    const event = { preventDefault: jest.fn() };
    
    firebase.signUp = jest.fn().mockImplementation(()=> Promise.resolve({
      email: 'dog@gmail.com', 
      uid: 24
    }));
    wrapper.instance().handleSubmit(event);
    expect(firebase.signUp).toHaveBeenCalled();
  });

  it('should call addUser in handleSubmit', () => {
    const event = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(event);
    const user = { email: 'dog@gmail.com', uid: 24, username: '' };

    expect(mockaddUser).toHaveBeenCalledWith(user);
  });

  it('should set state back to its default values', () => {
    const event = { preventDefault: jest.fn() };
    const expected = '';

    wrapper.setState(mock.mockSignupUser);
    wrapper.instance().handleSubmit(event);
    expect(wrapper.state('username')).toEqual(expected);
  });

  it('should call history.push with the correct params', () => {
    const event = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(event);
    expect(mockHistory.push).toHaveBeenCalledWith('/');
  });

  it('should set the state to the error message if firebase fails to retreive a user', async () => {
    const event = { preventDefault: jest.fn() };
    firebase.signUp = jest.fn().mockImplementation(() => Promise.reject('error')
    );
    await wrapper.instance().handleSubmit(event);
    await expect(wrapper.state('error')).toEqual('error');
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