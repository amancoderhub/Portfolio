import React from "react";
import "./About.css";
import logo from "../img/profile2.png";
import resume from "../img/resumeAmanSri.pdf";
import { Fade } from "react-awesome-reveal";

import recordApi from "./recordApi";
import { ReactComponent as WorkIcon } from "../img/work.svg";
import { ReactComponent as SchoolIcon } from "../img/school.svg";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Features = () => {
    const workIconStyles = { background: "#06D6A0" };
    const schoolIconStyles = { background: "#f9c74f" };

    return (
        <section id="about">
            <h1 className="title">&lt; About me /&gt;</h1>

            <div className="abt">
                {/* Profile Image */}
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

                {/* About Me Content */}
                <Fade direction="right" className="abt-right">
                    <div>
                        <p className="abt-sub">
                            I'm a Software Developer passionate about
                            building reliable applications, solving
                            real-world problems, and writing clean,
                            maintainable code.
                        </p>

                        <p className="abt-desc">
                            My primary interests are in{" "}
                            <span>
                                Backend Development, Node.js, Express.js,
                                REST APIs, MongoDB, and authentication
                            </span>
                            . I also work with React.js and Angular to
                            build full-stack applications that connect
                            frontend interfaces with backend services.
                        </p>

                        <p className="abt-desc">
                            During my internships, I've contributed to
                            e-commerce and healthcare applications,
                            integrating REST APIs, implementing
                            authentication and role-based workflows,
                            handling cart operations, and debugging
                            application issues using Postman and
                            browser developer tools. I've also
                            collaborated with teams using Git and
                            Azure DevOps.
                        </p>

                        <p className="abt-desc">
                            My projects include an AI-powered chatbot,
                            a healthcare management system, and a
                            property rental platform. I enjoy exploring
                            practical solutions, strengthening my
                            problem-solving skills through Data
                            Structures and Algorithms, and continuously
                            learning new technologies.
                        </p>

                        <p className="abt-desc">
                            I'm looking for opportunities in backend
                            or full-stack development where I can
                            contribute to meaningful projects, learn
                            from experienced developers, and grow as
                            an engineer.
                        </p>

                        <a
                            className="hire-link"
                            href="mailto:saurbhsrivastav6@gmail.com"
                        >
                            Let's Connect
                            <sup>
                                <i className="fas fa-external-link-alt fa-xs" />
                            </sup>
                        </a>

                        {/* Resume Download */}
                        <div className="resume-container">
                            <a
                                className="btn_shadow rsm"
                                href={resume}
                                download="Aman_Shrivastav_Resume.pdf"
                            >
                                <b>Resume&nbsp;</b>
                                <i className="fas fa-chevron-down" />
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Timeline */}
            <div className="timeline">
                <h1 className="title">Timeline</h1>

                <VerticalTimeline>
                    {recordApi.map((element) => {
                        const isWorkIcon = element.icon === "work";

                        return (
                            <VerticalTimelineElement
                                key={element.id}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={
                                    isWorkIcon
                                        ? workIconStyles
                                        : schoolIconStyles
                                }
                                icon={
                                    isWorkIcon ? (
                                        <WorkIcon />
                                    ) : (
                                        <SchoolIcon />
                                    )
                                }
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {element.link ? (
                                        <a
                                            href={element.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {element.title}
                                            <sup>
                                                <i className="fas fa-external-link-alt fa-xs" />
                                            </sup>
                                        </a>
                                    ) : (
                                        element.title
                                    )}
                                </h3>

                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>

                                {[
                                    element.desc1,
                                    element.desc2,
                                    element.desc3,
                                ]
                                    .filter(Boolean)
                                    .map((description, index) => (
                                        <p
                                            className="description"
                                            key={index}
                                        >
                                            {description}
                                        </p>
                                    ))}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Features;
