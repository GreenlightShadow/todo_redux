import React, {useCallback, useState} from 'react';
import Input from "./Input";
import Submit from "./Submit";

import {useNavigate} from "react-router-dom";
import "./auth.css"
import {CreateUserAction} from "../../actions/UserActions";
import {useAppDispatch} from "../../hooks";

function Form() {
    const [user, setUser] = useState('')
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const handleOnClick = useCallback(() => navigate('/active', {replace: true}), [navigate]);


    function submitHandler(e: { preventDefault: () => void; }) {
        e.preventDefault()
        if (user === '') {
            return
        }
        dispatch(CreateUserAction(user))
        handleOnClick()
    }

    return (
        <form className="authForm" onSubmit={submitHandler}>
            <Input value={user} setUser={setUser}/>
            <Submit />
        </form>
    );
}

export default Form;