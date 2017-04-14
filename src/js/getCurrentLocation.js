'use strict';
const geolocation = require('geolocation');

function getCurrentLocation(){
  return new Promise(function(resolve, reject) {
    geolocation.getCurrentPosition(function(err, position){
      if(err) console.log(err)
      resolve(position);
    })
  });
};
module.exports = {
  getCurrentLocation
}
