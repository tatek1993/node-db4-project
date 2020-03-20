const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

//should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
    // return db('recipe_ingredients')
    //     .where("recipe_ingredients.recipe_id", "=", recipe_id)
    //     .join("ingredients", "ingredients.id", "=", "recipe_ingredients.ingredient_id")
    //     .select("ingredients.ingredient as ingredient", "recipe_ingredients.quantity as ingredient_quantity")
    return db.select("ingredients.ingredient as ingredient", "recipe_ingredients.quantity as ingredient_quantity")
  .from("recipe_ingredients")
  .join("ingredients", "ingredients.id", "=", "recipe_ingredients.ingredient_id")
  
}

//should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
    return db('steps')
        .where("steps.recipe_id", "=", recipe_id)
        .orderBy("steps.step_number")
}