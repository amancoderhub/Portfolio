import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
    const [ismobile, setMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (header) {
                header.classList.toggle("active", window.scrollY > 100);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <div className="container d_flex">
                <div className="logo">
                    portfolio <b>.</b>
                </div>

                <div className="navlink">
                    <ul className={
                        ismobile ? "nav-links-mobile" : "link f_flex uppercase"
                    }>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#skill">SKILLS</a></li>
                        <li><a href="#project">PROJECTS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>

                    <button className="toggle"
                        onClick={() => setMobile(!ismobile)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={ismobile}
                    >
                        {ismobile ? (<i className="fas fa-times close home-btn" />) :
                            (
                                <i className="fas fa-bars open" />
                            )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
