import React, { Component } from 'react';
import * as routes from '../../constants/routes';
import { Route, NavLink, withRouter } from 'react-router-dom';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: false
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <p>This is the login page</p>
        <form>
          <label>
            <input
              type='text'
              placeholder='Username'
              value={this.state.username}
              name='username'
              onChange={this.handleInput}
            />
            <input
              type='password'
              placeholder='Password'
              value={this.state.password}
              name='password'
              onChange={this.handleInput}
            />
            <button>Submit</button>
          </label>
        </form>
        <NavLink to={routes.SIGN_UP} className="signin-route">
        Don't have an account? Sign Up!
        </NavLink>
      </div>
    );
  }
}

