import React, { useState } from "react";
import styles from "./Contact.module.css";
import socialLinks from "../utils/socialLinks";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: integrate with email service or Netlify Forms
        alert("Thanks for reaching out, Sridhar!");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className={styles.contact}>
            <h2 className={styles.heading}>Get In Touch</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                />
                <button type="submit" className={styles.button}>
                    Send Message
                </button>
            </form>
            <div className={styles.social}>
                {socialLinks.map(({ name, url, Icon }) => (
                    <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={name}
                    >
                        <Icon />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
