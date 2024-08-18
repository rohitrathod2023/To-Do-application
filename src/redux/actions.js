// export * as actions from "./actionTypes";

// export const addTask = (text) => ({
//   type: actions.Add_Task,
//   payload: { text },
// });

// export const deleteTask = (id) => ({
//   type: actions.Delete_Task,
//   payload: { id },
// });

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const editTask = (taskId, updatedTask) => ({
  type: EDIT_TASK,
  payload: { taskId, updatedTask },
});
