import React, { Component } from 'react';
import * as routes from '../../constants/routes';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import * as Actions from '../../Actions';
export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
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
    console.log('this', this.props);
    const {
      email, 
      password 
    } = this.state;
    try {
      const authUser = await auth.login(email, password);
      const user = {
        email: authUser.email,
        uid: authUser.uid
      };
      this.props.addUser(user);
      this.props.history.push('/');
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      this.setState({error: error});
    }
  }

  render() {
    const {
      email,
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
              placeholder='email'
              value={email}
              name='email'
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

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(Actions.addUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

