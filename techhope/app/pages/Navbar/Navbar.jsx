"use client"
import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../../public/static/images/Logo.svg";
import BlueButton from "../BlueButton";
import DonationPopup from "../DonationPopup";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.company}>
				<Image src={logo} alt="Tech Hope Foundation Logo" className={styles.logo} />
				<h1>Tech Hope Foundation</h1>
			</div>

			<div className={styles.navlinks}>
				<a href="#hero">home</a>
				<a href="#mission">mission</a>
				<a href="#aboutus">about us</a>
				<a href="#contact">contact</a>
				<BlueButton text={"donate"} className={"donate"} onClick={() => showPopup()}/>
			</div>

			<div className={styles.hamburger}>
				<div className={styles.line} />
				<div className={styles.line} />
				<div className={styles.line} />
			</div>

			<DonationPopup />
		</div>
	);
};

export default Navbar;
