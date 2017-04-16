'use strict';

function getCurrentLocation(environment = navigator){
  return new Promise(function(resolve, reject) {
    environment.geolocation.getCurrentPosition(function( position){
      resolve(position);
    })
  });
};

module.exports = getCurrentLocation;
