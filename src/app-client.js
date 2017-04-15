import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './components/Restaurant';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const $ = require('jQuery');

const App = () => (
  <MuiThemeProvider>
    <Restaurant />
  </MuiThemeProvider>
);

$(document).ready(() => {
  ReactDOM.render(<App />, document.getElementById('main'));
});
