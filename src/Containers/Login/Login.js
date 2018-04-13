import React, { Component } from 'react';
import * as routes from '../../constants/routes';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import * as Actions from '../../Actions';
import './Login.css';
export class Login extends Component {
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      error: false 
    };
  }

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password } = this.state;

    try {
      const authUser = await auth.login(email, password);
      const user = { 
        email: authUser.email,
        password: authUser.password,
        uid: authUser.uid 
      };
      this.props.addUser(user);
      this.setState ({
        email: '',
        password: '',
        error: false
      });
      this.props.history.push('/');
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="login-component">
        <p className="login-comment">Please Login Below</p>
        <form className="login-form" 
          onSubmit={this.handleSubmit}>
          <label>
            <input 
              type="text" 
              placeholder="email" 
              className="input-field" 
              value={email} 
              name="email" 
              onChange={this.handleInput} 
            />
            <input 
              type="password" 
              placeholder="Password" className="input-field bottom-field" 
              value={password} 
              name="password" 
              onChange={this.handleInput} 
            />
            <button className="login-submit-button">Login</button>
          </label>
        </form>
        <NavLink 
          to={routes.SIGN_UP} 
          className="signin-route">
          Don't have an account? Sign Up!
        </NavLink>
        {error && <p className="login-error">{error.message}</p>}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(Actions.addUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

