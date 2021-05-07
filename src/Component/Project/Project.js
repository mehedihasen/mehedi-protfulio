import React from 'react';
import './project.css'
import pro1 from '../../img/5 Home Page without login-1.png'

const Project = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-6 cad'>
                    <img src={pro1} alt="" className='pro-pic'/>
                    <p>
                    Overview:
❖ About: It is an Electronic servicing company website.
❖ Authentication System: Users can register and log in to esyemood with Google.
❖ Admin Panel: Admin can add service, delete service, check total order of service.
❖ Dashboard: User and Admin are both can use dashboard friendly. Users see only
users’ information like order, status, payment
                    </p>

                </div>
                <div className="col-md-6">
                <img src={pro1} alt="" className='pro-pic' />  
                </div>
            </div>
            
        </div>
    );
};

export default Project;