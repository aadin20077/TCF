import React from "react"
import Image from "../images/contact-img.png"

function Contact() {
    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <p>Any additional questions? Interested in starting a chapter? Fill out this form:</p>
            <div id="contact-content">
                <form>
                    <label htmlFor="name">
                        <input type="text" id="name" placeholder="Name"/>
                    </label>
                    <label htmlFor="email">
                        <input type="text" id="email" placeholder="Email"/>
                    </label>
                    <label htmlFor="subject">
                        <input type="text" id="subject" placeholder="Subject"/>
                    </label>
                    <label htmlFor="message">
                        <textarea id="message" placeholder="Message"/>
                    </label>
                    <button type="submit">Send</button>
                </form>
                <img src={Image} alt=""/>
            </div>
        </section>
    )
}

export default Contact;