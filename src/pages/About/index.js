import React from 'react';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.jpg';
import img4 from './img4.jpg';

const tilesData = [{
    img: img1,
    title: 'When we first met',
    subtitle: 'You perverts!',
  }, {
    img: img2,
    title: 'Kanna eating a waffle',
    subtitle: 'Looks delicious',
  }, {
    img: img3,
    title: 'Kanna and her pillow',
    subtitle: 'Cuuuuuuute',
  }, {
    img: img4,
    title: 'Kanna eating a butterfly',
    subtitle: 'Oh, no, Kanna, Don\'t!',
  },
];

const About = (props) => (
  <Paper style={{
    padding: 20
  }}>
    <div style={{maxWidth: 500}}>
      <h1>Kanna Kamui (カンナカムイ)</h1>
      <GridList>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={tile.subtitle}
        >
          <img src={tile.img} alt={tile.title}/>
        </GridTile>
      ))}
      </GridList>
      <p>Tohru's friend from the dragon realm who got exiled from her world and winds up living with Kobayashi as well. She is very young by dragon standards, equivalent to a elementary school girl. She initially assumes that Kobayashi seduced Tohru into staying and wanted her to return to their original world. She later grows attached to Kobayashi, viewing her as a mother figure.</p>
    </div>
  </Paper>
);

export default About;
