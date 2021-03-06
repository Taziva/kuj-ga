const path = require('path');
const express = require('express');
const routes = require('./routes/routes');
var bodyParser = require('body-parser');
require('dotenv').config()
const app = express();

//Set view engine
app.set('views', path.join(__dirname, '..', 'src', 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'src', 'static')));
app.use('/', routes);

var server = app.listen((process.env.PORT || 3000), function(){
  var port = server.address().port
  console.log("All green server running on port: " + port);
})

module.exports = app
