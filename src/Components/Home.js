import React from 'react';
import './Style.css';
import video from './IMAGES/WhatsApp Video 2023-11-20 at 4.50.50 PM.mp4';

const Home = () => {
  // const handleDownload=()=>{
  //   const fileUrl = 'SURYANSH.txt';
  //   const link = document.createElement('a');
  //   link.href = fileUrl;
  //   link.download = 'downloaded_SURYANSH.txt';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
    
  // }
  return (
   <>
    <div className="main-container">
    <video src={video} muted loop autoPlay ></video>
      <div className="title">
       <h1 style={{color:"#4626B2"}}>Hey!🙋‍♂️</h1>
       <h1>I am <span style={{color:"#FFB82F"}}>Suryansh.</span></h1>
       <p>A passionate <span style={{color:"#4626B2"}}>frontend</span> and <span style={{color:"#4626B2"}}>web</span> developer.</p>
      </div>
      {/* <button onClick={handleDownload}>Download CV</button> */}
    </div>
   </>
  )
}

export default Home;
