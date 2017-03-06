/*'use strict'*/
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;
 
// -----------------------------------
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json({ type: 'application/*+json'}))
app.use(bodyParser.json({ type: 'application/vnd.custom-type'}))
app.use(bodyParser.json({ type: 'text/html'}))

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.use(express.static(__dirname + '/app/public'));
app.listen(PORT, function(){
console.log("App listening on port:" + PORT);
});