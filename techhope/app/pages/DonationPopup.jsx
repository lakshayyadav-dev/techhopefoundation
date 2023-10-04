"use client"
import React from "react";
import close from "../../public/static/images/close.svg";
import Image from "next/image";

function closePopup() {
    document.querySelector(".donationPopup").classList.remove("show");
}

const DonationPopup = () => {
	return (
		<div className="donationPopup">
			<div className="closePopup" onClick={() => closePopup()}>
				<Image src={close} alt="close popup" className="closePopupImage" />
			</div>
			<h1>
				Please <strong>donate</strong> on this number: <strong>+91 8448402723</strong>
			</h1>
            <h1>
                For <strong>volunteering</strong>, please contact: <strong>+91 8448402723</strong> or email us at <strong>techhopefoundation@gmail.com </strong>
            </h1>
			<p>Thank You!</p>
		</div>
	);
};

export default DonationPopup;
