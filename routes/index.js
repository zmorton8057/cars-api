const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.status(200).json({message: 'Connected!'});
});

module.exports = routes;

////////// using routes/models/index.js as opposed to the routes/index.js [Two Separate files with the same name]
const models = require('./models');

routes.use('/models', models);