// import * as actions from "./actionTypes";

// const initialState = {
//   todos: [
//     {
//       id: "1",
//       text: "first task",
//       completed: false,
//     },
//   ],
// };

// console.log(initialState);

// export const Reducers = (state = initialState, action) => {
//   switch (action.type) {
//     case actions.Add_Task:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: action.payload.id,
//             text: action.payload.text,
//             completed: false,
//           },
//         ],
//       };
//     case actions.Delete_Task:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload.id),
//       };

//     default:
//       return state;
//   }
// };

import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./actions";

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, ...action.payload.updatedTask }
            : task
        ),
      };
    default:
      return state;
  }
};

export default tasksReducer;
