import React, {useState} from 'react';
import './modal.css'
import {AddTodoAction, EditTodoAction} from "../../actions/TodoActions";
import {useDispatch} from "react-redux";

const Modal = (props) => {

    const [todo, setTodo] = useState('')

    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(AddTodoAction(todo))
        setTodo('')
    }

    function handleEditSubmit(e) {
        e.preventDefault()
        dispatch(EditTodoAction(props.task, todo))
    }

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={props.close}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h3>{props.edit ? "Edit" : "Insert"} Your Task</h3>
                <form onSubmit={props.edit ? handleEditSubmit :handleSubmit}>
                    <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
                    <input type="submit" onClick={props.close}/>
                </form>
            </div>
        </div>
    )
}

export default Modal;