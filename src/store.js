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