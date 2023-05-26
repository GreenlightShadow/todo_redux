import React from 'react';
import "./base.css";

function Button(props: { onClick: React.MouseEventHandler<HTMLButtonElement> | undefined; }) {
    return (
        <button type="submit" onClick={props.onClick}>
            Add New Task
        </button>
    );
}

export default Button;