'use strict';
function getCurrentLocation(){
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(function( position){
      resolve(position);
    })
  });
};
