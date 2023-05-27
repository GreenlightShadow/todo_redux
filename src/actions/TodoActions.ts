import {v1 as uuid} from "uuid";
import {AppDispatch, RootState} from "../store";

export const AddTodoAction = (todo: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const {
        Todo: {todos},
    } = getState()



    if (todo !== '') {
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

export const RemoveTodoAction = (todo: { id: string; status: boolean; todo: string}) => (dispatch: AppDispatch, getState: () => RootState) => {
    const {
        Todo: {todos},
    } = getState()

    dispatch({
        type: "REMOVE_TODO",
        payload: todos.filter((item: { id: string; status: boolean; todo: string}) => item.id !== todo.id)
    })
}

export const UpdateTodoAction = (todo: { id: string; status: boolean; todo: string}) => (dispatch: AppDispatch, getState: () => RootState) => {
    const {
        Todo: {todos},
    } = getState()

    todos.map((item: { id: string; status: boolean; todo: string}) => (item.id === todo.id ? item.status = !item.status : item))

    dispatch({
        type: "UPDATE_TODO",
        payload: todos,
    })
}

export const EditTodoAction = (todo: { id: string; status: boolean; todo: string}, newValue: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const {
        Todo: {todos},
    } = getState()

    todos.map((item: { id: string; status: boolean; todo: string}) => (item.id === todo.id ? item.todo = newValue : item.todo))

    dispatch({
        type: "EDIT_TODO",
        payload: todos
    })
}