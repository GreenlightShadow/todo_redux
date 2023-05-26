import React from 'react';

import "./auth.css"

function Input(props) {
    return (
        <input type="text" placeholder="Enter Your Name" value={props.value} onChange={(e) => props.setUser(e.target.value)}/>
    );
}

export default Input;