const express = require('express');

const helmet = require('helmet');

const recipesRouter = require('../recipes/recipesRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipesRouter)

server.get('/', (req, res) => {
    res.send('<h1>This is working!</h1>')
})

module.exports = server;