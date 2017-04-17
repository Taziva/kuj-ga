import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantListContainer from './components/RestaurantListContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const getCurrentLocation = require('./static/js/getCurrentLocation');
const sendCoordinates = require('./static/js/sendCoordinates');
const $ = require('jQuery');
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <RestaurantListContainer />
  </MuiThemeProvider>
);

$(document).ready(() => {
  getCurrentLocation().then((position) =>{
    sendCoordinates('/restaurants/new',position).then((response)=>{
    ReactDOM.render((
      <MuiThemeProvider>
        <RestaurantListContainer restaurants={response.results} />
      </MuiThemeProvider>
    ), document.getElementById('main'));}).catch((reject)=>{
      ReactDOM.render((
        <MuiThemeProvider>
          <RestaurantListContainer />
        </MuiThemeProvider>
      ), document.getElementById('main'));
    });
  })
});
