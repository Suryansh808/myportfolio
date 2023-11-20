import React, { useState } from 'react';
import './Style.css';
import video from './IMAGES/WhatsApp Video 2023-11-17 at 5.31.57 PM.mp4';

const Contact = () => {
  const [name, setName] = useState()
  const [number, setNumber] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()
  const handleSubmit=(event)=>{
    event.preventDefault();
    alert(`Thank you for contacting us!`)
    setName("")
    setNumber("")
    setEmail("")
    setSubject("")
    setMessage("")
  }
  return (
    <div>
      <div className="main-contact">
        <div className="right-side">
          <video src={video} muted loop autoPlay ></video>
        </div>
        <div className="left-side">
          <h1>Contact Us</h1>
          <p>Interested in trying one? use the form below to get in touch.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" value={name}
            onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder='Mobile Number' value={number}
            onChange={(e) => setNumber(e.target.value)}/>
            <br />
            <input type="email" placeholder='Email Id' value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder='Subject' value={subject}
            onChange={(e) => setSubject(e.target.value)}/>
            <br />
            <textarea name="" id="" cols="30" rows="5" placeholder='Message.' value={message}
            onChange={(e) => setMessage(e.target.value)} ></textarea>
            <br />
            <button type="submit">Submit</button> 
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
