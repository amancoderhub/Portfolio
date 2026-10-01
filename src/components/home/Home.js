import React from "react";
import "./Home.css";
import { useTypewriter } from "react-simple-typewriter";
import lt from "../img/lt.png";
import gfg from "../img/gfg.png";

const Home = () => {
    const [text] = useTypewriter({
        words: [
            " Backend Oriented-Full Stack Developer.",
            " MERN Stack Engineer.",
            " Competitive Programmer.",
        ],
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 2 runs.`),
    });

    return (
        <div className="container1 container f_flex hero" id="home">
            <div className="container2 container20 left">
                <span className="headline">Hello</span>
                <h1>
                    I'm<span className="headline-text"> Aman Shrivastav 👨🏻‍💻</span>
                </h1>
                <p>
                    a<span>{text}</span>
                </p>

                <div className="hero_btn d_flex">
                    <div className="col_1">
                        <h4>FIND ME ON</h4><br/>
                        <div className="button">
                            <a
                                className="btn_shadow social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/aman-shrivastav-23295928b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                title="LinkedIn"
                                aria-label="Visit Aman Shrivastav's LinkedIn profile"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>

                            <a
                                className="btn_shadow social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/amancoderhub"
                                title="GitHub"
                                aria-label="Visit Aman Shrivastav's GitHub profile"
                            >
                                <i className="fab fa-github"></i>
                            </a>

                            {/* <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codeforces.com/profile/aman_shrivastav"
                    title="Codeforces"
                >
                    <button className="btn_shadow">
                    <img src={cf} alt="Codeforces" />
                    </button>
                </a> */}

                            <a
                                className="btn_shadow social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.geeksforgeeks.org/user/aman_shrivastav/"
                                title="GeeksforGeeks"
                                aria-label="Visit Aman Shrivastav's GeeksforGeeks profile"
                            >
                                <img src={gfg} alt="" />
                            </a>

                            <a
                                className="btn_shadow social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://leetcode.com/u/AmanSri1761/"
                                title="LeetCode"
                                aria-label="Visit Aman Shrivastav's LeetCode profile"
                            >
                                <img src={lt} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
