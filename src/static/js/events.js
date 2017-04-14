window.onload = (function() {
  getCurrentLocation().then((position) =>{
    sendCoordinates(position)
  })
})
