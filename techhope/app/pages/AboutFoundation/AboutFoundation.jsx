import React from "react";
import Image from "next/image";
import styles from "./AboutFoundation.module.css";
import about_foundation from "../../../public/static/images/about_foundation.jpg";

const AboutFoundation = () => {
	return (
		<section className={styles.container} id="mission">
			<div className={styles.image}>
				<Image src={about_foundation} alt="about foundation" className={styles.imagePNG}/>
			</div>

			<div className={styles.content}>
				<h1 className={styles.title}>
					Fostering Universal Tech Fluency in Every Neighborhood
				</h1>
                
				<div className={styles.paragraphs}>
					<p>
                    We envision a future where every member of our community, regardless of their background or abilities, has equal access to technology. Our dream is to contribute to building a more inclusive society, where technology is a bridge rather than a barrier.
					</p>
					<p>
                    Our mission is clear: to provide essential technology education to those who are technologically undereducated and individuals with disabilities. We believe that by empowering individuals with the knowledge and tools to harness technology, we can unlock a world of opportunities for personal growth and education.
					</p>
                    <p>
                    From conduction classes to hosting workshops and webinars to distributing devices and educational resources, we are on a constant mission to close the digital gap. Our activities are designed to not only impart technical knowledge but also inspire a love for learning and innovation.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutFoundation;
