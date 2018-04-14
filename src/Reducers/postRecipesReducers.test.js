import postRecipesReducer from './postRecipesReducer';
import { postRecipes, replaceRecipes } from '../Actions';
import * as mock from '../mockData/mockData';

describe('postRecipesReducer', () => {

  it('should return a default state', () => {
    const expected = [];
    expect(postRecipesReducer(undefined, {})).toEqual(expected);
  });

  it('should add recipes to state', () => {
    const expected = mock.mockRecipesArray;
    const recipes = mock.mockRecipesArray;
    expect(postRecipesReducer(undefined, postRecipes(recipes))).toEqual(expected);
  });

  it('should replace recipes in state', () => {
    const state = mock.mockRecipesArray;
    const newRecipes = [{
      name: 'crepes'
    }];
    const expected = newRecipes;
    expect(postRecipesReducer(state, replaceRecipes(newRecipes))).toEqual(expected);
  });
});