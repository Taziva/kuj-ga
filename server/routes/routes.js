const express = require('express');
const router = express.Router()
const getRestaurants = require('../../src/static/js/getRestaurants').getRestaurants;

router.get('/',function(req, res){
  res.render('index', {
    title: "Kuj-Ga"
  })
})

router.post('/coordinates/new',function(req, res){
  var position = req.body;
  var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+position.latitude+","+position.longitude+"&radius=500&type=restaurant&key="+process.env.PLACES_KEY
  getRestaurants( position).then((response)=>{
    res.json(response);
  })

})

module.exports = router;
