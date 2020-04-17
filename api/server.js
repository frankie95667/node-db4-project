const express = require('express');
const server = express();
const recipesRouter = require('../recipes/recipes-router');
const ingredientsRouter = require('../ingredients/ingredients-router');

server.use(express.json());
server.use('/api/recipes', recipesRouter);
server.use('/api/ingredients', ingredientsRouter);

module.exports = server;