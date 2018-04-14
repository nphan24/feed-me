import * as mock from '../../../mockData/mockData';

export const fetchRecipeSource = jest.fn().mockImplementation(()=> mock.recipes);