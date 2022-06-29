import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import NavBar from "./NavBar";
import NewTask from "./NewTask";

const URL = "http://localhost:9292";

const App = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [newTaskOpen, setNewTaskOpen] = useState(false);

  // Fetch data from server
  useEffect(() => {
    [
      {
        category: "/",
        setter: setData,
      },
      {
        category: "/users",
        setter: setUsers,
      },
      {
        category: "/projects",
        setter: setProjects,
      },
    ].forEach((state) => {
      fetch(`${URL}${state.category}`)
        .then((r) => r.json())
        .then((data) => state.setter(data));
    });
  }, []);

  // Handle opening/closing of new task form
  const handleNewTaskOpen = (e) => {
    e.preventDefault();
    setNewTaskOpen(!newTaskOpen);
  };

  // Display tasks
  const DisplayItems = () => {
    return (
      data &&
      data.map((eachTask) => (
        <TaskCard
          key={eachTask.id}
          task={eachTask}
          data={data}
          users={users}
          setData={setData}
          onDeleteTask={handleDeleteTask}
          url={URL}
        />
      ))
    );
  };

  // Display New Task Form
  const DisplayNewTaskForm = () => {
    return (
      newTaskOpen && (
        <NewTask
          users={users}
          projects={projects}
          data={data}
          setData={setData}
          handleClose={handleNewTaskOpen}
          url={URL}
        />
      )
    );
  };

  // Delete tasks
  const handleDeleteTask = (id) => {
    const updatedData = data.filter((eachTask) => eachTask.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <NavBar handleOpen={handleNewTaskOpen} />
      <DisplayNewTaskForm />
      <DisplayItems />
    </div>
  );
};

export default App;
