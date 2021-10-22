import React from "react"
import SectionFooter from "./SectionFooter"
import Image1 from "../images/internship-img1.png"
import Image2 from "../images/internship-img2.png"

function Internship() {
    return (
        <section id="internship">
            <div id="internship-content">
                <img src={Image1} alt=""/>
                <div>
                    <h2>Join Us</h2>
                    <p>The Coding Foundation offers 
          internship positions for any department. If 
          you want to learn more, click the button below!
                    </p>
                    <form action="#">
                        <button type="submit">Join Now!</button>
                    </form>
                </div>
                <img src={Image2} alt=""/>
            </div>
            <SectionFooter/>
        </section>
    )
}

export default Internship;