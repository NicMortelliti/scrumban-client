import React, { useEffect, useState } from "react";
import { Grommet } from "grommet";
import NavBar from "./NavBar";
import Board from "./Board";
import EditForm from "./EditForm";

// Set server URL
const URL = `${process.env.REACT_APP_API_URL}`;

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState();
  const [editOpen, setEditOpen] = useState(false);

  // Async data fetch from server upon app loading
  useEffect(() => {
    fetch(`${URL}/`)
      .then((r) => r.json())
      .then((data) => setTasks(data));
  }, []);

  // Current task is used to pre-populate the edit form
  useEffect(() => {
    console.log(currentTask);
  }, [setCurrentTask]);

  return (
    <Grommet theme={theme} full>
      <NavBar />
      <Board
        tasks={tasks}
        setCurrentTask={setCurrentTask}
        setEditOpen={setEditOpen}
      />
      {editOpen && (
        <EditForm setOpen={setEditOpen} task={currentTask} url={URL} />
      )}
    </Grommet>
  );
};

export default App;
