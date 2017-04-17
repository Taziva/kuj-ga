import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantListContainer from './components/RestaurantListContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const getCurrentLocation = require('./static/js/getCurrentLocation');
const sendCoordinates = require('./static/js/sendCoordinates');
import RaisedButton from 'material-ui/RaisedButton';

const $ = require('jQuery');
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
  <RaisedButton className="init">Find Restaurants Near Me</RaisedButton>
);

$(document).ready(() => {
  ReactDOM.render((<MuiThemeProvider>
    <RaisedButton className="init">Find Restaurants Near Me</RaisedButton>
  </MuiThemeProvider>), document.getElementById('main'));
  $(".init").click(()=>{
    getCurrentLocation().then((position) =>{
      sendCoordinates('/restaurants/new',position).then((response)=>{
      ReactDOM.render((
        <MuiThemeProvider>
          <RestaurantListContainer restaurants={response.results} access={response.access} />
        </MuiThemeProvider>
      ), document.getElementById('main'));}).catch((reject)=>{
        ReactDOM.render((
          <MuiThemeProvider>
            <RestaurantListContainer />
          </MuiThemeProvider>
        ), document.getElementById('main'));
      });
    })
  })
});
