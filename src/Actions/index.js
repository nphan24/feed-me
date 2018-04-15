export const postRecipes = recipes => ({
  type: 'POST_RECIPES',
  recipes
});

export const replaceRecipes = recipes => ({
  type: 'REPLACE_RECIPES',
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

export const addUser = user => ({
  type: 'ADD_USER',
  user
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});

export const promptSignIn = error => ({
  type: 'PROMPT_SIGNIN',
  error
});