import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<section className={styles.container}>
            <hr />
			
            <div className={styles.content}>
            <h1 className={styles.title}>Tech Hope Foundation</h1>

<div className={styles.navLinksHolder}>
    <div className={styles.navLinks}>
        <a>home</a>
        <a>mission</a>
        <a>about</a>
    </div>

    <div className={styles.navLinks}>
        <a className={styles.donate}>donate</a>
        <a>team</a>
        <a>contact</a>
    </div>
</div>
            </div>
		</section>
	);
};

export default Footer;
