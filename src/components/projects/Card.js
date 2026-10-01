import React, { useEffect, useRef, useState } from "react";
import { Zoom } from "react-awesome-reveal";

const Card = (props) => {
    const [modal, setModal] = useState(false);
    const closeButtonRef = useRef(null);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    useEffect(() => {
        if (!modal) return undefined;

        document.body.classList.add("active-modal");
        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.classList.remove("active-modal");
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [modal]);

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
                                {props.techStack.map((tech) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
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
                        <button type="button" className="dtl-btn" onClick={openModal}>
                            View Details <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </Zoom>

            {/* Popup box */}
            {modal && (
                <div className="modal" role="presentation">
                    <button
                        type="button"
                        className="overlay"
                        onClick={closeModal}
                        aria-label="Close project details"
                    ></button>
                    <div
                        className="modal-content"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                    >
                        <div className="modal-text right">
                            <p>Project-Card</p>
                            <h1 id="project-modal-title">{props.title}</h1>
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
                            <button
                                ref={closeButtonRef}
                                type="button"
                                className="close-modal btn_shadow"
                                onClick={closeModal}
                                aria-label="Close project details"
                            >
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
