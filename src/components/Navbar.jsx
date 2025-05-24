import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import avatar from "../assets/avatar.jpg"; // or your logo

const sections = ["home", "about", "projects", "contact"];

const Navbar = () => {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;
            for (let id of sections) {
                const section = document.getElementById(id);
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActive(id);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={avatar} alt="Sridhar Logo" />
            </div>
            <ul className={styles.links}>
                {sections.map((sec) => (
                    <li key={sec}>
                        <a
                            href={`#${sec}`}
                            className={`${styles.link} ${active === sec ? styles.active : ""
                                }`}
                        >
                            {sec.charAt(0).toUpperCase() + sec.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
