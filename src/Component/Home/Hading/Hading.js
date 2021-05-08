import React from 'react';
import './hading.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Typical from 'react-typical'
import Slied from '../../../img/electo.PNG'
import Slied4 from '../../../img/serch.PNG'
import Slied5 from '../../../img/tiger.PNG'
import Slied6 from '../../../img/elec.PNG'
import Slied2 from '../../../img/Traverl.PNG'
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
                    <h2 style={{marginLeft:"90px", marginTop:'10px'}}> Hello,I'm</h2>
                      <div>  <Typical className="wel"
                            steps={["Mehedi Hasen", 1000, 'Web Developer', 1000,'Web design', 1000]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </div>
                     
                    

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
                            <img src={Slied6} class="d-block w-100 imgsize" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Slied5} class="d-block w-100 imgsize" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Slied4} class="d-block w-100 imgsize" alt="..." />
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
                     
                       <div className='row justify-content-center'>
                            <div className="col-md-3 col-sm-2 mt-4 justify-content-start"> 
                            <a href={mehedi} className="button" download="mehediResumi.pdf"><FontAwesomeIcon icon={faDownload} style={{marginRight:'10px'}}/>Resume</a>   </div >
                                           
                            <div className="col-md-3 col-sm-2 mt-4 justify-content-end">  
                    <a href='/Project' style={{}} className='button'>ProjectDetail</a></div>
                        </div>
                      
                </div>
                </div>
                
             


            </div>


        </div>
    );
};

export default Hading;