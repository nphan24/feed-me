import { auth } from './firebase';

//sign up
export const signUp = (email, password) => 
  auth.createUserWithEmailAndPassword(email, password);

  //login
export const login = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

  //signout
export const doSignOut = () => auth.signOut();