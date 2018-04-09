import React from 'react';
import * as routes from '../../constants/routes';
import { Route, NavLink, withRouter } from 'react-router-dom';

export const Login = () => {
  return <div>
    <p>This is the login page</p>
    <NavLink to={routes.SIGN_UP} className="signin-route">
        Don't have an account? Sign Up!
    </NavLink>
  </div>;
};

