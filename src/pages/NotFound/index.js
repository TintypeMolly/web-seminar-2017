import React from 'react';
import Paper from 'material-ui/Paper';
import notFoundImg from './not_found.png';

const NotFound = (props) => (
  <Paper style={{padding: 20}}>
    <div style={{maxWidth: 500}}>
      <img src={notFoundImg} alt='shocked Kanna' style={{width: '100%'}}/>
      <h1>Page Not Found</h1>
    </div>
  </Paper>
);

export default NotFound;
