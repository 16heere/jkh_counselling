import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(
                "service_94q5zno",
                "template_w45ll98",
                formRef.current,
                "gwYgaft6xvDadNmti",
            )
            .then(() => {
                setStatus("success");
                formRef.current.reset();
            })
            .catch((err) => {
                console.error(err);
                setStatus("error");
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-inner">
                <div className="contact-left">
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">
                        Ready to Take
                        <br />
                        <em>the First Step?</em>
                    </h2>
                    <div className="divider" />
                    <p className="contact-intro">
                        Reaching out is often the hardest part. Fill in the form
                        and I'll be in touch to arrange your free 20-minute
                        consultation.
                    </p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <span className="detail-icon">◷</span>
                            <div>
                                <div className="detail-label">Availability</div>
                                <div className="detail-value">
                                    Monday – Thursday · Evenings available
                                </div>
                            </div>
                        </div>
                        <div className="contact-detail">
                            <span className="detail-icon">✦</span>
                            <div>
                                <div className="detail-label">
                                    Free Consultation
                                </div>
                                <div className="detail-value">
                                    20-minute phone call, no commitment
                                </div>
                            </div>
                        </div>
                        <div className="contact-detail">
                            <span className="detail-icon">⊕</span>
                            <div>
                                <div className="detail-label">Sessions</div>
                                <div className="detail-value">
                                    Zoom · Home Visit · Walk &amp; Talk
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.55  6.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            Follow on Instagram
          </a> */}
                </div>

                <blockquote className="tab-quote">
                    <p>
                        "Deep understanding is, I believe, the most precious
                        gift one can give to another."
                    </p>
                    <cite>
                        — Carl Rogers, <em>A Way of Being</em>
                    </cite>
                </blockquote>

                <div className="contact-right">
                    <form
                        ref={formRef}
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    placeholder="Joe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    placeholder="Smith"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone">Phone Number</label>
                            <input
                                id="telephone"
                                name="telephone"
                                type="tel"
                                placeholder="+44 7700 900000"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">
                                What's on your mind?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Feel free to share as much or as little as you'd like…"
                            />
                        </div>
                        <div className="form-row form-row--last">
                            <div className="form-group">
                                <label htmlFor="contact_method">
                                    Preferred contact method
                                </label>
                                <select
                                    id="contact_method"
                                    name="contact_method"
                                >
                                    <option value="Email">Email</option>
                                    <option value="Phone">Phone</option>
                                </select>
                            </div>
                        </div>

                        {status === "success" && (
                            <div className="form-notice form-notice--success">
                                ✓ Message sent — I'll be in touch soon.
                            </div>
                        )}
                        {status === "error" && (
                            <div className="form-notice form-notice--error">
                                Something went wrong. Please try again or reach
                                out directly.
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn-primary form-submit"
                            disabled={status === "sending"}
                        >
                            {status === "sending" ? "Sending…" : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>

            <div className="accreditation-logos">
                <img
                    src="/images/BACP_Logo_-_420374.png"
                    alt="BACP Registered Member 420374 MBACP"
                />
                <img
                    src="/images/BAATN_Practitioner-Member-logo.jpg"
                    alt="Practitioner Member of BAATN - The Black, African and Asian Therapy Network"
                />
            </div>
        </section>
    );
}
