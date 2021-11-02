import React from 'react'
import Herosection from '../herosection';
import Mentoring from '../../mentoring';
import './what.css'
import Buttons from '../buttons';


function What() {
    return (
        <div className="What-section">
            <h1 className="Title">What do we offer?</h1>
            <h2 className="Sub-title">Workshops</h2>
            <h3 className="Paragraph">Our workshops cultivate an interest for coding for students through comprehensive and interactive activities. It is an opportunity that you don't want to miss!</h3>
            <Buttons
            color= { "#F9B508"}
            text={"Read More"}
            />
            <Mentoring />
         </div>
    );
}

export default What;
