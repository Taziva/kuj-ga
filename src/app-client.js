import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantListContainer from './components/RestaurantListContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const getCurrentLocation = require('./static/js/getCurrentLocation');
const sendCoordinates = require('./static/js/sendCoordinates');
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'


const $ = require('jQuery');
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
  <RaisedButton className="init">Find Restaurants Near Me</RaisedButton>
);

$(document).ready(() => {
  ReactDOM.render((<MuiThemeProvider>
    <div className="coating">
      <AppBar title="Kuj-Ga" />
      <RaisedButton primary={true} className="init">Find Restaurants Near Me</RaisedButton>
      <div id="content"></div>
    </div>
  </MuiThemeProvider>), document.getElementById('main'));
  $(".init").click(()=>{
    $("#content").addClass('loader')
    $("#content").html('');
    getCurrentLocation().then((position) =>{
      sendCoordinates('/restaurants/new',position).then((response)=>{
        $("#content").removeClass('loader');
      ReactDOM.render((
        <MuiThemeProvider>
          <RestaurantListContainer restaurants={response.results} access={response.access} />
        </MuiThemeProvider>
      ), document.getElementById('content'));}).catch((reject)=>{
        console.log(reject)
        $("#content").removeClass('loader');
        ReactDOM.render((
          <MuiThemeProvider>
            <RestaurantListContainer />
          </MuiThemeProvider>
        ), document.getElementById('content'));
      });
    }).catch((err)=>{
      alert("Sorry can't access location because:" + err)
    })
  })
});
