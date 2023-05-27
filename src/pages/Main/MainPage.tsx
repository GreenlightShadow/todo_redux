import React from 'react';
import Form from "../../components/auth/Form";
import "./main.css"

function MainPage() {
    return (
        <div className="main">
            <div className="windowForm">
                <h1 className="textCenter">Authorisation</h1>
                <Form />
            </div>
        </div>
    );
}

export default MainPage;