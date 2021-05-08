import React, { useState } from 'react';
import './contact.css'


const Contact = () => {
    const [status, setStatus] = useState
    ("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("https://shrouded-beach-36584.herokuapp.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
      

    };
    return (
      <div className='row container'>

<h1 style={{textAlign:'center', color:'Cyan', margin:'50px' }}>Contacut Me</h1>
        <div className="col-md-8 col-sm-4">
        
        <form onSubmit={handleSubmit} className="form col-md-8 col-sm-4">
        <div className="col-md-12 col-sm-4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required placeholder="write you name" className="col-md-10 col-sm-4"/>
        </div>
        <div className="col-md-12 col-sm-4">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required placeholder="write your email" className="col-md-10 col-sm-4"/>
        </div>
        <div className="col-md-12 col-sm-4">
          <label htmlFor="message">Massage: </label>
          <textarea id="message" required placeholder="write your masseg here" className="text col-md-10 col-sm-4"/>
        </div>
        <button type="submit" className='sub col-md-8 col-sm-6'>{status}</button>
      </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    );
};

export default Contact;