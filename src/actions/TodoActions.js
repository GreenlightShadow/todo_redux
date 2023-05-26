import {v1 as uuid} from "uuid";

export const AddTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: {todos},
    } = getState()

    const hasTodo = todos.find((i)=>i.todo === true)

    if (!hasTodo && todo !== '') {
        dispatch({
            type: "ADD_TODO",
            payload: [
                {
                    id: uuid(),
                    status: true,
                    todo
                }, ...todos],
        })
    }
}

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: {todos},
    } = getState()

    dispatch({
        type: "REMOVE_TODO",
        payload: todos.filter((i) => i.id !== todo.id)
    })
}

export const UpdateTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: {todos},
    } = getState()

    todos.map((item) => (item.id === todo.id ? item.status = !item.status : item))

    dispatch({
        type: "UPDATE_TODO",
        payload: todos,
    })
}

export const EditTodoAction = (todo, newValue) => (dispatch, getState) => {
    const {
        Todo: {todos},
    } = getState()

    todos.map((item) => (item.id === todo.id ? item.todo = newValue : item.todo))

    dispatch({
        type: "EDIT_TODO",
        payload: todos
    })
}