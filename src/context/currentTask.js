import React, { useState } from "react";

const CurrentTaskContext = React.createContext();

function CurrentTaskProvider({ children }) {
  const [currentTask, setCurrentTask] = useState("");
  return (
    <CurrentTaskContext.Provider value={{ currentTask, setCurrentTask }}>
      {children}
    </CurrentTaskContext.Provider>
  );
}

export { CurrentTaskContext, CurrentTaskProvider };
