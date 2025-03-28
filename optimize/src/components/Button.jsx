import React from 'react'
import { memo } from 'react';

const Button = ({ text, someting }) => {
    console.log("Button called");

    return (
        <div>
            <button>{text}</button>
        </div>
    )
}

export default memo(Button)