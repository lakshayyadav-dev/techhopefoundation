import React from "react";
import styles from "./Contact.module.css";
import Image from "next/image";
import facebook from "../../../public/static/images/facebook.svg";
import instagram from "../../../public/static/images/instagram.svg";

const Contact = () => {
	return (
		<section className={styles.container}>
			<h1 className={styles.title}>Stay Connected.</h1>

			<div className={styles.information}>
				<a>techhopefoundation@gmail.com</a>
				<div>
					<p>+91 8448402723</p>
					<p>+91 9962299997</p>
				</div>
				<p>Mon - Sun: 8 AM - 11 PM</p>
				<div>
					<a>
						<Image src={instagram} alt="Instagram" />
					</a>
					<a>
						<Image src={facebook} alt="Facebook" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
