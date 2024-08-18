import React from "react";
import "./todo-main.css";
import { IoMdArrowDropdown } from "react-icons/io";
import AddTaskContainer from "../addTask-home";
const ToDoMain = () => {
  return (
    <div className="todo-main-page">
      <div className="dropdown-container">
        <span className="todo-dropdown-text">
          To Do <IoMdArrowDropdown />
        </span>
      </div>
      <div className="add-task-container">
        <AddTaskContainer />
      </div>
      <div className="todo-container"></div>
      <div className="completed-task-container"></div>
    </div>
  );
};

export default ToDoMain;
