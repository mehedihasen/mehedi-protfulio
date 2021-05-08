import React from 'react';
import me from "../../img/mehedi.png"
import './about.css'
import skilled from '../../img/Web.jpg'
const About = () => {
    return (


        <div className="container">
          <h1 style={{textAlign:'center', color:'Cyan' }}>About Me</h1>

          <div className="row">
            <div className="col-md-4">
                <img src={me} alt="" className='aboutpic' />

            </div>
            <div className="col-md-7 pra">
                <div className="">
                    
                    <h3>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</h3>

                    <h2>Apart from coding, some other activities that I love to do!</h2>
                    <p>
                        Playing Games
                        Watching Movies
                        Travelling
            "Strive to build things that make a difference!"</p>


                </div>
            </div>

            
            
           
            <div className="row bodycolor" >
            <h1 style={{textAlign:'center', color:'cyan'}}>Skills</h1>
                <div className="col-md-7">
                <div class="skill-bars">
    <div class="bar">
      <div class="info">
        <span>HTML</span>
      </div>
      <div class="progress-line html">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>CSS</span>
      </div>
      <div class="progress-line css">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>JavaScript</span>
      </div>
      <div class="progress-line jquery">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>MongoDB</span>
      </div>
      <div class="progress-line python">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>React</span>
      </div>
      <div class="progress-line mysql">
        <span></span>
      </div>
    </div>
  </div> 
   </div> 
 
 
                <div className="col-md-4" style={{margin:'50px 5px'}}>
                  <img src={skilled} alt="" style={{width:'510px', borderRadius:'10px'}} />
                </div>
               
          </div>
            </div>



        </div>

            
       
    
    );
};

export default About;