export const CreateUserAction = (user) => (dispatch) => {
    if (user !== '') {
        dispatch({
            type: "ADD_USER",
            payload: user,
        })
    }
}