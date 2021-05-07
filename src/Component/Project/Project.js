import React from 'react';
import './project.css'
import pro1 from '../../img/5 Home Page without login-1.png'

const Project = () => {
    return (
        <div className='container'>
            <h1 style={{textAlign:'center', margin:'10px'}}>Project Datei</h1>
            <div className="row cad">
                <div className='col-md-6'>
                    <h2 style={{textAlign:'center', margin:'10px'}}>Fresh vally</h2>
                    <h4 style={{margin:'8px'}}>Overview :</h4>
                    <p>❖ About: It is an Electronic servicing company website.
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



            <div className="row cad">

            <div className="col-md-6">
                    <img src={pro1} alt="" className='pro-pic' />
                </div>


                <div className='col-md-6'>
                <h2 style={{textAlign:'center', margin:'10px'}}>Fresh vally</h2>
                    <h4 style={{margin:'8px'}}>Overview :</h4>
                    <p>❖ About: It is an Electronic servicing company website.
                    ❖ Authentication System: Users can register and log in to esyemood with Google.
                    ❖ Admin Panel: Admin can add service, delete service, check total order of service.
                    ❖ Dashboard: User and Admin are both can use dashboard friendly. Users see only
                    users’ information like order, status, payment
                </p>

                </div>
                
            </div>

            <div className="row cad">
                <div className='col-md-6'>
                <h2 style={{textAlign:'center', margin:'10px'}}>Fresh vally</h2>
                    <h4 style={{margin:'8px'}}>Overview :</h4>
                    <p>❖ About: It is an Electronic servicing company website.
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



            <div className="row cad">

            <div className="col-md-6">
                    <img src={pro1} alt="" className='pro-pic' />
                </div>


                <div className='col-md-6'>
                <h2 style={{textAlign:'center', margin:'10px'}}>Fresh vally</h2>
                    <h4 style={{margin:'8px'}}>Overview :</h4>
                    <p>❖ About: It is an Electronic servicing company website.
                    ❖ Authentication System: Users can register and log in to esyemood with Google.
                    ❖ Admin Panel: Admin can add service, delete service, check total order of service.
                    ❖ Dashboard: User and Admin are both can use dashboard friendly. Users see only
                    users’ information like order, status, payment
                </p>

                </div>
                
            </div>

        </div>
    );
};

export default Project;