import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as routes from '../../constants/routes';
import { NavLink, withRouter } from 'react-router-dom';
import { auth, db } from '../../firebase';
import * as Actions from '../../Actions';
import PropTypes from 'prop-types';
import './SignUp.css';

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

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      username,
      email,
      passwordOne
    } = this.state;

    try {
      const authUser = await auth.signUp(email, passwordOne);

      await db.doCreateUser(authUser.uid, username, email);
      const user = {
        username,
        email: authUser.email,
        uid: authUser.uid
      };

      this.props.addUser(user);
      this.setState({
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: false
      });
      this.props.history.push('/');
    } catch (error) {
      this.setState({ error });
    }
  }
  
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo || 
    passwordOne === '' || 
    email === '' || 
    username === '';
    
    return (
      <div className='signup-component'>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h2 className='signup-comment'>Create New Account</h2>
          <label>
            <input 
              type="text" 
              placeholder="username"
              className='signup-field' 
              value={username} 
              name="username" 
              onChange={this.handleInput} 
            />
            <input 
              type="email" 
              placeholder="Email"
              className='signup-field'
              value={email} 
              name="email" 
              onChange={this.handleInput} 
            />
            <input 
              type="password" 
              placeholder="Password"
              className='signup-field' 
              value={passwordOne} 
              name="passwordOne" 
              onChange={this.handleInput} 
            />
            <input
              type="password" 
              placeholder="Confirm Password"
              className='signup-field bottom-input' 
              value={passwordTwo} 
              name="passwordTwo" 
              onChange={this.handleInput} 
            />
            <button disabled={isInvalid} 
              type="submit" 
              className='signup-submit-button'>Sign Up
            </button>
          </label>
        </form>
        <NavLink to={routes.LOGIN} className="login-link">
          Have an account? Login!
        </NavLink>
        {error && <p className='signup-error'>{error.message}</p>}
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

SignUp.propTypes = {
  user: PropTypes.object,
  addUser: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
