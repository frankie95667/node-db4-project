exports.seed = function (knex) {
  return knex("ingredients").insert([
    { name: "flour" },
    { name: "margarine" },
    { name: "sugar" },
    { name: "eggs" },
    { name: "milk" },
    { name: "vanilla extract" },
    { name: "chocolate" },
    { name: "butternut squash" },
    { name: "baking powder" },
    { name: "salt" },
    { name: "butter" },
    { name: "pumpkin pie spice" },
  ]);
};
