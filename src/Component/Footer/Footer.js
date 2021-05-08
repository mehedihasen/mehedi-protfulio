
import { faFacebookF, faGit, faLinkedinIn, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className='row '>
            <div className="clo-md-5 d-flex justify-content-center ">
            <a href='https://github.com/mehedihasen' className="font"><FontAwesomeIcon icon={faGit} style={{}}/></a>
            <a href='https://www.linkedin.com/in/md-mehedi-hasen-70b423185/' className="font"><FontAwesomeIcon icon={faLinkedinIn} style={{}}/></a>
            <a href='https://www.facebook.com/mehedi.sabuj.180' className="font"><FontAwesomeIcon icon={faFacebookF} style={{}}/></a>
            <a href='https://twitter.com/MDMEHED44980424' className="font"><FontAwesomeIcon icon={faTwitter} style={{}}/></a>
            </div>
         
        </div>
    );
};

export default Footer;