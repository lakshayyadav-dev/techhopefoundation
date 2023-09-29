import React from "react";
import Image from "next/image";
import styles from "./AboutFoundation.module.css";
import about_foundation from "../../../public/static/images/about_foundation.jpg";

const AboutFoundation = () => {
	return (
		<section className={styles.container}>
			<div className={styles.image}>
				<Image src={about_foundation} alt="about foundation" className={styles.imagePNG}/>
			</div>

			<div className={styles.content}>
				<h1 className={styles.title}>
					Fostering Universal Tech Fluency in Every Neighborhood
				</h1>
                
				<div className={styles.paragraphs}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
                    <p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutFoundation;
