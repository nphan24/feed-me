export const postRecipes = recipes => ({
  type: 'POST_RECIPES',
  recipes
});

export const addFavorite = favorites => ({
  type: 'ADD_FAVORITE',
  favorites
});

export const removeFavorite = id => ({
  type: 'REMOVE_FAVORITE',
  id
});