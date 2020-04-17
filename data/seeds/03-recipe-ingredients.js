exports.seed = function (knex) {
  return knex("recipe_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 10 },
    { recipe_id: 1, ingredient_id: 2, quantity: 10 },
    { recipe_id: 1, ingredient_id: 3, quantity: 10 },
    { recipe_id: 1, ingredient_id: 4, quantity: 10 },
    { recipe_id: 1, ingredient_id: 5, quantity: 10 },
    { recipe_id: 1, ingredient_id: 6, quantity: 10 },
    { recipe_id: 1, ingredient_id: 7, quantity: 10 },
    { recipe_id: 2, ingredient_id: 8, quantity: 10 },
    { recipe_id: 2, ingredient_id: 1, quantity: 10 },
    { recipe_id: 2, ingredient_id: 9, quantity: 10 },
    { recipe_id: 2, ingredient_id: 3, quantity: 10 },
    { recipe_id: 2, ingredient_id: 10, quantity: 10 },
    { recipe_id: 2, ingredient_id: 12, quantity: 10 },
    { recipe_id: 2, ingredient_id: 5, quantity: 10 },
    { recipe_id: 2, ingredient_id: 4, quantity: 10 },
    { recipe_id: 2, ingredient_id: 11, quantity: 10 },
  ]);
};
