import React from "react";
import styles from "./About.module.css";

const About = () => (
    <section id="about" className={styles.about}>
        <div className={styles.inner}>
            <h2 className={styles.heading}>About Me</h2>
            <p className={styles.text}>
                I’m Sridhar, currently a 3rd-year B.Tech student in Artificial Intelligence & Data Science at Anna University.
                My passion lies at the intersection of AI and user experience—building platforms that not only think but delight.
                From leveraging Llama 3/GPT-4 to architect Conversational AI agents, to crafting sleek web UIs, I thrive on solving complex problems with elegant code.
            </p>
            <ul className={styles.skills}>
                <li>🤖 AI & Machine Learning (Python, Scikit-Learn, PyTorch)</li>
                <li>💻 Web Dev (React, Vite, Next.js, Tailwind CSS)</li>
                <li>☁️ Backend (FastAPI, Node.js, PostgreSQL)</li>
                <li>🛠️ Tools (Git, Docker, Kubernetes, Pinecone)</li>
            </ul>
        </div>
    </section>
);

export default About;
