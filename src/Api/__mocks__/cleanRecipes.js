export const cleanRecipes = jest.fn().mockImplementation(() => ({
  status: 200,
  json: () =>
    new Promise(resolve => {
      resolve('mockRecipeData');
    })
}));
