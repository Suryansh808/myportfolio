import React from 'react';
import './Style.css';
import profile from './IMAGES/favicon.jpg'

const About = () => {
  return (
    <div>
      <div className="about">
        <img src={profile} alt="Image"/>
        <h1>About Me...</h1>
        <p>I am a full stack MERN developer with experience in building responsive websites and applications using HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS and MongoDB.</p>
      </div>
    </div>
  );
}

export default About;
