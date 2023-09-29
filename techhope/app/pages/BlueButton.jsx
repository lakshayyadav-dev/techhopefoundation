import React from 'react'

const BlueButton = ({text, className}) => {
  return (
        <a href="#" className={`btn ${className}`}>{text}</a>
  )
}

export default BlueButton