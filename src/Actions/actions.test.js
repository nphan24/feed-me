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

describe('addFavorite', () => {
  it('creates a type of ADD_FAVORITE', () => {
    const recipe = mock.mockRecipe;
    const expected = {
      type: 'ADD_FAVORITE',
      recipe
    };
    expect(Actions.addFavorite(recipe)).toEqual(expected);
  });
});

describe('removeFavorite', () => {
  it('creates a type of REMOVE_FAVORITE', () => {
    const id = 2;
    const expected = {
      type: 'REMOVE_FAVORITE',
      id
    };
    expect(Actions.removeFavorite(id)).toEqual(expected);
  });
});
