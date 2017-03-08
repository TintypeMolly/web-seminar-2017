import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './AppRoute';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <AppRoute/>
  </MuiThemeProvider>,
  document.getElementById('root')
);
