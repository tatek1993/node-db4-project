const model = require('./recipes/recipesModel.js');

model.getRecipes().then(x => console.log(x));

model.getShoppingList(3).then(data => console.log(data));

model.getInstructions(3).then(data => console.log(data));

