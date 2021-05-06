import React from 'react';
import './hading.css';
import Typical from 'react-typical'
import Slied from '../../../img/back.jpg'
import Slied2 from '../../../img/bg.jpg'
import Slied3 from '../../../img/5 Home Page without login-1.png'
import me from '../../../img/mehedi.png'
import mehedi from "../../../img/Mehedi-hasen-resume.pdf"


const Hading = () => {
    return (
        <div className="row justify-content-center" >
            <div className="col-md-5 mt-4 justify-content-center">
                <div className="justify-content-center">
                    <img src={me} alt="" className="my-pic" />
                </div>
                <div >
                    <h2 style={{marginLeft:"90px",marginTop:'50px'}}> Hello,I'm</h2>
                      <div>  <Typical className="wel"
                            steps={[' world!', 1000, " MEHEDI", 900]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </div>
                    <a href={mehedi} className="button" download="mehediResumi.pdf">Resume</a>

                </div>
            </div>


            <div className="col-md-6 mt-4  justify-content-center" >
               

                <div className="slied justify-content-center">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Slied} class="d-block w-100 imgsize" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Slied2} class="d-block w-100 imgsize" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Slied3} class="d-block w-100 imgsize" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    <h1 style={{marginLeft:'200px', padding:'15pX'}}>Project</h1>
                    <a href={mehedi} className="button">ProjectDetail</a>
                </div>
                </div>
                
             


            </div>


        </div>
    );
};

export default Hading;