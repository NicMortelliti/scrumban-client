import React, { useState } from "react";

const TasksContext = React.createContext();

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState("");
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksProvider };
