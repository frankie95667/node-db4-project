const express = require('express');
const router = express.Router();

const Ingredients = require('./ingredients-model');

router.get('/:id/recipes', (req, res) => {
    const {id} = req.params;
    Ingredients.getRecipes(id)
    .then(recipes => recipes.length ? res.status(200).json(recipes) : res.status(400).json({message: "ingredient is not found"}))
    .catch(err => res.status(500).json({errorMessage: "Something went wrong when trying to retrieve recipes"}))
})

module.exports = router;