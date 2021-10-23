import React, { Component } from 'react'
import Card from "./CardUI";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.png";

class Cards extends Component {
    render (){
        return(
            <div>
                <br/>
                <img className="img-left" src = {image4}/>
                <h1 className="padding-top">About Us</h1>
                <p className="p-inline">The Coding Foundation aims to bring free, effective and encouraging computer science education for all students in different backgrounds. The Coding Foundation offers free mentoring to foster a love in coding technology for kids. We also offer free resources for students to explore the field of STEM and get a head start on their ambitions. Through fun and engaging activities, The Coding Foundation ensures students become inspired to work with technology in the future.</p>
                <h1 className="center-1">Meet The Team</h1>
                <p className="center-1">Meet our leaders who aspire to bring forward our mission and inspire others to work with technology! </p>
                <div className="col-md-4">
                    <Card title = "John Doe" p = "Founder"/>
                </div>
                <hr className = "shorten-hr"/>
                <h2 className="text-center"><u>Executive Team</u></h2>
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <Card title = "John Doe" p = "Web Development"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe II" p = "Marketing"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe III" p = "Public Relations"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe" p = "Web Development"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe II" p = "Marketing"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe III" p = "Public Relations"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe III" p = "Public Relations"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe" p = "Web Development"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe II" p = "Marketing"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe III" p = "Public Relations"/>
                        </div>
                    </div>
                </div>
                <hr className = "shorten-hr"/>
                <h2 className="text-center"><u>Interns List</u></h2>
                <div className="row">
                        <div className="col-md-4">
                            <Card title = "John Doe" p = "Web Development"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe II" p = "Marketing"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe III" p = "Public Relations"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe II" p = "Marketing"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe III" p = "Public Relations"/>
                        </div>
                        <div className="col-md-4">
                            <Card title = "John Doe II" p = "Marketing"/>
                        </div>
                </div>
                <br />
                <br />
                <p className="text-align"><i>The Coding Foundation is committed to a work environment in which all individuals are treated with respect and dignity. Each individual has the right to work in a professional atmosphere that promotes equal opportunities and prohibits unlawful discriminatory practices, including any sort of harrasement.</i></p>
                <div className="button-align">
                    <a href = "#" className = "btn btn-outline-success button-color button-padding">View Interns List</a>
                    <a href = "#" className = "btn btn-outline-success button-color button-padding-1">Join Us</a>
                    <div>
                        <a href = "#" className = "button-color">Read More About Policy</a>
                    </div>
                </div>
                <br />
                
            </div>
        );
    }
}
export default Cards;