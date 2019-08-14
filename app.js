/////////dependencies
const app = require('express')();
const routes = require('./routes');
const PORT = 3000;

//////// Connect Routes to our application
app.use('/', routes);

///// Turn on Server
app.listen(PORT, function(){
    console.log("App listening on Port " + PORT)
})