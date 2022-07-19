import React, { useEffect, useState } from "react";

import Spinner from "react-bootstrap/Spinner";

import NavBar from "./NavBar";
import ProjectSelectModal from "./ProjectSelectModal";
import TaskBoard from "./TaskBoard";
import TaskPanel from "./TaskPanel";
import ProjectPanel from "./ProjectPanel";

const URL = `${process.env.REACT_APP_API_URL}`;

const App = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);
  const [openPanel, setOpenPanel] = useState(false);
  const [addNewProject, setAddNewProject] = useState(false);

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
    setCurrentTask("");
    setOpenPanel(!openPanel);
  };

  // Handle opening/closing of new project form
  const handleNewProjectFormOpen = (e) => setAddNewProject(!addNewProject);

  // Display Task Edit Panel
  const handleEditOpen = (e, task) => {
    e && e.preventDefault();
    task && setCurrentTask(task);
    setOpenPanel(!openPanel);
  };

  // Handle the selection of a project
  const handleProjectChange = (e) =>
    projects.map(
      (project) => project.id === parseInt(e) && setCurrentProject(project)
    );

  // Display Nav Bar
  const RenderNavBar = () => (
    <NavBar
      handleOpen={handleNewTaskOpen}
      projects={projects}
      currentProject={currentProject}
      handleChange={handleProjectChange}
      handleAddProject={setAddNewProject}
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
  const RenderTaskEditForm = () =>
    openPanel &&
    currentTask && (
      <TaskPanel
        data={data}
        onDeleteTask={handleDeleteTask}
        project={currentProject}
        setData={setData}
        setOpenPanel={handleEditOpen}
        task={currentTask}
        url={URL}
        users={users}
        verb="Editing"
      />
    );

  // Display New Task Form
  const RenderNewTaskForm = () =>
    openPanel &&
    !currentTask && (
      <TaskPanel
        data={data}
        project={currentProject}
        setData={setData}
        setOpenPanel={handleNewTaskOpen}
        url={URL}
        users={users}
        verb="Create new task for"
      />
    );

  // Display New Project Form
  const RenderNewProjectForm = () =>
    addNewProject && (
      <ProjectPanel
        url={URL}
        projects={projects}
        setProjects={setProjects}
        setOpenPanel={handleNewProjectFormOpen}
        setCurrentProject={setCurrentProject}
        verb="Create new project"
      />
    );

  // Delete tasks
  const handleDeleteTask = (id) => {
    const updatedData = data.filter((eachTask) => eachTask.id !== id);
    setOpenPanel(!openPanel);
    setData(updatedData);
  };

  return (
    <div className="bg-custom-light">
      <RenderNavBar />
      <RenderNewTaskForm />
      <RenderTaskBoard />
      <RenderTaskEditForm />
      <RenderProjectSelect />
      <RenderNewProjectForm />
      <RenderLoading />
    </div>
  );
};

export default App;
