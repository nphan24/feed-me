import React, {Component} from 'react';
import * as routes from '../../constants/routes';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = { 
      username: '', 
      email: '', 
      passwordOne: '', 
      passwordTwo: '', 
      error: false 
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    auth.signUp(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({...this.state}));
      })
      .catch(error => { error });
  }
  
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
    const isInvalid = passwordOne !== passwordTwo || 
    passwordOne === '' || 
    email === '' || 
    username === '';
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <h2>Create New Account</h2>
        <label>
          <input 
            type="text" 
            placeholder="username" 
            value={this.state.username} 
            name="username" 
            onChange={this.handleInput} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={this.state.email} 
            name="email" 
            onChange={this.handleInput} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={this.state.passwordOne} 
            name="passwordOne" 
            onChange={this.handleInput} 
          />
          <input
            type="password" 
            placeholder="Confirm Password" 
            value={this.state.passwordTwo} 
            name="passwordTwo" 
            onChange={this.handleInput} 
          />
          <button disabled={isInvalid} type="submit">Sign Up</button>
        </label>
        <NavLink to={routes.LOGIN} className="login-route">
          Have an account? Login!
        </NavLink>
        {error && <p>{'Please try again'}</p>}
      </form>
    );
  }
}
