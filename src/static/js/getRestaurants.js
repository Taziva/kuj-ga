'use strict';
const request = require('request-promise');

function getRestaurants(position){
  return new Promise(function(resolve, reject) {
    var options = {
    uri: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    qs: {
        location: position.latitude+','+position.longitude,
        radius: '500',
        type:'restaurant',
        key: process.env.PLACES_KEY // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

    request.get(options).then((response)=>{
      if(response){
        resolve(response)
      }
    })
  });
};
module.exports = {
  getRestaurants
}
