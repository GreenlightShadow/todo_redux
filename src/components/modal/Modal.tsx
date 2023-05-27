import React, {useEffect, useState} from 'react';
import './modal.css'
import {AddTodoAction, EditTodoAction} from "../../actions/TodoActions";
import {useAppDispatch} from "../../hooks";

const Modal = (props: {
    task: {
        id: string;
        status: boolean;
        todo: string;
    };
    active: any;
    close: React.MouseEventHandler<HTMLDivElement>;
    edit: boolean;
}) => {

    const [todo, setTodo] = useState("")
    const [changed, setChanged] = useState(false)

    const dispatch = useAppDispatch()

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()
        dispatch(AddTodoAction(todo))
        setTodo('')
        setChanged(false)
    }

    function handleEditSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()
        dispatch(EditTodoAction(props.task, todo))
        setChanged(false)
    }

    useEffect(() => {
        if (props.task.todo !== "" && !changed && props.edit) {
            setTodo(props.task.todo)
        }
    })

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={props.close}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h3>{props.edit ? "Edit" : "Insert"} Your Task</h3>
                <form onSubmit={props.edit ? handleEditSubmit :handleSubmit}>
                    <input type="text" onChange={(e) => {
                        setTodo(e.target.value)
                        setChanged(true)
                    }} value={todo}/>
                    <input type="submit" onClick={props.close}/>
                </form>
            </div>
        </div>
    )
}

export default Modal;