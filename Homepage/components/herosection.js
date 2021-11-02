import React from 'react'
import '../App.css';
import './herosection.css';
import Navbar from './navbar/Navbar';




function Herosection() {
    return (
      <div className="Hero_container">
        <div className="Right_Section">
          <img src="src/images/undraw_video_influencer_9oyy.png" alt="coding"/>
        </div>
        <div className="Left_Section">
          <div className="Top_Part">
            <h1 className="Title">The Coding Foundation</h1>
            <h4 className="Sub_Title">Empowering Students Coding Ambitions into Reality</h4>
          </div>
          <div className="Bottom_Part">
            <div className="Left_Button">
              < button  className="btn signin-btn">Sign Up</button>
            </div>
            <div className="Right_Button">
          <button className="btnGS GS-btn">Learn More</button>
          </div>
          </div>
            </div>
          </div>
           
          
      
    );
}

export default Herosection;
// function Herosection() {
//     return (
//         <div className='hero-container'>


//           <h1>The Coding Foundation</h1>  
//           <h3>Empowering Students Coding Ambitions to Reality</h3>
          

          
         
          
//     <button className="btn signin-btn">Sign in</button>
//     <button className="btnGS GS-btn">Learn More</button>

//       </div>
            
//          );
// }

// export default Herosection;
