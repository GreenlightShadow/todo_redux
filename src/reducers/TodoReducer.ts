const TodoReducer = (state = {todos: []}, action: any) => {
    switch (action.type) {
        case "ADD_TODO":
            return {todos: action.payload}
        case "REMOVE_TODO":
            return {todos: action.payload}
        case "UPDATE_TODO":
            return {todos: action.payload}
        case "EDIT_TODO":
            return {todos: action.payload}
        default:
            return state
    }
}

export default TodoReducer