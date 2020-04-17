exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable().unique();
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments();

      tbl.float("quantity").notNullable();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.unique(["recipe_id", "ingredient_id"]);
    })
    .createTable("steps", (tbl) => {
      tbl.increments();
      tbl.integer("step").unsigned().notNullable();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.text("instruction").notNullable();

      tbl.unique(["step", "recipe_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
