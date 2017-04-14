const path = require('path');
const express = require('express');
const app = express();
const router = express.Router()

//Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', router);

router.get('/',function(req, res){
  res.render('index', {
    title: "Kuj-Ga"
  })
})

var server = app.listen(3000, function(){
  var port = server.address().port
  console.log("All green server running on port: " + port);
})
