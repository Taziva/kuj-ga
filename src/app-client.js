import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './components/Restaurant';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const getCurrentLocation = require('./static/js/getCurrentLocation');
const sendCoordinates = require('./static/js/sendCoordinates');
const $ = require('jQuery');

const App = () => (
  <MuiThemeProvider>
    <Restaurant />
  </MuiThemeProvider>
);

$(document).ready(() => {
  console.log($.ajax);
  getCurrentLocation().then((position) =>{
    sendCoordinates(position)
  }).then(()=>{ReactDOM.render(<App />, document.getElementById('main'));});
});
