import { fetchRandomRecipes } from '../fetchRandomRecipes';
import * as mock from '../../../mockData/mockData';
import { apiKey, applicationId } from '../apiKey';
import { cleanRecipes } from '../../helper/cleanRecipes';
import { fetchRecipeSource } from '../fetchRecipeSource';
jest.mock('../../helper/cleanRecipes');
jest.mock('../fetchRecipeSource');

describe('fetchRandomRecipes', () => {
  beforeEach(()=> {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(
        mock.mockRecipesArray
      )
    }));
  });

  it('should call fetch with the correct params', () => {
    const url = `http://api.yummly.com/v1/api/recipes?_app_id=${applicationId}&_app_key=${apiKey}&q=chicken&maxResult=30&start=00`;
    const mockSelected = 'chicken';
    fetchRandomRecipes(mockSelected);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should call cleanRecipes', () => {
    expect(cleanRecipes).toHaveBeenCalled();
  });

  it('should call fetchRecipeSource', () => {
    expect(fetchRecipeSource).toHaveBeenCalled();
  });

  it('should return an array of recipes with its source', () => {
    const expected = mock.recipes;
    expect(fetchRandomRecipes()).resolves.toEqual(expected);
  });

  it('should throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(()=>
      Promise.reject({
        status: 500,
        message: 'error'
      }));

    await expect(fetchRandomRecipes()).rejects.toEqual(Error('error'));
  });
});