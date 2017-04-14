const express = require('express');
const router = express.Router()

router.get('/',function(req, res){
  res.render('index', {
    title: "Kuj-Ga"
  })
})

router.post('/coordinates/new',function(req, res){
  res.send("muhaha")
})

module.exports = router;
