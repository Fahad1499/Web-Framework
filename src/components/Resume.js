import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import image1 from '../image/image1.png';
import Education from './Education';
import Experience from './Experience';
import Skil from './Skil';

export class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col ={4}>
            <div style={{textAlign:'center'}}>
              <img 
                src={image1}
                alt="Avatar"
                style={{height:'200px', borderRadius:'20px'}}
              /> 
            </div>
            <h2 style={{paddingTop:'2em'}}> Fahad </h2>
            <h4 style={{color:'grey'}}> Mahasiswa </h4>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            <p>D4 - Teknik Informatika Politeknik Negeri Malang</p>
            
            <h4 style={{color:'grey'}}>Alamat</h4>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            <p>Malang, Jawa Timur, Indonesia </p>
          </Cell>
          <Cell col ={8} className='resume-right-cel'>
            <h2>Pendidikan</h2>            
            <Education 
              startYear={2005}
              endYear={2011}
              schoolName='SD Anak Saleh'
              schoolDescription=' '
            />
            <Education 
              startYear={2011}
              endYear={2014}
              schoolName='SMP Negeri 11 Malang'
              schoolDescription='  '
            />
            <Education 
              startYear={2014}
              endYear={2017}
              schoolName='SMA "Islam" Malang'
              schoolDescription='  '
            />
            <Education 
              startYear={2017}
              endYear={2021}
              schoolName=' Politeknik Negeri Malang '
              schoolDescription='  '
            />
            <hr style={{borderTop:'3px solid #e22947'}}/>
            <h2>Skill</h2>            
            <Experience                     
              jobDescription=' Programming & Graphic Design '
            />
            <hr style={{borderTop:'3px solid #e22947'}}/>
            <h2>Skill</h2>
            
            <Skil
              skill = 'HTML/CSS'
              value = {75}
            />
            <Skil
              skill = 'PHP'
              value = {75}
            />
            
            <Skil
              skill = 'C#'
              value = {50}
            />

          </Cell>          
        </Grid>
      </div>
    )
  }
}

export default Resume
