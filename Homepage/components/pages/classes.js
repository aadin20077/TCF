import React from 'react';
import './classes.css';
import What from './what';



function Classes() {
    return (
        <div className="Class-container">
            <h1 className="Title">Welcome to the future of Coding Classes</h1>
          <h3 className="Sub_Title">Let's Get Started</h3>
          <h2 className="Sub_topic">Why us?</h2>
          <h4 className="Paragragh">The Coding Foundation aims to bring free, effective and encouraging CS education for all students in different backgrounds. To do so, The Coding Foundation offers free mentoring to foster a love in coding technology for kids.</h4>
        <h5 className="Paragraph">In addition, we also offer free resources for students to explore the field of STEM and get a head start on their ambitions. Through fun and engaging activities, The Coding Foundation ensures that students become inspired to work with technology in the future.</h5>
        <div className="btn signin-btn">Read More
        <What />
          </div>
          </div>
          
          
    );
}

export default Classes;
