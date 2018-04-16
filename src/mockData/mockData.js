/* eslint-disable */

export const mockRecipe = {
  name: 'pasta',
  image: 'url',
  totalTime: '30',
  id: 2
};

export const favorites = {
  name: 'pasta',
  image: 'url',
  totalTime: '30',
  id: 2
};

export const favoritesArray = [{
  name: 'pasta',
  image: 'url',
  totalTime: '30',
  id: 2
}];

export const uncleanedMockRecipeData = {
  matches: [
    {
      recipeName: 'tofu',
      imageUrlsBySize: 'url',
      ingredients: ['', ''],
      totalTimeInSeconds: 3600,
      id: 2,
      pasta: 'speghetti',
      fruit: 'mango'
    }
  ]
};

export const cleanedMockRecipeData = [
  {
    Ingredients: ['', ''],
    id: 2,
    image: undefined,
    name: 'tofu',
    totaltime: 60
  }
];

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

export const mockUser = {
  username: 'dog',
  email: 'dog@gmail.com',
  password: 'dogdog'
};

export const mockSignupUser = {
  username: '',
  email: 'a@gmail.com',
  passwordOne: 'aaaaaa',
  passwordTwo: 'aaaaaa',
  error: false
}

export const mockUserArray = [
  {
    username: 'dog',
    email: 'dog@gmail.com',
    password: 'dogdog'
  }
];

export const returnedRecipes = {
  attributes: {
    course: ['Side Dishes']
  },
  attribution: {
    html:
      "<a href='http://www.yummly.co/recipe/Potatoes-Au-G…ly' src='https://static.yummly.co/api-logo.png'/>",
    url: 'http://www.yummly.co/recipe/Potatoes-Au-Gratin-2244864',
    text: 'Potatoes Au Gratin recipes: information powered by Yummly',
    logo: 'https://static.yummly.co/api-logo.png'
  },
  cookTime: '1 Hr',
  cookTimeInSeconds: 3600,
  flavors: { Piquant: 0 },
  id: 'Potatoes-Au-Gratin-2244864',
  images: [{}],
  ingredientLines: [
    'Butter to grease the baking dish',
    '2-1/2 cups heavy cream',
    '1-1/2 teaspoons salt',
    '1/4 teaspoon ground black pepper',
    '3 large Russet or Yukon Gold potatoes (about 2-1/4 pounds), peeled and sliced very thin',
    '1 cup grated Parmigiano-Reggiano'
  ],
  name: 'Potatoes Au Gratin',
  numberOfServings: 6,
  prepTime: '15 Min',
  prepTimeInSeconds: 900,
  rating: 4,
  source: {
    sourceDisplayName: 'Once Upon A Chef',
    sourceSiteUrl: 'http://www.onceuponachef.com',
    sourceRecipeUrl:
      'https://www.onceuponachef.com/recipes/potatoes-au-gratin.html'
  },
  totalTime: '1 hr 15 min',
  totalTimeInSeconds: 4500,
  yield: '6'
};

export const recipes = [
  {
    Ingredients: [
      'butter',
      'heavy cream',
      'salt',
      'ground black pepper',
      'russet potatoes',
      'parmigiano'
    ],
    id: 'Potatoes-Au-Gratin-2244864',
    image:
      'https://lh3.googleusercontent.com/1UaqgvAZrw346jUpat4-at6mkz6-Jhjymn8AkVY2Kwu48E0TXbuH9OnhsR_k5OF-5UV_MSxx6qbnFPnawzTtqQ=s90-c',
    name: 'Potatoes Au Gratin',
    source: 'https://www.onceuponachef.com/recipes/potatoes-au-gratin.html',
    totaltime: 75
  }
];
