import { fetchRandomRecipes } from '../fetchRandomRecipes';
import * as mock from '../../../mockData/mockData';

describe('fetchRandomRecipes', () => {
  beforeEach(()=> {
    window.fetch = jest.fn().mockImplementation(() => Promise.reselve({
      status: 200,
      json: () => Promise.resolve({
        data: mock.mockRecipesArray
      })
    }));
  });

  // it('should call fetch with the correct params', () => {
  //   const url = `http://api.yummly.com/v1/api/recipes?_app_id=123&_app_key=12&q=$`;
  //   // fetchRandomRecipes();

  // });

  it('should call cleanRecipes', () => {
    
  });

  it('should call fetchRecipeSource', () => {

  });

  // it('should throw an error if the fetch fails', async () => {
  //   window.fetch = jest.fn().mockImplementation(()=>
  //     Promise.reject({
  //       status: 500,
  //       message: 'error'
  //     }));
  //   const expected = new Error('error');

  //   await expect(fetchRandomRecipes()).rejects.toEqual(expected);
  // });
});