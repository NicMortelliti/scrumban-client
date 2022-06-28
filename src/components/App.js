import React, { useContext, useEffect, useState } from "react";
import { Grommet } from "grommet";
import NavBar from "./NavBar";
import Board from "./Board";
import EditForm from "./EditForm";
import { TasksContext } from "../context/tasks";

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
  const [editOpen, setEditOpen] = useState(false);
  const { setTasks } = useContext(TasksContext);

  // Async data fetch from server upon app loading
  useEffect(() => {
    fetch(`${URL}/`)
      .then((r) => r.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <Grommet theme={theme} full>
      <NavBar />
      <Board setEditOpen={setEditOpen} />
      {editOpen && <EditForm setOpen={setEditOpen} url={URL} />}
    </Grommet>
  );
};

export default App;
