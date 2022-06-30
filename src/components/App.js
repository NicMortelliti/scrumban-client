import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import NewTask from "./NewTask";
import TaskBoard from "./TaskBoard";
import TaskEdit from "./TaskEdit";

const URL = "http://localhost:9292";

const App = () => {
  const [currentTask, setCurrentTask] = useState();
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [newTaskOpen, setNewTaskOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

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

  const handleEditOpen = (e, task) => {
    e.preventDefault();
    setCurrentTask(task);
    setOpenEdit(true);
  };

  return (
    <div>
      <NavBar handleOpen={handleNewTaskOpen} />
      <DisplayNewTaskForm />
      <TaskBoard
        data={data}
        users={users}
        projects={projects}
        handleEditOpen={handleEditOpen}
      />
      {openEdit && (
        <TaskEdit
          task={currentTask}
          setOpenEdit={setOpenEdit}
          data={data}
          setData={setData}
          users={users}
          projects={projects}
          onDeleteTask={handleDeleteTask}
          url={URL}
        />
      )}
    </div>
  );
};

export default App;
