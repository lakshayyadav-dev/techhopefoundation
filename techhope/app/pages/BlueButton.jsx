"use client"
import React from 'react'

const BlueButton = ({text, className, onClick, type}) => {
  return (
        <a href="#" className={`btn ${className}`} onClick={() => showPopup()}>{text}</a>
  )

  
  function showPopup() {
    document.querySelector(".donationPopup").classList.add("show");
}
}

export default BlueButton