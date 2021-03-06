import React from 'react';
import "./nav.css"
import logo from '../../img/mehedi.png'
import mehedi from '../../img/Mehedi-hasen-resume.pdf'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Nab = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
 
                    <a href={mehedi} class="navbar-brand" style={{ color: 'white', marginLeft: '100px',borderRadius:'5px',border:'1px solid cyan', padding:'4px 8px' }} download="mehediResumi.pdf"> <FontAwesomeIcon style={{marginRight:'10px'}} icon={faDownload}/>Resume</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end  "    id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" style={{ color: 'white', paddingRight: '100px' }} aria-current="page" href="/home">Home</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link active" style={{ color: 'white', paddingRight: '100px' }} href="/project">Project</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link active" style={{ color: 'white', paddingRight: '100px' }} href="/about">About</a>
                            </li>
                            
                            <li class="nav-item active">
                                <a class="nav-link active" style={{ color: 'white', paddingRight: '100px' }} href="/contact">Contact</a>
                            
                            </li>

                            <li class="nav-item active">
                                <a class="nav-link active" style={{ color: 'white', paddingRight: '100px' }} href="https://mehedisabuj4.medium.com/web-developer-8aad0fd4e178">Blog</a>
                            </li>
                            
                            <li class="nav-item active">
                            <img src={logo} alt="" className='logo'/>
                            </li>
                        </ul>
                    </div>
                  
                </div>
            </nav>
        </div>
    );
};

export default Nab;