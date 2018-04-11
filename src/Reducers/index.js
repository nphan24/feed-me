import { combineReducers } from 'redux';
import recipes from './postRecipesReducer';
import favorites from './favoritesReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  recipes,
  favorites,
  user
});

export default rootReducer;
