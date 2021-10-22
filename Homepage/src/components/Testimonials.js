import React from "react"
import Review from "./Review"
import SectionFooter from "./SectionFooter"
import Image from "../images/testimonials-img.png"

function Testimonials() {
    return (
        <section id="testimonials">
            <div id="testimonials-content">
                <h2>Testimonials</h2>
                <p id="testimonial-info">Our services only provide the 
                best tutors that will guide you to fulfill 
                all your programming inquires. Get started 
                with coding, the right way with our mentors.
                </p>
                <div id="reviews-container">
                    <Review image={Image} name='Peter Schon' role='TCF Student'/>
                    <Review image={Image} name='Jane Austin' role='TCF Student'/>
                    <Review image={Image} name='Justin Bob' role='TCF Student'/>
                </div>
                <SectionFooter />
            </div>
        </section>
    )
}

export default Testimonials;