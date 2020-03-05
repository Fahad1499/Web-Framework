import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import image1 from '../image/image1.png';

export class Contact extends Component {
  render() {
    return (
      <div className = 'contact-body'>
        <Grid className = 'contact-grid'>
          <Cell col={6}>
            <h2>Fahad</h2>
            <img src={image1} alt='my pict' style={{height: '250px', borderRadius: '20px'}} />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em' }}><br></br>
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
          <div className = 'contact-list'>
            <List>
              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                <i class="fas fa-phone-square" aria-hidden='true'/>
                  087859977828
                </ListItemContent>
              </ListItem>                           
              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                <i class="fas fa-envelope" aria-hidden='true'/>
                  fahad.b1499@gmail.com
                </ListItemContent>
              </ListItem>
            </List>            
          </div>
          <br></br>
          <div style={{justifyContent:'space-between', display:'flex', width:'80%', margin:'auto', padding:'20px'}}>
          <a href='https://www.instagram.com/boinder' target='blank'>
                  <i class="fab fa-facebook" style={{color:'black'}}></i>
                </a>
                <a href='https://www.instagram.com/_arip123' target='blank'>
                  <i class="fab fa-instagram" style={{color:'black'}}></i>
                </a>
                <a href='https://twitter.com/Arif_Rahmat19' target='blank'>
                  <i class="fab fa-twitter" style={{color:'black'}}></i>
                </a>
                <a href='https://github.com/arip1997' target='blank'>
                  <i class="fab fa-github" style={{color:'black'}}></i>
                </a>
              </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
