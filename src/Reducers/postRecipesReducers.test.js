import postRecipesReducer from './postRecipesReducer';
import { postRecipes } from '../Actions';
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
});