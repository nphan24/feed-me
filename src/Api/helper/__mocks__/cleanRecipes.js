import * as mock from '../../../mockData/mockData';

export const cleanRecipes = 
jest.fn().mockImplementation(() => mock.uncleanedMockRecipeData);
