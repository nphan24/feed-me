export const fetchRandomRecipes = jest.fn().mockImplementation(() => [
  {
    Ingredients:[
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
]);
