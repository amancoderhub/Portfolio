import React, { useEffect, useState } from "react";
import "./Footer.css";
import resume from "../img/ResumeAmanSri.pdf";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer>
            <div className="container footer-container">
                <div className="footer-content">
                    {/* Column 1: Profile & Socials */}
                    <div className="footer-col personal">
                        <h2 className="footer-name">Aman Shrivastav</h2>
                        <p className="footer-desc">
                            Backend-focused Full-Stack Developer passionate about creating scalable microservices and innovative web applications.
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.linkedin.com/in/aman-shrivastav-23295928b" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/amancoderhub" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://leetcode.com/u/AmanSri1761/" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                            <a href="mailto:saurabhsrivastav6@gmail.com">
                                <i className="fas fa-envelope"></i>
                            </a>
                            <a href={resume} target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-file-alt"></i>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#portfolio">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="footer-col contact-info">
                        <h3>Get In Touch</h3>
                        <div className="contact-item">
                            <p className="label">Email</p>
                            <p className="value">saurabhsrivastav6@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <p className="label">Location</p>
                            <p className="value">Ghaziabad, Uttar Pradesh, India</p>
                        </div>
                        <div className="contact-item">
                            <p className="label">Education</p>
                            <p className="value">B.Tech in CSE</p>
                        </div>
                    </div>

                    {/* Scroll to Top Button */}
                    <button
                        className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                    >
                        <i className="fas fa-arrow-up"></i>
                    </button>
                </div>

                <hr className="footer-hr" />

                <div className="footer-bottom">
                    <div className="copyright">
                        © {new Date().getFullYear()} Aman Shrivastav. Made with <i className="fas fa-heart" style={{ color: '#ff014f' }}></i> and lots of coffee ☕
                    </div>
                    <div className="tech-stack">
                        Built with <span className="react">React.js</span>, <span className="node">Node.js</span>, and <span className="css">CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
