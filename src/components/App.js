import React, { useEffect, useState } from "react";

import Spinner from "react-bootstrap/Spinner";

import NavBar from "./NavBar";
import NewTask from "./NewTask";
import ProjectSelectModal from "./ProjectSelectModal";
import TaskBoard from "./TaskBoard";
import TaskEditPanel from "./TaskEditPanel";

const URL = "http://localhost:9292";

const App = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);
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

  // Handle the selection of a project
  const handleProjectChange = (e) =>
    projects.map(
      (project) => project.id === parseInt(e) && setCurrentProject(project)
    );

  // Display New Task Form
  const RenderNewTaskForm = () =>
    newTaskOpen && (
      <NewTask
        users={users}
        project={currentProject}
        data={data}
        setData={setData}
        setOpenEdit={handleNewTaskOpen}
        url={URL}
      />
    );

  // Display Nav Bar
  const RenderNavBar = () => (
    <NavBar
      handleOpen={handleNewTaskOpen}
      projects={projects}
      currentProject={currentProject}
      handleChange={handleProjectChange}
    />
  );

  // Display Loading indicator
  const RenderLoading = () =>
    !projects && (
      <div className="align-middle">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  // Display Project Select Modal
  const RenderProjectSelect = () =>
    projects &&
    !currentProject && (
      <ProjectSelectModal
        projects={projects}
        handleChange={handleProjectChange}
      />
    );

  // Display Task Board
  const RenderTaskBoard = () =>
    currentProject && (
      <TaskBoard
        data={data}
        users={users}
        projects={projects}
        currentProject={currentProject}
        handleEditOpen={handleEditOpen}
      />
    );

  // Display Task Edit Panel
  const RenderTaskEdit = () =>
    openEdit && (
      <TaskEditPanel
        task={currentTask}
        setOpenEdit={handleEditOpen}
        data={data}
        setData={setData}
        users={users}
        onDeleteTask={handleDeleteTask}
        url={URL}
      />
    );

  // Delete tasks
  const handleDeleteTask = (id) => {
    const updatedData = data.filter((eachTask) => eachTask.id !== id);
    setOpenEdit(!openEdit);
    setData(updatedData);
  };

  // Display Task Edit Panel
  const handleEditOpen = (e, task) => {
    e && e.preventDefault();
    task && setCurrentTask(task);
    setOpenEdit(!openEdit);
  };

  return (
    <div className="bg-light">
      <RenderNavBar />
      <RenderNewTaskForm />
      <RenderTaskBoard />
      <RenderTaskEdit />
      <RenderProjectSelect />
      <RenderLoading />
    </div>
  );
};

export default App;
