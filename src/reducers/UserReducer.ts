const UserReducer = (state = {user: ''}, action: any) => {
    switch (action.type) {
        case "ADD_USER":
            return action.payload
        default:
            return state
    }
}

export default UserReducer