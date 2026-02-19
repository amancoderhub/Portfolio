import React from "react";
import "./About.css";
import logo from "../img/profile2.png";
import { Fade } from "react-awesome-reveal";

// Timeline Component
import recordApi from "./recordApi";
import { ReactComponent as WorkIcon } from "../img/work.svg";
import { ReactComponent as SchoolIcon } from "../img/school.svg";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import resume from "../img/ResumeAmanSri.pdf";

const Features = () => {
    const title_name = "< About me />";
    const workIconStyles = { background: "#06D6A0" };
    const schoolIconStyles = { background: "#f9c74f" };

    return (
        <>
            <section id="about">
                <h1 className="title">{title_name}</h1>
                <div className="abt">
                    <div className="abt-left">
                        <Fade direction="left">
                            <div className="abt-card">
                                <img
                                    className="abt-img img-shadow circle"
                                    src={logo}
                                    alt="Aman Shrivastav"
                                />
                            </div>
                        </Fade>
                    </div>

                    <Fade direction="right" className="abt-right">
                        <div>
                            <p className="abt-sub">
                                &emsp; I’m a passionate Backend Orientend Full Stack Developer who loves turning
                                ideas into scalable and user-friendly web applications and love solving critical problem with practicing DSA & Algorithms.
                            </p>

                            <p className="abt-desc">
                                &emsp; I specialize in building modern web products using{" "}
                                <span>
                                    MERN stack, clean UI design, optimized backend logic, and
                                    performance-focused development
                                </span>
                                . With a strong foundation in DSA and CS fundamentals, I enjoy
                                solving real-world problems and writing efficient, maintainable
                                code.
                            </p>

                            <p className="abt-desc">
                                &emsp; Currently pursuing B.Tech in CSE, I’ve worked on projects
                                like AI chatbots, rental platforms, and healthcare systems.
                                Looking to contribute my skills to a growth-oriented tech team.
                                <br />
                                <a
                                    href="mailto:saurabhsrivastav6@gmail.com"
                                    style={{ color: "#00bfff", textDecoration: "underline" }}
                                >
                                    Hire Me{" "}
                                    <sup>
                                        <i className="fas fa-external-link-alt fa-xs"></i>
                                    </sup>
                                </a>
                            </p>

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <a
                                    className="btn_shadow"
                                    href={resume}
                                    download="Aman_Shrivastav_Resume"
                                    style={{
                                        width: "10rem",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textDecoration: "none"
                                    }}
                                >
                                    <b>Resume&nbsp;</b>
                                    <i className="fas fa-chevron-down"></i>
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>

                {/* ---------------- Timeline ---------------- */}
                <div className="timeline">
                    <h1 className="title">Timeline</h1>
                    <VerticalTimeline>
                        {recordApi.map((element) => {
                            let isWorkIcon = element.icon === "work";

                            return (
                                <VerticalTimelineElement
                                    key={element.key}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                                >
                                    <h3 className="vertical-timeline-element-title">
                                        {element.link ? (
                                            <a href={element.link} style={{ color: "#00bfff" }}>
                                                {element.title}{" "}
                                                <sup>
                                                    <i className="fas fa-external-link-alt fa-xs"></i>
                                                </sup>
                                            </a>
                                        ) : (
                                            element.title
                                        )}
                                    </h3>
                                    <h5 className="vertical-timeline-element-subtitle">
                                        {element.location}
                                    </h5>
                                    <p className="description">{element.desc1}</p>
                                    <p className="description">{element.desc2}</p>
                                    <p className="description">{element.desc3}</p>
                                </VerticalTimelineElement>
                            );
                        })}
                    </VerticalTimeline>
                </div>
            </section>
        </>
    );
};

export default Features;
