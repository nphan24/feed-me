/* eslint-disable */

export const mockRecipe = {
  name: 'pasta',
  image: 'url',
  totalTime: '30',
  id: 2
};

export const uncleanedMockRecipeData = { matches: [
  { recipeName: 'tofu', 
    imageUrlsBySize: 'url', 
    ingredients: ['',''], 
    totalTimeInSeconds: 3600, 
    id: 2,
    pasta: 'speghetti',
    fruit: 'mango'
  }
]
 };

export const cleanedMockRecipeData = [{ 
  Ingredients: ['', ''], 
  id: 2, 
  image: undefined, 
  name: 'tofu', 
  totaltime: 60 
}];

export const mockRecipesArray = [
  {
    name: 'pasta',
    image: 'url',
    totalTime: '30',
    id: 2
  },
  {
    name: 'rice',
    image: 'hmm',
    totalTime: '90',
    id: 3
  }
];

export const mockRemainingArray = [
  {
    name: 'rice',
    image: 'hmm',
    totalTime: '90',
    id: 3
  }
];
