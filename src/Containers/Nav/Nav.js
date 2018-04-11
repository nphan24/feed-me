import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import './Nav.css';

const Nav = () => {
  return (
    <div className='login-signup'>
      <NavLink to={routes.LOGIN} className='login-route'>Login / Sign Up</NavLink>
    </div>
  );
};

export default Nav;