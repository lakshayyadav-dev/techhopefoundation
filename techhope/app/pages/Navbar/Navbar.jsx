import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../../public/static/images/Logo.svg";
import BlueButton from "../BlueButton";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.company}>
				<Image src={logo} alt="Tech Hope Foundation Logo" />
				<h1>Tech Hope Foundation</h1>
			</div>

            <div className={styles.navlinks}>
                <a href="#">home</a>
                <a href="#">mission</a>
                <a href="#">about us</a>
                <a href="#">contact</a>
                <BlueButton text={"donate"}/>
            </div>

            <div className={styles.hamburger}>
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
            </div>
		</div>
	);
};

export default Navbar;
