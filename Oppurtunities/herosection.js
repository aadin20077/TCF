import React from 'react'
import './herosection.css';
import './business.png';

function Herosection() {
    return (

        <div>
            <h1 className="Title1">Business</h1>
            <img src="src/business.png" alt="business"></img>
            <h2 className="Title2">Description</h2>
            <h3 className ="Title3">Do you want to gain experience intern experience in Finance/Law, Marketing, Human Resources, Public Relations or Logistics? Take a shot at applying to one of our business departments. </h3>
            <h2 className="Title2">Responsibilities</h2>
            <h3 className="Title3">Anybody with good communication and networking skills. You must be commited to spend 3-4 hours a week</h3>
            <h2 className="Title2">Requirements</h2>
            <h3 className="Title3">You don’t have previous experience in this field? Don’t worry! We’ve got your back, you could still apply for this positions!</h3>
            <h3 className="Title3">You are required to have strong communication skills to communicate effectively with students</h3>
            <h3 className="Title3">Excited? We are waiting for your application.
All the best for your application from TCF :)</h3>
<button> Refer to a friend? </button> &nbsp;<button> Apply </button>
        </div>
        
    );
}

export default Herosection;
