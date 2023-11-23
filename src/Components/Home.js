import React from 'react';
import Typed from 'typed.js';
import './Style.css';
import video from './IMAGES/WhatsApp Video 2023-11-20 at 4.50.50 PM.mp4';

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['  Front-end Developer.','  Web Designer.'],
      typeSpeed: 80,
      loop:true, 
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
   <>
    <div className="main-container">
    <video src={video} muted loop autoPlay ></video>
      <div className="title">
       <h1 style={{color:"#4626B2"}}>Hey!🙋‍♂️</h1>
       <h1>I am <span style={{color:"#FFB82F"}}>Suryansh.</span></h1>
       {/* <p>A passionate <span style={{color:"#4626B2"}}>frontend</span> and <span style={{color:"#4626B2"}}>web</span> developer.</p> */}
       <p> A Passionate <span ref={el} style={{color:"#4626B2"}} /></p>
      </div>
      <hr />
      <div className="section-second">
        <h1>My Work - Projects :</h1>
        <div className="project-container">
        <div className='project1'>
          <h2 className='project-name'>Twitter Clone</h2>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laborum.</p>
        </div>
        <div className='project1'>
          <h2 className='project-name'>Appteknow career</h2>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laborum.</p>
        </div>
        <div className='project1'>
          <h2 className='project-name'>FITA Academy</h2>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laborum.</p>
        </div>
        <div className='project1'>
          <h2 className='project-name'>Online Bike Rent</h2>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laborum.</p>
        </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default Home;
