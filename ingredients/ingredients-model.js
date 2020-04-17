module.exports = {
    getRecipes,
}

const db = require('../data/dbConfig');

function getRecipes(ingredient_id){
    return db('ingredients as i').select('r.id', 'r.name')
    .join('recipes as r')
    .join('recipe_ingredients as ri', function(){ 
        return this.on('ri.ingredient_id', '=', 'i.id').andOn('ri.recipe_id', '=', 'r.id')
    })
    .where('i.id', ingredient_id);
}