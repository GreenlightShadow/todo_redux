import {combineReducers, applyMiddleware} from "redux"
import { legacy_createStore as createStore } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import TodoReducer from "./reducers/TodoReducer";
import thunk from "redux-thunk";
import UserReducer from "./reducers/UserReducer";

const reducer = combineReducers({
    Todo: TodoReducer,
    User: UserReducer
})

const defaultState = {User: false}

const middleware = [thunk]

export const store = createStore(reducer, defaultState, composeWithDevTools(applyMiddleware(...middleware)))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch