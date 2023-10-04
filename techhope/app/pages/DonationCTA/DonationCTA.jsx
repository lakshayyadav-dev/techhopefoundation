import React from "react";
import styles from "./DonationCTA.module.css";
import BlueButton from "../BlueButton";
import DonationPopup from "../DonationPopup";

const Stat = ({title, text}) => {
    return (
        <div className={styles.stat}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

const DonationCTA = () => {
	return (
		<section className={styles.container}>
			<h1>Give a child hope today.</h1>

            <div className={styles.stats}>
                <Stat title={"75%"} text={"Of the rural population of india is digitally illiterate."}/>
                <Stat title={"12 Lakh"} text={"Students of school. 6.97 lakh boys, 5.55 lakh girls, 44 transgender children."}/>
                <Stat title={"4.4%"} text={"Of the rural households own a computer."}/>
            </div>

            <div className={styles.buttons}>
                <BlueButton text={"Donate Now"} className={styles.btn}/>
                <BlueButton text={"Volunteer"} className={styles.btn}/>
            </div>

            <DonationPopup />
		</section>
	);
};

export default DonationCTA;
