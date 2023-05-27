import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import TaskList from "./pages/Tasks/TaskList";
import MainPage from "./pages/Main/MainPage";



describe("App", () => {
    it('renders auth page', () => {
        render(<Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>);
        expect(screen.getByText(/Authorisation/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Enter Your Name")).toBeEmptyDOMElement()
        expect(screen.getByText("Submit")).toBeInTheDocument()
        expect(screen.getByDisplayValue("")).toBeInTheDocument()
    });
})

describe("TaskList", () => {
    it('render correct state by active props', () => {
        render(<Provider store={store}>
            <BrowserRouter>
                <TaskList active={true} />
            </BrowserRouter>
        </Provider>);
        expect(screen.queryByText("Inactive Tasks")).toBeInTheDocument()
        expect(screen.queryByText("Active Tasks")).not.toBeInTheDocument()
    });
    it('render correct state by inactive props', () => {
        render(<Provider store={store}>
            <BrowserRouter>
                <TaskList active={false} />
            </BrowserRouter>
        </Provider>);
        expect(screen.queryByText("Active Tasks")).toBeInTheDocument()
        expect(screen.queryByText("Inactive Tasks")).not.toBeInTheDocument()
    });
})

describe("MainPage", () => {
    it('render responsive input', () => {
        render(<Provider store={store}>
            <BrowserRouter>
                <MainPage />
            </BrowserRouter>
        </Provider>);
        const input = screen.getByRole('textbox')

        input.focus()

        expect(input).toHaveFocus()
    });
})