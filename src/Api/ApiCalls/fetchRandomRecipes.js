import { apiKey, applicationId } from './apiKey';
import { cleanRecipes } from '../helper/cleanRecipes';

export const fetchRandomRecipes = async () => {
  try {
    const response = await fetch(`http://api.yummly.com/v1/api/recipes?_app_id=${applicationId}&_app_key=${apiKey}`);
    const data = await response.json();
    const recipesWithoutSource = await cleanRecipes(data.matches);
    const recipesWithSource = await fetchRecipeSource(recipesWithoutSource);
    return recipesWithSource;
  } catch (error) {
    throw new error('error');
  }
};

export const fetchRecipeSource = async (recipesWithoutSource) => {
  try {
    const unresolvedReceipes = await recipesWithoutSource.map( async (recipe) => {
      const response = await fetch(`http://api.yummly.com/v1/api/recipe/${recipe.id}?_app_id=${applicationId}&_app_key=${apiKey}`);
      const withId = await response.json();
      return ({...recipe, yield: withId.yield, source: withId.source.sourceRecipeUrl});
    });
    const unresolved = Promise.all(unresolvedReceipes);
    return unresolved;
  } catch (error) {
    throw new Error ('error');
  }
};