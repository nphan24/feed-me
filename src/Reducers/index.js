import { combineReducers } from 'redux';
import recipes from './postRecipesReducer';
import favorites from './favoritesReducer';
import user from './userReducer';
import error from './errorsReducer';

const rootReducer = combineReducers({
  recipes,
  favorites,
  user,
  error
});

export default rootReducer;
