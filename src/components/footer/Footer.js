import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
        <div className="footer">
            <hr />
            <p>© {new Date().getFullYear()} Aman Shrivastav • Built with ❤️ using React</p>
        </div>
        </footer>
    );
};

export default Footer;
