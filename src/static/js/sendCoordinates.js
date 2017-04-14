'use strict';
var checkCoordinates = function (position){
  if(position != undefined){
    console.log(position)
    var coordinates = position.coords
    coordinates.longitude && coordinates.latitude?  console.log(true) : console.log(false);
  };
}

function sendCoordinates(position){
  if(checkCoordinates(position) === true){
    throw Error('Location is required');
    alert("Please allow location");
    return;
  };
  var longitude = position.coords.longitude;
  var latitude = position.coords.latitude;
  var data = {longitude: longitude, latitude: latitude}
  $.post('/coordinates/new', data);
};
