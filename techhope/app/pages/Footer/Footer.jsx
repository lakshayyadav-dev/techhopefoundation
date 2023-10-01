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
						<a href="#hero">home</a>
						<a href="#mission">mission</a>
						<a href="#aboutus">about</a>
					</div>

					<div className={styles.navLinks}>
						<a className={styles.donate} href="#">donate</a>
						<a href="#team">team</a>
						<a href="#contact">contact</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
