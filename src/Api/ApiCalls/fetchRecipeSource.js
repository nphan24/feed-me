import { apiKey, applicationId } from './apiKey';

export const fetchRecipeSource = async recipesWithoutSource => {
  try {
    const unresolvedReceipes = await recipesWithoutSource.map(async recipe => {
      const response = await fetch(
        `http://api.yummly.com/v1/api/recipe/${
          recipe.id
        }?_app_id=${applicationId}&_app_key=${apiKey}`
      );
      const withId = await response.json();
      return {
        ...recipe,
        source: withId.source.sourceRecipeUrl
      };
    });
    const unresolved = Promise.all(unresolvedReceipes);
    return unresolved;
  } catch (error) {
    throw new Error('error');
  }
};
