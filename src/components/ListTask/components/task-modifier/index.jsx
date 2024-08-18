import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../../../redux/actions";
import { FaRegStar, FaStar } from "react-icons/fa";

import Form from "react-bootstrap/Form";

import "./task-modifier.css";

const TaskEdit = ({
  task,
  isCompleted,
  isImportant,
  onClose,
  onCheckboxClick,
  onStarClick,
}) => {
  const [taskText, setTaskText] = useState(task.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editTask(task.id, { text: taskText }));
    onClose();
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    onClose();
  };

  return (
    <div className="task-edit">
      <div className="task-check">
        <Form.Check
          aria-label="option 1"
          checked={isCompleted}
          onChange={(event) => {
            if (event !== undefined) onCheckboxClick(task, event);
          }}
        />
        <div className="modal-content">
          <h2>Edit Task</h2>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        </div>
        <div
          className="star-icon"
          onClick={(event) => {
            if (event !== undefined) onStarClick(task, event);
          }}
        >
          {isImportant ? <FaStar /> : <FaRegStar />}
        </div>

        <button onClick={handleSave}>Save</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TaskEdit;
