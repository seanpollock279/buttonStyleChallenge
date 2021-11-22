import React from 'react';
import './styles.css';

const STYLES = [
    "default",
    "outline",
    "text",
    "disableShadow",
    "disabled",
    "startIcon",
    "endIcon",
    "primary",
    "secondary",
    "danger"

]

const SIZES = [
    "sm",
    "md",
    "lg"
]

export default function Button( {children, type, onClick, buttonStyle, buttonSize }) {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <div>
            <button className={checkButtonStyle} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

