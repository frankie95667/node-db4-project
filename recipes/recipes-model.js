module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

const db = require('../data/dbConfig');

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('ingredients as i').select('i.name', 'ri.quantity')
    .join('recipe_ingredients as ri', 'ri.ingredient_id', '=', 'i.id')
    .where({'ri.recipe_id': recipe_id})
}

function getInstructions(recipe_id){
    return db('recipes as r').select('s.id', 's.step', 's.instruction')
    .join('steps as s', 's.recipe_id', 'r.id')
    .where('r.id', recipe_id)
}