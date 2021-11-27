import React from "react"
import { Button } from "react-bootstrap"

export const BrownButton = ({text, onClick, type, disabled = false, light = false}) => {
    const threme = light ? 'dark': 'light';
    return(
        <Button 
        variant="none" 
        className={`m-2 g-btn-brown-${threme} g-btn-text`}
        onClick={onClick}
        disabled={disabled}
        type={type}>
            {text}
        </Button>
    )
}