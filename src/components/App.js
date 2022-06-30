import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import NewTask from "./NewTask";
import TaskBoard from "./TaskBoard";
import TaskEdit from "./TaskEdit";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

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
    setNewTaskOpen(!newTaskOpen);
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

  // Display Task Edit Panel
  // const RenderTaskEdit = () => {
  //   openEdit && (
  //     <TaskEdit
  //       task={task}
  //       setOpenEdit={handleEditTaskOpen}
  //       data={data}
  //       users={users}
  //       setData={setData}
  //       onDeleteTask={onDeleteTask}
  //       url={url}
  //     />
  //   );
  // };

  return (
    <div>
      <NavBar handleOpen={handleNewTaskOpen} />
      <DisplayNewTaskForm />
      <TaskBoard data={data} users={users} projects={projects} />
    </div>
  );
};

export default App;
