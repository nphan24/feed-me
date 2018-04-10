import React from 'react';
import * as routes from '../../constants/routes';
import { Route, NavLink, withRouter } from 'react-router-dom';

export const SignUp = () => {
  return (
    <div>
      <p>This is the Sign up page</p>
      {/* <NavLink to={routes.LOGIN} className="login-route">
        Have an account? Login!
      </NavLink> */}
    </div>
  );
};


// import React, { Component } from 'react';
// import * as routes from '../../constants/routes';
// import { Route, NavLink, withRouter } from 'react-router-dom';

// export class SignUp extends Component {
//   constructor() {
//     super();
//     this.state = { 
//       name: '', 
//       email: '', 
//       passwordOne: '', 
//       passwordTwo: '', 
//       error: null 
//     };
//   }

//   handleInput = () => {
//     console.log(this.state.email);
//   }
  
//   render() {
//     return <form className="signup-form">
//       <h2>Create New Account</h2>
//       <label>
//         <input 
//           type="text" 
//           placeholder="name" 
//           // value={this.state.name}
//           name="name" 
//           onChange={this.handleInput} 
//         />
//         <input 
//           type="email" 
//           placeholder="Email" 
//           // value={this.state.email}
//           name="email" 
//           onChange={this.handleInput} 
//         />
//         <input 
//           type="password"
//           placeholder='Password'
//           // value={this.state.passwordOne}
//           name='password'
//           onChange={this.handleInput}
//         />
//       </label>
//       <NavLink to={routes.LOGIN} className="login-route">
//           Have an account? Login!
//       </NavLink>
//     </form>;
//   }
// }
