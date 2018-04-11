import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as routes from '../../constants/routes';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import * as Actions from '../../Actions';

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
        const user = {
          username,
          email: authUser.email,
          uid: authUser.uid
        };
        this.props.addUser(user);
      })
      .then(authUser => {
        this.setState(() => ({
          username: '',
          email: '',
          passwordOne: '',
          passwordTwo: '',
          error: false
        }));
      })
      .then(authUser => this.props.history.push('/'))
      .catch(error => {
        this.setState({error: error});
      });
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
            value={username} 
            name="username" 
            onChange={this.handleInput} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            name="email" 
            onChange={this.handleInput} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={passwordOne} 
            name="passwordOne" 
            onChange={this.handleInput} 
          />
          <input
            type="password" 
            placeholder="Confirm Password" 
            value={passwordTwo} 
            name="passwordTwo" 
            onChange={this.handleInput} 
          />
          <button disabled={isInvalid} type="submit">Sign Up</button>
        </label>
        <NavLink to={routes.LOGIN} className="login-route">
          Have an account? Login!
        </NavLink>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(Actions.addUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
