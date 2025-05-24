import React from "react";
import styles from "./Hero.module.css";
import avatar from "../assets/avatar.jpg";

const Hero = () => (
    <section id="home" className={styles.hero}>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.intro}>
                    <p className={styles.greeting}>Hello, my name is</p>
                    <h1 className={styles.title}>
                        <span className={styles.name}>Sridhar.</span>
                        <span className={styles.tagline}>I build things for the web & AI.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        I'm a 3rd-year AI & Data Science undergrad passionate about creating
                        AI-powered platforms and sleek web experiences that solve real problems.
                    </p>

                    <div className={styles.cta}>
                        <a href="#projects" className={styles.primaryBtn}>
                            View My Work
                        </a>
                        <a href="#contact" className={styles.secondaryBtn}>
                            Get In Touch
                        </a>
                    </div>
                </div>

                <div className={styles.avatarContainer}>
                    <img src={avatar} alt="Sridhar" className={styles.avatar} />
                    <div className={styles.avatarBg}></div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <div className={styles.arrows}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
