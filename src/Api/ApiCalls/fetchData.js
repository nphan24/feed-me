
export const fetchData = async () => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/latest.php`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new error('error');
  }
};
