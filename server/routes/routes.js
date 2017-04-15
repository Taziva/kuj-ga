const express = require('express');
const router = express.Router()
const getRestaurants = require('../../src/static/js/getRestaurants').getRestaurants;

router.get('/',function(req, res){
  res.render('index', {
    title: "Kuj-Ga"
  })
})

router.get('/coordinates/new',function(req, res){
  var position = req.query;
  console.log(req.query)
  getRestaurants(position).then((response)=>{
    console.log(response)
    res.json(response);
  })

})

module.exports = router;
