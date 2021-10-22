import React from "react"
import Phone from "../images/discord-phone.png"
import Icon from "../images/discord-icon.png"
import SectionFooter from "./SectionFooter"

function Discord() {
    return (
        <section id="discord">
            <h2>Join Our Discord Server to Explore your passion for Coding!</h2>
            <div id="discord-content">
                <span>
                    <p>Discord</p>
                    <img src={Phone} alt=""/>
                </span>
                <div id="discord-info">
                    <img src={Icon} alt=""/>
                    <p>Join to get in touch with students across the world. 
                    Develop your network to develop your passion. Anyone Could join Discord!
                    </p>
                    <form action="https://discord.gg/SZ6wtDEwtj" target="_blank">
                        <button type="submit">Join now</button>
                    </form>
                </div>
            </div>
            <SectionFooter/>
        </section>
    )
}

export default Discord;