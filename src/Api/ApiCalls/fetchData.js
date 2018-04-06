import { apiKey, applicationId } from './apiKey';

export const fetchData = async () => {
  try {
    const response = await fetch(`http://api.yummly.com/v1/api/recipes?_app_id=${applicationId}&_app_key=${apiKey}`);
    const data = await response.json();
    return data.matches;
  } catch (error) {
    throw new error('error');
  }
};
