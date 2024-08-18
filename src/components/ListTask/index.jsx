// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTask, editTask } from "../../redux/actions";
// import "./listtask.css";

// const TaskList = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks);

//   const handleDelete = (taskId) => {
//     dispatch(deleteTask(taskId));
//   };

//   const handleEdit = (taskId) => {
//     const updatedTask = prompt("Edit task:");
//     if (updatedTask) {
//       dispatch(editTask(taskId, { text: updatedTask }));
//     }
//   };

//   return (
//     <ul className="task-list">
//       {tasks.map((task) => (
//         <li key={task.id} className="task-item">
//           {task.text}
//           {/* <button onClick={() => handleEdit(task.id)}>Edit</button>
//           <button onClick={() => handleDelete(task.id)}>Delete</button> */}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TaskList;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import TaskModal from "./components/task-modifier/index";
// import "./listtask.css";
// import { FaRegStar, FaStar } from "react-icons/fa";
// import Form from "react-bootstrap/Form";

// const TaskList = () => {
//   const [selectedTask, setSelectedTask] = useState(null);
//   const tasks = useSelector((state) => state.tasks);

//   const handleTaskClick = (task) => {
//     setSelectedTask(task);
//   };

//   const handleEditModel = () => {
//     setSelectedTask(null);
//   };

//   const [important, setImportant] = useState(null);

//   const makeImportant = () => {
//     setImportant((prevState) => !prevState);
//   };

//   return (
//     <div className="task-list-page ">
//       <div className="task-list-container align-items-center">
//         {tasks.map((task) => (
//           <div
//             key={task.id}
//             className="task-item"
//             onClick={() => handleTaskClick(task)}
//           >
//             {task.text}
//             <div className="task-check">
//               <Form.Check aria-label="option 1" />
//             </div>
//             <div className="star-icon" onClick={makeImportant}>
//               {important ? <FaStar /> : <FaRegStar />}
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedTask ? (
//         <TaskModal task={selectedTask} onClose={handleEditModel} />
//       ) : null}
//     </div>
//   );
// };

// export default TaskList;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskEdit from "./components/task-modifier/index";
import { FaRegStar, FaStar } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { deleteTask, editTask } from "../../redux/actions";
import "./listtask.css";

const TaskList = (prop) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [importantTasks, setImportantTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleTaskClick = (task) => {
    const obj = {
      task: task,
      isCompleted: completedTasks.includes(task),
      isImportant: importantTasks.includes(task),
      // onClose: handleEditModel,
      onCheckboxClick: handleCheckboxClick,
      onStarClick: handleStarClick,
    };
    // setSelectedTask(task);
    prop.handleSeleectedTask(obj);
  };

  // const handleEditModel = () => {
  //   setSelectedTask(null);
  // };

  const handleCheckboxClick = (task, event) => {
    event.stopPropagation();
    setCompletedTasks((prevState) => [...prevState, task]);
    dispatch(deleteTask(task.id));
  };

  const handleStarClick = (task, event) => {
    event.stopPropagation();
    if (!importantTasks.find((t) => t.id === task.id)) {
      setImportantTasks((prevState) => [...prevState, task]);
    }
  };

  return (
    <div className="task-list-page">
      <div className="task-list-container">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="task-item"
            onClick={() => handleTaskClick(task)}
          >
            <div className="task-check">
              <Form.Check
                aria-label="option 1"
                onClick={(event) => handleCheckboxClick(task, event)}
              />
            </div>
            <span className="task-text">{task.text}</span>
            <div
              className="star-icon"
              onClick={(event) => handleStarClick(task, event)}
            >
              {importantTasks.find((t) => t.id === task.id) ? (
                <FaStar />
              ) : (
                <FaRegStar />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="task-list-container">
        <h3 className="task-complete-text">Completed</h3>
        {completedTasks.map((task) => (
          <div key={task.id} className="task-item completed">
            <div className="task-check">
              <Form.Check checked disabled />
            </div>
            <span className="task-text">{task.text}</span>
          </div>
        ))}
      </div>
      <div className="task-list-container">
        <h3>Important Tasks</h3>
        {importantTasks.map((task) => (
          <div key={task.id} className="task-item">
            <div className="task-check">
              <Form.Check aria-label="option 1" disabled />
            </div>
            <span className="task-text">{task.text}</span>
            <div className="star-icon">
              <FaStar />
            </div>
          </div>
        ))}
      </div>
      {/* <div></div>
      <TaskEdit
          task={selectedTask}
          isCompleted={completedTasks.includes(selectedTask)}
          isImportant={importantTasks.includes(selectedTask)}
          onClose={handleEditModel}
          onCheckboxClick={handleCheckboxClick}
          onStarClick={handleStarClick}
        /> */}

      {/* {selectedTask && (
        <TaskEdit task={selectedTask} onClose={handleEditModel} />
      )} */}
    </div>
  );
};

export default TaskList;
