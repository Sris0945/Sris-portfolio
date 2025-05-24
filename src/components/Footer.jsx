import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
    <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Sridhar. All rights reserved.</p>
        <a href="#home" className={styles.backToTop}>
            Back to Top ↑
        </a>
    </footer>
);

export default Footer;
