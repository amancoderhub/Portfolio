import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";

const Card = (props) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    function getday() {
        let options = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        };

        const created_at = new Date(props.time);
        let day = created_at.toLocaleDateString("en-US", options);

        return day;
    }

    return (
        <>
            <Zoom direction="up" className="Prj-card btn_shadow ">
                <div className="card-content">
                    <div className="card-top">
                        <div className="card-title">
                            <a target="_blank" rel="noopener noreferrer" href={props.hostedUrl || props.link}>
                                <h2>{props.title}</h2>
                            </a>
                        </div>
                        {props.techStack && props.techStack.length > 0 ? (
                            <div className="tech-stack">
                                {props.techStack.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        ) : (
                            props.lang && (
                                <div className="tech-stack">
                                    <span className="tech-tag">{props.lang}</span>
                                </div>
                            )
                        )}
                    </div>

                    <div className="desc">
                        <p className="one-line-detail">{props.details || "No description provided."}</p>
                    </div>

                    <div className="card-links">
                        {props.hostedUrl && (
                            <a
                                className="btn_shadow live-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={props.hostedUrl}
                            >
                                <i className="fas fa-external-link-alt"></i> Live Demo
                            </a>
                        )}
                        <a
                            className="btn_shadow repo-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={props.link}
                        >
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>

                    <div className="card-footer">
                        <button className="dtl-btn" onClick={toggleModal}>
                            View Details <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </Zoom>

            {/* Popup box */}
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className="modal-text right">
                            <p>Project-Card</p>
                            <h1>{props.title}</h1>
                            <p>{props.details}</p>

                            {props.hostedUrl === "" || props.hostedUrl === null ? (
                                ""
                            ) : (
                                <p>
                                    <span>Hosted Link :</span>{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={props.hostedUrl}
                                    >
                                        {props.hostedUrl}
                                    </a>
                                </p>
                            )}
                            {/* <p>The project hosted link is available at the GitHub repository Readme, please head over there to view project.</p> */}
                            <p>
                                <span>Pushed on :</span> {getday()}
                            </p>
                            <p>
                                <span>Language :</span> {props.lang}
                            </p>
                            <p>
                                {" "}
                                <span>Stars</span> : {props.stars} &emsp; &emsp;{" "}
                                <span>Forks</span> : {props.fork}
                            </p>
                            <div className="button f_flex mtop card-btn">
                                {props.hostedUrl === "" || props.hostedUrl === null ? (
                                    ""
                                ) : (
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={props.hostedUrl}
                                        className="btn_shadow dtl-btn"
                                    >
                                        <i className="fas fa-chevron-right"></i> View Project
                                    </a>
                                )}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={props.link}
                                    className="btn_shadow dtl-btn"
                                >
                                    <i className="fab fa-github"></i> Repository
                                </a>
                            </div>
                            <button className="close-modal btn_shadow" onClick={toggleModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
