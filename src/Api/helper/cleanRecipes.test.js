import { cleanRecipes } from './cleanRecipes';
import * as mock from '../../mockData/mockData';

describe('cleanRecipes', () => {
  it('should return an array of cleaned recipes', () => {
    const cleaned = cleanRecipes(mock.uncleanedMockRecipeData.matches);
    const expected = mock.cleanedMockRecipeData;
    expect(cleaned).toEqual(expected);
  });
});