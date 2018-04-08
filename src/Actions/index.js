export const postRecipes = recipes => ({
  type: 'POST_RECIPES',
  recipes
});

export const addFavorite = recipe => ({
  type: 'ADD_FAVORITE',
  recipe
});

export const removeFavorite = id => ({
  type: 'REMOVE_FAVORITE',
  id
});