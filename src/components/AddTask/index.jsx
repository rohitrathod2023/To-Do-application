import React, { useState } from "react";
import "./addtask.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { BsRepeat } from "react-icons/bs";
import Dropdown from "../../common/assets/icons/dropdown.svg";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="AddTask-container">
      <div className="add-task">
        <div className="add-task-text">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a Task"
            className="add-task-inpute"
          />
        </div>
        <div className="add-task-bottom-section d-flex justify-content-between">
          <div className="bottom-left-part d-flex justify-content-between">
            <div className="add-task-notification">
              <IoMdNotificationsOutline />
            </div>
            <div className="repeat-task">
              <BsRepeat />
            </div>
            <div className="add-task-calender">
              <CiCalendar />
            </div>
          </div>
          <div className="add-task-button">
            <button onClick={handleAddTask} className="btn-add-task">
              ADD TASK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
