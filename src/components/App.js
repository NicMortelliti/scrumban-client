import React, { useEffect, useState } from "react";
import { Grommet } from "grommet";
import NavBar from "./NavBar";
import Board from "./Board";
import EditForm from "./EditForm";

// Set server URL
const URL = `${process.env.REACT_APP_API_URL}`;

// Set application branding
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
  const [editOpen, setEditOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState();

  // Async data fetch from server upon app loading
  useEffect(() => {
    fetch(`${URL}/`)
      .then((r) => r.json())
      .then((data) => setTasks(data));
  }, []);

  // Handle edit form change to tasks state
  const editFormChange = () => console.log("Feature not implemented yet");

  return (
    <Grommet theme={theme} full>
      <NavBar />
      <Board
        setCurrentTask={setCurrentTask}
        setEditOpen={setEditOpen}
        tasks={tasks}
      />
      {editOpen && (
        <EditForm
          currentTask={currentTask}
          setOpen={setEditOpen}
          url={URL}
          handleEditFormChange={editFormChange}
        />
      )}
    </Grommet>
  );
};

export default App;
