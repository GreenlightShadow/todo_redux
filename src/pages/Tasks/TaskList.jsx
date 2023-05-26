import React, {useEffect, useState} from 'react';
import "./tasks.css"
import {useDispatch, useSelector} from "react-redux";
import {RemoveTodoAction, UpdateTodoAction} from "../../actions/TodoActions";
import {Link, useNavigate} from "react-router-dom";
import Modal from "../../components/modal/Modal";
import Button from "../../components/base/Button";
import {FaEdit, FaTrash} from 'react-icons/fa'

function TaskList(props) {

    const [modalActive, setModalActive] = useState(false)
    const [modalEditActive, setModalEditActive] = useState(false)
    const [task, setTask] = useState('');
    const dispatch = useDispatch()

    const Todo = useSelector(state => state.Todo)
    const {todos} = Todo

    const user = useSelector(state => state.User)

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    function removeHandler(t) {
        dispatch(RemoveTodoAction(t))
    }

    function updateHandler(t) {
        dispatch(UpdateTodoAction(t))
    }

    const activeTasksLength = todos.filter(todo => todo.status === true).length

    return (
        <div className="main">
            <div className="todo-container">
                <h1 className="text-center">Hello {user}</h1>
                <h3 className="text-center">Currently You Have {activeTasksLength} active task{activeTasksLength !== 1 ? "s" : ''}</h3>
                <h3 className="text-center">{todos.length} in Total</h3>
                <div className="flex-separate">
                    <Link className="link-button" to={ !props.active ? '/active' : '/inactive'}>{ !props.active ? 'Active' : 'Inactive'} Tasks</Link>
                    <Button onClick={() => setModalActive(true)} />
                </div>
                <ul id="todo-list">
                    {todos && todos.filter(todo => todo.status === props.active).map(t => (
                        <li key={t.id} className="list-item">
                            <span onClick={() => updateHandler(t)} className="todo-text" style={t.status ? {textDecoration: "none"} : {textDecoration: "line-through"}}>{t.todo}</span>
                            <div className="actions">
                                <button className="button edit-button" type="button" onClick={() => {
                                    setTask(t)
                                    setModalEditActive(true)
                                }}>{<FaEdit />}</button>
                                <button className="button delete-button" type="button" onClick={() => removeHandler(t)}>{<FaTrash />}</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Modal edit={false} active={modalActive} close={() => setModalActive(false)} />
            <Modal task={task} edit={true} active={modalEditActive} close={() => setModalEditActive(false)} />
        </div>
    );
}

export default TaskList;