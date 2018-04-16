import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCaGyiQQKcQbzZgiCyHLLHIGOvX5E4VrH0',
  authDomain: 'feed-me-2be60.firebaseapp.com',
  databaseURL: 'https://feed-me-2be60.firebaseio.com',
  projectId: 'feed-me-2be60',
  storageBucket: 'feed-me-2be60.appspot.com',
  messagingSenderId: '713865205266'
};

firebase.initializeApp(config);

const auth = firebase.auth();
const database = firebase.database();

export { auth };
