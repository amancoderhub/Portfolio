import React from "react";
import "./Skill.css";
import frontend from "../img/frontend.jpg";
import backend from "../img/backend.jpg";
import general from "../img/general.jpg";

import { Fade } from "react-awesome-reveal";

const Skill = () => {
    const title_name = "< Skills />";

    return (
        <>
        <section id="skill">
            <div className="skl">
            <h1 className="title">{title_name}</h1>
            <div className="skl-cont">
                <Fade direction="left">
                <div className="skl-card">
                    <img className="img-shadow" src={frontend} alt="Frontend" />
                    <h2 className="card-title">Frontend</h2>
                    <ul>
                    <li>React.js</li>
                    <li>HTML5, CSS3</li>
                    <li>Tailwind CSS, Bootstrap</li>
                    <li>Responsive UI Design</li>
                    </ul>
                </div>
                </Fade>

                <Fade direction="top">
                <div className="skl-card">
                    <img className="img-shadow" src={backend} alt="Backend" />
                    <h2 className="card-title">Backend</h2>
                    <ul>
                    <li>Node.js, Express.js</li>
                    <li>RESTful APIs</li>
                    <li>MongoDB, SQL</li>
                    <li>Authentication & Authorization</li>
                    <li>Postman</li>
                    </ul>
                </div>
                </Fade>

                <Fade direction="right">
                <div className="skl-card">
                    <img className="img-shadow" src={general} alt="General" />
                    <h2 className="card-title">General</h2>
                    <ul>
                    <li>C, C++</li>
                    <li>Python, JavaScript</li>
                    <li>Data Structures & Algorithms</li>
                    <li>OS, DBMS, Computer Networks</li>
                    <li>Git & GitHub</li>
                    </ul>
                </div>
                </Fade>
            </div>
            </div>
        </section>
        </>
    );
};

export default Skill;
