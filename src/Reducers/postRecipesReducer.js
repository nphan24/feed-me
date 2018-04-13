const postRecipesReducer = (state = [], action) => {
  switch (action.type) {
  case 'POST_RECIPES':
    return [...state, ...action.recipes];
  case 'REPLACE_RECIPES':
    return [...action.recipes];
  default:
    return state;
  }
};

export default postRecipesReducer;