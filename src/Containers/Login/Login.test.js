import React from 'react';
import {Login, mapStateToProps, mapDispatchToProps} from './Login';
import { shallow } from 'enzyme';
import * as mock from '../../mockData/mockData';
import * as Actions from '../../Actions';
import { auth } from '../../firebase';

describe('Login', () => {
  let wrapper;
  let mockaddUser;

  beforeEach(() => {
    mockaddUser = jest.fn();

    wrapper = shallow (
      <Login 
        addUser = {mockaddUser}
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

  // it('should call addUser on handleSubmit', async () => {
  //   const event = { preventDefault: jest.fn() };
  //   await wrapper.instance().handleSubmit(event);
  //   expect(mockaddUser).toHaveBeenCalled();
  // });
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