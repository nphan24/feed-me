import { apiKey, applicationId } from './apiKey';
import { cleanRecipes } from 
'../helper/cleanRecipes';
import { fetchRecipeSource } from './fetchRecipeSource';

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

