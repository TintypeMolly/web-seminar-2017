import React from 'react';
import Paper from 'material-ui/Paper';
import indexImage from './index_image.gif';

const Index = (props) => (
  <Paper style={{
    padding: 20
  }}>
    <div style={{maxWidth: 500}}>
      <img src={indexImage} alt="Kanna is chasing and eating chocolate"/>
      <p>This is the index page.</p>
    </div>
  </Paper>
);

export default Index;
