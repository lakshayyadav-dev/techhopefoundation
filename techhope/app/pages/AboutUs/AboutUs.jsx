import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
	return (
		<section className={styles.container}>
			<h1 className={styles.title}>About Us</h1>

			<div className={styles.content}>
				<p>
					At Tech Hope Foundation, our journey is deeply rooted in our collective belief
					in the transformative power of technology. We're not just an organization; we're
					a group of high school students who saw a need and decided to be the change we
					wanted to see in the world.
				</p>

                <div>
                    <h3>Why We Started Tech Hope Foundation</h3>
                    <p>
                        Our story begins with a simple yet powerful realization: the digital divide is real, and its impact is felt by individuals who lack access to essential technology education, as well as those with disabilities who face additional barriers. As high school students, we recognized that this gap was preventing countless individuals from realizing their full potential, and it inspired us to take action.
                        <br/> <br/> 
                        We started Tech Hope Foundation to address this pressing issue head-on. We wanted to empower people, regardless of their background or abilities, to harness the incredible potential of technology for personal growth and education. Our organization is the embodiment of our unwavering commitment to creating a more inclusive and digitally empowered society.
                    </p>
                </div>

                <div>
                    <h3>Our Collective Dream</h3>
                    <p>
                        Our dream is to bridge the digital divide and pave the way for a future where every member of our community has equal access to technology. We envision a world where technology is a tool for empowerment, education, and personal growth, rather than a barrier.
                        <br/> <br/> 
                        Tech Hope Foundation is our way of turning this dream into reality. We invite you to join us in this journey of hope, progress, and transformation. Together, we can create a brighter, more inclusive world where technology knows no bounds.
                    </p>
                </div>
			</div>
		</section>
	);
};

export default AboutUs;
