import { combineReducers } from 'redux';
import recipes from './postRecipesReducer';

const rootReducer = combineReducers({
  recipes
});

export default rootReducer;
