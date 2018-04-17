import { db } from './firebase';

export const doCreateUser = (uid, username, email) => {
  db.ref(`users/${uid}`).set({
    username,
    email,
    uid
  });
};

export const onceGetUsers = () => 
  db.ref('users').once('value');

export const addFavoriteToDB = (uid, favorite) => {
  db.ref(`favorites/${uid}`).set(
    favorite
  );
};

export const removeFavoriteFromDB = async (uid, favoriteId) => {
  const userFavorites = await getFavorites(uid);
  delete userFavorites[favoriteId];
  addFavoriteToDB(uid, userFavorites);
};

export const getFavorites = (uid) => {
  const favorites = db.ref(`favorites/${uid}`).once('value');
  return favorites;
};