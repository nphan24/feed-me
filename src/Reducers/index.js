import { combineReducers } from 'redux';
import recipes from './postRecipesReducer';
import favorites from './favoritesReducer';

const rootReducer = combineReducers({
  recipes,
  favorites
});

export default rootReducer;
