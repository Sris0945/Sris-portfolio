import React from "react";
import styles from "./Projects.module.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
// import more project images as needed

const projectList = [
    {
        title: "AI Shopping Assistant",
        description: "Real-time product search & sentiment-based recommendations built with GPT-4 & Pinecone.",
        image: project1,
        link: "https://github.com/your-username/ai-shopping-assistant",
    },
    {
        title: "SkillSwap Platform",
        description: "Peer learning web app with AI-generated modules & gamified freemium model.",
        image: project2,
        link: "https://github.com/your-username/skillswap",
    },
    // add more projects here
];

const Projects = () => (
    <section id="projects" className={styles.projects}>
        <h2 className={styles.heading}>My Projects</h2>
        <div className={styles.grid}>
            {projectList.map(({ title, description, image, link }) => (
                <a
                    key={title}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card}
                >
                    <img src={image} alt={title} className={styles.image} />
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.desc}>{description}</p>
                </a>
            ))}
        </div>
    </section>
);

export default Projects;

