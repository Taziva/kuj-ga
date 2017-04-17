'use strict';

var checkCoordinates = function (position){
  if(position != undefined){
    var coordinates = position.coords
    coordinates.longitude && coordinates.latitude?  true : false;
  };
}


function sendCoordinates(url, position, xhr = new XMLHttpRequest()){
  var latitude = position.coords.latitude
  var longitude = position.coords.longitude
  return new Promise(function (resolve, reject) {
    xhr.open("GET", url+"?latitude="+latitude+"&longitude="+longitude);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
    setTimeout(function() {
            reject('Promise timed out after 5 seconds');
        }, 15000);
  });
};
module.exports = sendCoordinates;
