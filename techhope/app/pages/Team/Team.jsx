import React from "react";
import styles from "./Team.module.css";

const TeamMember = ({ name, position }) => {
	return (
		<div className={styles.teamMember}>
			<h2>{name}</h2>
			<p>{position}</p>
		</div>
	);
};

const Team = () => {
	return (
		<section className={styles.container}>
			<h1>The Team</h1>

			<div className={styles.teamContainer}>
				<TeamMember name="Lakshay Yadav" position={"Founder & President"} />
				<TeamMember name="Shayan Abdeali Bakshi" position={"Vice President"} />
				<TeamMember name="Pranav Negi" position={"Finance Manager"} />
				<TeamMember name="Anikait Dhasmana" position={"Marketing Head"} />
				<TeamMember name="Aryaveer Singh" position={"HR Manager"} />
			</div>
		</section>
	);
};

export default Team;
