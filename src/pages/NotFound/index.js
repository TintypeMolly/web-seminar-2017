import React from 'react';
import Paper from 'material-ui/Paper';
import notFoundImg from './not_found.png';

const NotFound = (props) => (
  <Paper style={{padding: 20}}>
    <img src={notFoundImg} alt='shocked Kanna' style={{width: 500}}/>
    <h1>Page Not Found</h1>
  </Paper>
);

export default NotFound;
