import { apiKey, applicationId } from './apiKey';
import { cleanRecipes } from 
  '../helper/cleanRecipes';
import { fetchRecipeSource } from './fetchRecipeSource';

export const fetchRandomRecipes = async (selected, increasePage) => {
  try {
    let min = 0;
    let max = 30;

    min = increasePage ? min + increasePage : min;
    max = increasePage ? max + increasePage : max;

    let category = selected ? selected : '';
    const response = await fetch(`http://api.yummly.com/v1/api/recipes?_app_id=${applicationId}&_app_key=${apiKey}&q=${category}&maxResult=${max}&start=${min}`);
    const data = await response.json();
    const recipesWithoutSource = await cleanRecipes(data.matches);
    const recipesWithSource = await fetchRecipeSource(recipesWithoutSource);
    return recipesWithSource;
  } catch (error) {
    throw new Error(error.message);
  }
};

