import { fetchRecipeSource } from '../fetchRecipeSource';
import * as mock from '../../../mockData/mockData';
import { apiKey, applicationId }  from '../apiKey';

describe('fetchRecipeSource', ()=> {

  beforeEach(()=> {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(
        mock.returnedRecipes
      )
    }));
  });

  it('should call fetch with the correct params', () => {
    const url = `http://api.yummly.com/v1/api/recipe/2?_app_id=${applicationId}&_app_key=${apiKey}`;
    const mockrecipesWithoutSource = [{id: 2}];
    fetchRecipeSource(mockrecipesWithoutSource);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object', () => {
    const mockrecipesWithoutSource = [{ id: 2 }];
    const expected = [{ id: 2, source: 'https://www.onceuponachef.com/recipes/potatoes-au-gratin.html' }];
    expect(fetchRecipeSource(mockrecipesWithoutSource)).resolves.toEqual(expected);
  });

  it('should return an error if the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(()=> {
      Promise.resolve({
        status: 500
      });
    });
    expect(fetchRecipeSource()).rejects.toEqual(Error('error'));
  });
});