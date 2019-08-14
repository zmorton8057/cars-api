///////////// return all models
const models = require('express').Router();
const all = require('./all');

models.get('/', all);

module.exports = models;


//////////////return a single model 
const single = require("./single");

models.get('/:modelId', single);

////////////// returns cars as a nested resource of models
const cars = require('./cars');

models.use('/:modelId/cars', cars)