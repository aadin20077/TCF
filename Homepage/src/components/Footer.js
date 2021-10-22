import React from "react"
import Logo from "../images/tcf-logo.png"

function Footer() {
    return (
        <footer id="homepage-footer">
            <p id="trusted-by">Trusted By Students, Verified By Mentors</p>
            <div id="footer-content">
                <div id="footer-links">
                    <img src={Logo} alt=""/>
                    <div>
                        <p>Navigate</p>
                        <ul>
                            <li>
                                <a href="#homepage-footer">Home</a>
                            </li>
                            <li>
                                <a href="#homepage-footer">About Us</a>
                            </li>
                            <li>
                                <a href="#homepage-footer">Opportunities</a>
                            </li>
                            <li>
                                <a href="#homepage-footer">Events</a>
                            </li>
                            <li>
                                <a href="#homepage-footer">Discord</a>
                            </li>
                            <li>
                                <a href="#homepage-footer">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>Resources</p>
                        <ul>
                            <li>
                                <a href="#homepage-footer">Tutoring</a>
                            </li>
                            <li>
                                <a href="#homepage-footer">Workshops</a>
                            </li>
                            <li>
                                <a href="#homepage-footer">Sponsors</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>Legalities</p>
                        <ul>
                            <li>
                                <a href="#homepage-footer">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#homepage-footer">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>Social</p>
                        <span id="social-links">
                            <a rel="noreferrer" href="#homepage-footer" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a rel="noreferrer" href="https://www.instagram.com/thecodingfoundation_/?hl=en" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a rel="noreferrer" href="https://www.linkedin.com/company/the-coding-foundation" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a rel="noreferrer" href="https://www.tiktok.com/@thecodingfoundation_?" target="_blank"><i className="fab fa-tiktok"></i></a>
                        </span>
                    </div>
                </div>
                <hr/>
                <p id="copyright">© 2021 THE CODING FOUNDATION | All Rights Reserved</p>
            </div>
            <p id="created-by">Created by The TCF Web Development</p>
        </footer>
    )
}

export default Footer;