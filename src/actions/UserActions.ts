import {AppDispatch} from "../store";

export const CreateUserAction = (user: string) => (dispatch: AppDispatch) => {
    if (user !== '') {
        dispatch({
            type: "ADD_USER",
            payload: user,
        })
    }
}