import React, { Component } from 'react';
import * as routes from '../../constants/routes';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';

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

  handleSubmit = async (event) => {
    event.preventdefault();
    const {
      username,
      email, 
      passwordOne 
    } = this.state;
    try {
      const authUser = await auth.login(email, passwordOne);
      const user = {
        email: authUser.email,
        uid: authUser.uid
      };
      this.props.addUser(user);
      this.props.history.push('/');
    } catch (error) {
      this.setState({error: error});
    }
  }


  render() {
    const {
      username,
      password,
      error
    } = this.state;

    return (
      <div>
        <p>This is the login page</p>
        <form className='login-form'
          onSubmit={this.handleSubmit}>
          <label>
            <input
              type='text'
              placeholder='Username'
              value={username}
              name='username'
              onChange={this.handleInput}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              name='password'
              onChange={this.handleInput}
            />
            <button>Submit</button>
          </label>
        </form>
        <NavLink to={routes.SIGN_UP} className="signin-route">
        Don't have an account? Sign Up!
        </NavLink>
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

