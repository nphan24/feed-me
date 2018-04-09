import React from 'react';
import * as routes from '../../constants/routes';
import { Route, NavLink, withRouter } from 'react-router-dom';

export const SignUp = () => {
  return <div>
    <p>This is the Sign up page</p>
    <NavLink to={routes.LOGIN} className="login-route">
        Have an account? Login!
    </NavLink>
  </div>;
};
