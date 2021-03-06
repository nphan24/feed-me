export const cleanRecipes = mealsArray => {
  const cleanedRecipes = mealsArray.map(meal => {
    const { 
      recipeName, 
      imageUrlsBySize, 
      ingredients, 
      totalTimeInSeconds, 
      id 
    } = meal;
    
    return { 
      name: recipeName, 
      image: imageUrlsBySize['90'],
      Ingredients: ingredients, 
      totaltime: totalTimeInSeconds / 60, 
      id: id };
  });
  return cleanedRecipes;
};
