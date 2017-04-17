'use strict';

function getCurrentLocation(environment = navigator){
  if (navigator && navigator.geolocation) {
    return new Promise(function(resolve, reject) {
      environment.geolocation.watchPosition(function( position){
        resolve(position);
      })
    });
  }
  else{
    alert('Geolocation is not supported')
  }
};

module.exports = getCurrentLocation;
