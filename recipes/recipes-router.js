const express = require('express');
const router = express.Router();

const Recipes = require('./recipes-model');

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json({errorMessage: "There was an error when trying to retrieve recipes"}))
})

router.get('/:id/shoppingList', (req, res) => {
    const {id} = req.params;
    
    Recipes.getShoppingList(id)
    .then(list => list.length ? res.status(200).json(list) : res.status(400).json({message: "recipe was not found"}))
    .catch(err => res.status(500).json({errorMessage: "There was an error when trying to retrieve the ingredients"}))
    
})

router.get('/:id/instructions', (req, res) => {
    const {id} = req.params;
    
    Recipes.getInstructions(id)
    .then(instructions => instructions.length ? res.status(200).json(instructions) : res.status(400).json({message: "recipe was not found"}))
    .catch(err => res.status(500).json({errorMessage: "There was an error when trying to retrieve the instructions"}))
})

module.exports = router;