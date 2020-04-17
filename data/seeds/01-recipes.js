exports.seed = function (knex) {
  return knex("recipes").insert([
    { name: "Chocolate chip muffins" },
    { name: "Garlic-Studded Roast Lamb" },
  ]);
};
