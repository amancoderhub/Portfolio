import React, { useState } from "react";
import contact from "../img/contact.jpg";
import "./Contact.css";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const formSubmit = (event) => {
        event.preventDefault();

        emailjs
        .sendForm(
            "service_drgjfkk",
            "template_7x0yjkg",
            event.target,
            {
            publicKey: "-zqtghD6sAcgJ9mtc",
            }
        )
        .then(
            () => {
            alert("✅ Message sent successfully!");
            setData({ name: "", email: "", message: "" });
            },
            (error) => {
            console.error(error);
            alert("❌ Failed to send message. Please try again.");
            }
        );

        event.target.reset();
    };

    return (
        <section className="Contact" id="contact">
        <div className="container top">
            <h1 className="title">&lt; Contact Me /&gt;</h1>

            <div className="content">
            {/* LEFT */}
            <Fade direction="left" className="left">
                <div className="box box_shadow">
                <div className="img">
                    <img
                    className="cont-img img-shadow"
                    src={contact}
                    alt="Contact"
                    />
                </div>

                <div className="details">
                    <h1>Let’s Connect</h1>
                    <p>
                    I’m open to opportunities in{" "}
                    <b>Full Stack / Software Development</b>.  
                    Feel free to reach out for roles, projects, or collaboration.
                    </p>

                    <br />

                    <p>
                    <span>Phone</span>: +91 9315596497
                    </p>
                    <p>
                    <span>Email</span>: saurabhsrivastav6@gmail.com
                    </p>
                    <p>
                    <span>Location</span>: Ghaziabad, Uttar Pradesh, India
                    </p>

                    <br />

                    <div className="card-btn">
                    <a
                        className="btn_shadow"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://t.me/amanshrivastav"
                    >
                        Chat <i className="fas fa-paper-plane"></i>
                    </a>

                    <a
                        className="btn_shadow"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:saurabhsrivastav6@gmail.com"
                    >
                        Mail <i className="fas fa-envelope"></i>
                    </a>
                    </div>
                </div>
                </div>
            </Fade>

            {/* RIGHT */}
            <Fade direction="right" className="right box_shadow">
                <form onSubmit={formSubmit}>
                <div className="input">
                    <span>YOUR NAME</span>
                    <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={InputEvent}
                    required
                    />
                </div>

                <div className="input">
                    <span>YOUR EMAIL</span>
                    <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    required
                    />
                </div>

                <div className="input">
                    <span>YOUR MESSAGE</span>
                    <textarea
                    name="message"
                    rows="10"
                    value={data.message}
                    onChange={InputEvent}
                    required
                    ></textarea>
                </div>

                <button className="btn_shadow">
                    SEND <i className="fas fa-arrow-right"></i>
                </button>
                </form>
            </Fade>
            </div>
        </div>
        </section>
    );
};

export default Contact;
