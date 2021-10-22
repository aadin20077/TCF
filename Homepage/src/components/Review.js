import React from "react"
import Star from "../images/testimonials-star.png"

function Review(props) {
    return (
        <div id="review-info">
            <img className="review-pic" src={props.image} alt={props.name} />
            <div className="reviews">
                <p className="review-person">{props.name} <br/> {props.role}</p>
                <span>
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                </span>
                <p>"The Coding Foundation Helped me to achieve my long lasting goals in just 2 hours 
        of class daily for 3 weeks for free!"</p>
            </div>
        </div>
    )
}

export default Review;