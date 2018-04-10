import { auth } from './firebase';

//sign up
export const signUp = (email, password) => 
  auth.createUserWithEmailAndPassword(email, password);

  //login
export const login = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

  //signout
export const doSignOut = () => auth.signOut();

// Password Reset
export const passwordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const passwordChange = (password) =>
  auth.currentUser.updatePassword(password);