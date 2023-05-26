import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from "./pages/Main/MainPage";
import TaskList from "./pages/Tasks/TaskList";


function App() {
    return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/active" element={<TaskList active={true}/>} />
      <Route path="/inactive" element={<TaskList active={false}/>} />
    </Routes>
  );
}

export default App;
