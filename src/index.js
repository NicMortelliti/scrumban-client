import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { CurrentTaskProvider } from "./context/currentTask";
import { TasksProvider } from "./context/tasks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CurrentTaskProvider>
    <TasksProvider>
      <App />
    </TasksProvider>
  </CurrentTaskProvider>
);
