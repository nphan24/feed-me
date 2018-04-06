import { apiKey, applicationId } from './apiKey';
import { cleanRecipes } from '../helper/cleanRecipes';

export const fetchData = async () => {
  try {
    const response = await fetch(`http://api.yummly.com/v1/api/recipes?_app_id=${applicationId}&_app_key=${apiKey}`);
    const data = await response.json();
    const recipes = await cleanRecipes(data.matches);
    return recipes;
  } catch (error) {
    throw new error('error');
  }
};
