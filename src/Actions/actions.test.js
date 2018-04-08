import * as Actions from './index';
import * as mock from '../mockData/mockData';

describe('postRecipes', () => {
  it('creates a type of POST_RECIPES', () => {
    const recipes = mock.mockRecipe;
    const expected = {
      type: 'POST_RECIPES',
      recipes
    };
    expect(Actions.postRecipes(recipes)).toEqual(expected);
  });
});
