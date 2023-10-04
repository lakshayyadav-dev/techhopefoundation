import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import cover_image from "../../../public/static/images/cover_image.png"
import BlueButton from "../BlueButton";
import DonationPopup from "../DonationPopup";

const Hero = () => {
	return (
		<section className={styles.hero} id="hero">
			<div className={styles.content}>
				<h1>
					Bridging Divides. Shaping Futures.{" "}
					<br className={styles.lineBreak}/><span className={styles.blue}>Our Tech for All Initiative.</span>
				</h1>

				<p>
					We envision a future where all the members of our community have equal access
					and knowledge to technology to enhance their lives. By doing our part to help
					with the digital divide of India, we aim to create a more inclusive society.
				</p>

                <BlueButton text={"Donate Now"} className={styles.btn}/>
			</div>

            <div className={styles.image}>
                <Image src={cover_image} alt="boy studying on computer" className={styles.coverImage}/>
            </div>

            <DonationPopup />
		</section>
	);
};

export default Hero;
