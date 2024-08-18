import React from "react";
import "./home.css";
import Navbar from "../../common/components/Navbar";
import ToDoMain from "./components/todo-main/index";
import AddTask from "../AddTask";
import Dropdown from "../../common/assets/icons/dropdown.svg";
import TaskList from "../ListTask";
import TaskEdit from "../ListTask/components/task-modifier/index";

const Home = () => {
  const [selectedTask, setSelectedTask] = React.useState(null);

  const handleEditModel = () => {
    setSelectedTask(null);
  };
  const handleSeleectedTask = (task) => {
    setSelectedTask(task);
  };
  return (
    <div className="home-page">
      <Navbar />

      <div className="add-task-section">
        <div className="to-do-selector">
          <span className="to-do-text ">To Do</span>
          <img
            src={Dropdown}
            alt="dropdown-icon"
            className="to-do-dropdown-icon mx-2"
          />
        </div>
        <div className="home-main-content">
          <div className="add-task-main-section">
            <AddTask />
            <TaskList handleSeleectedTask={handleSeleectedTask} />
          </div>
          <div className="edit-task-container">
            {selectedTask && (
              <TaskEdit
                task={selectedTask.task}
                isCompleted={selectedTask.isCompleted}
                isImportant={selectedTask.isImportant}
                onClose={handleEditModel}
                onCheckboxClick={selectedTask.onCheckboxClick}
                onStarClick={selectedTask.onStarClick}
              />
            )}
          </div>
        </div>
      </div>

      {/* <ToDoMain /> */}
    </div>
  );
};

export default Home;
