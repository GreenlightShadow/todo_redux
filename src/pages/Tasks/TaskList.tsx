import React, {useEffect, useState} from 'react';
import "./tasks.css"
import {useSelector} from "react-redux";
import {RemoveTodoAction, UpdateTodoAction} from "../../actions/TodoActions";
import {Link, useNavigate} from "react-router-dom";
import Modal from "../../components/modal/Modal";
import Button from "../../components/base/Button";
import {FaEdit, FaTrash} from 'react-icons/fa'
import {useAppDispatch} from "../../hooks";

function TaskList(props: {active: boolean}) {

    const [modalActive, setModalActive] = useState(false)
    const [modalEditActive, setModalEditActive] = useState(false)
    const [task, setTask] = useState({
        id: "",
        status: false,
        todo: ""
    });
    const dispatch = useAppDispatch()

    const Todo = useSelector((state: {Todo: {todos: any[]}}) => state.Todo)
    const {todos} = Todo

    const user = useSelector((state: {User: string}) => state.User)

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    function removeHandler(t: { id: string; status: boolean; todo: string; }) {
        dispatch(RemoveTodoAction(t))
    }

    function updateHandler(t: { id: string; status: boolean; todo: string; }) {
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
                    {todos && todos.filter(todo => todo.status === props.active).map((t: {id: string, status: boolean, todo: string}) => (
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
            <Modal task={task} edit={false} active={modalActive} close={() => setModalActive(false)} />
            <Modal task={task} edit={true} active={modalEditActive} close={() => setModalEditActive(false)} />
        </div>
    );
}

export default TaskList;