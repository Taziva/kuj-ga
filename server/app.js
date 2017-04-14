const path = require('path');
const express = require('express');
const routes = require('./routes/routes');
const app = express();

//Set view engine
app.set('views', path.join(__dirname, '..', 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '..', 'src', 'static')));
app.use('/', routes);

var server = app.listen(3000, function(){
  var port = server.address().port
  console.log("All green server running on port: " + port);
})

module.exports = app
