import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import image1 from '../image/image1.png';

export class LandingPage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className ='LP-Grid'>
          <Cell col = {12}>
            <img
              src = {image1}
              alt = 'avatar'
              className = 'avatar-img'
              style={{height:'200px', borderRadius:'20px'}}
            />
            <div className='banner-text'>
              <h1>Fahad</h1>
              <hr />
              <p>Welcome To My Profile</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage
