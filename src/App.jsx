import "./App.css";

import React from "react";
import AddTask from "./components/AddTask/index.jsx";
import TaskList from "./components/ListTask/index.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/index.jsx";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <AddTask /> */}
      {/* <TaskList /> */}
    </div>
  );
};

export default App;

// // import { useSelector, useDispatch } from "react-redux";

// function App() {
//   // const dispatch = useDispatch();
//   // const counter = useSelector((state) => state);
//   return (
//     <div>
//       <h1>this is to-do app</h1>
//     </div>
//   );
// }

// export default App;
