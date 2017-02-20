console.log("Starting xshop, a node.js app.");
var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');
var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
// map frontend folder to root folder and serve static data from there
app.use('/',express.static('frontend'));
// Use environment port. If environment port is not 
// set use port 8080.
// var port = process.env.PORT || 8080;
// use static port 
var port = 8080;
connection.init();
routes.configure(app);
var server = app.listen(port, function() {
    console.log('Server listening on port ' + server.address().port);
});
    
console.log('Server running at http://127.0.0.1:' + port);
