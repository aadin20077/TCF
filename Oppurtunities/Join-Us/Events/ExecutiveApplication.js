import React from "react";
import Image from "../images/executive-application.png"

function ExecutiveApplication() {
    return (
        <section>
            <div className="executive-app">
                <h2>Executive Board Application</h2>
                <img src={Image} alt=""/>
                <h2 style={{color: "#000000"}}>Director of Finance</h2>
                <p>The Director of Finance will be an executive member tasked 
                    with managing all aspects of the organization’s finances and budgeting for 
                    short term and long term growth. They will be in charge of maintaining an 
                    organization's financial strategy for earning profits, and bring a mix of 
                    leadership, persuasive writing, and detail-oriented skills.</p>
                <a href="#">Learn More</a>
                <h2 style={{color: "#000000"}}>Director of Public Relations</h2>
                <p>The Director of Public Relations will be an executive team member in charge 
                    of drafting emails for advertisements of new events, initiatives, etc., 
                    overseeing progress for reaching out to news channels, potential students, 
                    and business professionals, and brainstorming and implementing new initiatives 
                    to increase consumer base. </p>
                <a href="#">Learn More</a>
            </div>
            <div className="executive-app-bottom-text">
                <p>Currently, these are the only available positions across our organization!</p>
                <p>We recommend you keep an eye out for any new positions!</p>
            </div>
        </section>
    );
}

export default ExecutiveApplication;