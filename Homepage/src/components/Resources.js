import React from "react"
import Image from "../images/resources-img.png"
import SectionFooter from "./SectionFooter.js"

function Resources() {
    return (
        <section id="resources">
            <div id="resources-content">
                <div>
                    <img src={Image} alt=""/>
                </div>
                <div id="resources-info">
                    <h2>Resources</h2>
                    <p>Our services only provide the best 
                    tutors that will guide you to fulfill all your 
                    programming inquires. Get started with coding, 
                    the right way with our mentors.</p>
                    <form action="#">
                        <button type="submit">Read More</button>
                    </form>
                </div>
            </div>
            <SectionFooter />
        </section>
    )
}

export default Resources;