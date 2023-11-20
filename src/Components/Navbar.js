import React from 'react';
import {Link } from "react-router-dom";
import './Style.css';
import Image from './IMAGES/pngegg.png'

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
       <Link to="/" class="brand-logo"><img src={Image}/></Link>
       <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="https://drive.google.com/file/d/1oUaFju1WyyWilgPCHNA14opjuCZbkjoZ/view?usp=drive_link" target='_blank'>Resume</Link></li> 
       </ul>
      </div>
    </div>
  );
}

export default Navbar;
