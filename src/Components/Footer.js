import React from 'react';
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <div className="socialMedia">
      <a href="https://wa.me/9131934880" target='_blank'><i class="fa-brands fa-whatsapp fa-beat"></i></a>
      </div>
      <div className="footer">
       <h1>SuryanshSaxena.design</h1>
       <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact Me</Link></li>
       </ul>
        <div className='icon'>
        <a href="https://www.linkedin.com/in/suryansh808" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
         <a href="https://github.com/Suryansh808" target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
       © Suryansh Saxena, {new Date().getFullYear()}
      </div>
    </div>
  )
}

export default Footer;
