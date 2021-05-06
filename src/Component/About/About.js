import React from 'react';
import me from "../../img/mehedi.png"
import './about.css'
import Nab from '../Nab/Nab';
import skilled from '../../img/skilled.jfif'

const About = () => {
    return (


        <div className="row bodycolor">
            <div className="col-md-4">
                <img src={me} alt="" className='aboutpic' />

            </div>
            <div className="col-md-8">
                <div style={{ margin: '50px' }}>
                    <h1 style={{ marginRight: '50px', color: 'cyan' }}>  KNOW WHO I'M</h1>
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
                <div className="col-md-6">
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
        <span>jQuery</span>
      </div>
      <div class="progress-line jquery">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>Python</span>
      </div>
      <div class="progress-line python">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>MySQL</span>
      </div>
      <div class="progress-line mysql">
        <span></span>
      </div>
    </div>
  </div>
                </div>
                <div className="col-md-6">
                <img src={skilled} alt="" />
                </div>
            </div>

        </div>
        
            
       
    
    );
};

export default About;