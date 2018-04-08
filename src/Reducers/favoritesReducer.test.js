import favoritesReducer from './favoritesReducer';
import { addFavorite, removeFavorite } from '../Actions';
import * as mock from '../mockData/mockData';

describe('favoritesReducer', () => {
  it('should return a default state', () => {
    const expected = [];
    expect(favoritesReducer(undefined, {})).toEqual(expected);
  });

  it('should add favorites to state', () => {
    const recipe = mock.mockRecipe;
    const expected = [mock.mockRecipe];
    expect(favoritesReducer(undefined, addFavorite(recipe))).toEqual(expected);
  });

  it('should remove favorites from state', () => {
    const recipe = mock.mockRecipe;
    const expected = mock.mockRemainingArray;
    expect(favoritesReducer(mock.mockRecipesArray, removeFavorite(recipe.id))).toEqual(expected);
  });
});