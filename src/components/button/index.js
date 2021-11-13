import React from 'react'
import './style.css'
const Button = ({ title, type, className }) => {
    return (
        <button className={`btn ${type === "primary" ? "bg-none" : "bg-clr"} ${className}`}>
            {title}
        </button>
    )
}

export default Button
