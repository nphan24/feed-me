import React from 'react';
import {Login, mapStateToProps, mapDispatchToProps} from './Login';
import { shallow } from 'enzyme';
import * as mock from '../../mockData/mockData';
import * as Actions from '../../Actions';
import * as firebase from '../../firebase/auth';

describe('Login', () => {
  let wrapper;
  let mockaddUser;
  let mockUser = mock.mockUser;
  let mockHistory = { push: jest.fn() };

  beforeEach(() => {
    mockaddUser = jest.fn();

    wrapper = shallow(
      <Login 
        addUser = {mockaddUser}
        user = {mockUser}
        history= {mockHistory}
      />
    );
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on input change', () => {
    const mockEvent = { target: { value: 'dog@gmail', name: 'dog'}};
    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state('dog')).toEqual('dog@gmail');
  });

  it('should call login on handleSubmit', () => {
    const event = { preventDefault: jest.fn() };

    firebase.login = jest.fn().mockImplementation(() => Promise.resolve({ 
      email:'dog@gmail.com', 
      password: 'dddddd', 
      uid: 24
    }));
    wrapper.instance().handleSubmit(event);
    expect(firebase.login).toHaveBeenCalled();
  });

  it('should call addUser on handleSubmit', async () => {
    const event = { preventDefault: jest.fn() };

    await wrapper.instance().handleSubmit(event);
    const user = { email: 'dog@gmail.com', password: 'dddddd', uid: 24 };

    expect(mockaddUser).toHaveBeenCalledWith(user);
  }); 

  it('should set state back to its default state', () => {
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

  it('should state the state to an error if the login to firebase fails', async () => {
    const event = { preventDefault: jest.fn() };

    firebase.login = jest.fn().mockImplementation(() => Promise.reject('error')
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