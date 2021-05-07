
import { faFacebookF, faGit, faLinkedinIn, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className='row '>
            <div className="clo-md-5 d-flex justify-content-center ">
            <a href='#footer' className="font"><FontAwesomeIcon icon={faGit} style={{}}/></a>
            <a href='/footer' className="font"><FontAwesomeIcon icon={faLinkedinIn} style={{}}/></a>
            <a href='/footer' className="font"><FontAwesomeIcon icon={faFacebookF} style={{}}/></a>
            <a href='/footer' className="font"><FontAwesomeIcon icon={faTwitter} style={{}}/></a>
            </div>
         
        </div>
    );
};

export default Footer;