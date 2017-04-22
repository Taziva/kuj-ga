const express = require('express');
const router = express.Router()
const getPlaces = require('../../src/static/js/getPlaces').getPlaces;
const optionsConstructer = require('../../src/static/js/optionsConstructer');

router.get('/',function(req, res){
  res.render('index', {
    title: "Kuj-Ga"
  })
})

router.get('/restaurants/new',function(req, res){
  var position = req.query;
  var uri = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
  var qs = {
      location: position.latitude+','+position.longitude,
      rankby: "distance",
      type: "restaurant",
      opennow:"true",
      key: process.env.PLACES_KEY
  };
  getPlaces(optionsConstructer(uri, qs)).then((response)=>{
    var places = []
    var increment = 0;
    response.results.forEach((place)=>{
      getPlaces(optionsConstructer("https://maps.googleapis.com/maps/api/place/details/json",{placeid:place.place_id, key:process.env.PLACES_KEY})).then((details)=>{
        details.result.startLocation = {lat: position.latitude, lng: position.longitude}
        places.push(details);
        increment++;
        if(places.length === response.results.length){
          res.json({results:places, access:process.env.PLACES_KEY})
        };
      })
    })
  })

})

module.exports = router;
