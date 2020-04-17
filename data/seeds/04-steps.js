exports.seed = function (knex) {
  return knex("steps").insert([
    {
      recipe_id: 1,
      step: 1,
      instruction:
        "Place the flour and caster sugar into a bowl and create a well in the middle for the other ingredients.",
    },
    {
      recipe_id: 1,
      step: 2,
      instruction:
        "Mix the eggs, vanilla extract, milk and margarine and then pour it into the bowl with the dry ingredients.",
    },
    {
      recipe_id: 1,
      step: 3,
      instruction:
        "Mix well until it is lump free and then break the chocolate into small pieces and add them.",
    },
    {
      recipe_id: 2,
      step: 1,
      instruction:
        "Preheat oven to 400 degrees F (200 degrees C). Lightly grease a 12 cup muffin pan.",
    },
    {
      recipe_id: 2,
      step: 2,
      instruction:
        "In a medium saucepan with enough water to cover, boil squash 20 minutes, or until tender. Remove from heat, drain, and puree in a food processor.",
    },
    {
      recipe_id: 2,
      step: 3,
      instruction:
        "In a large bowl, whisk together flour, baking powder, white sugar, salt and pumpkin pie spice.",
    },
  ]);
};
