import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
        projects={projects}
        data={data}
        setData={setData}
        handleClose={handleNewTaskOpen}
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
  const RenderLoading = () => <p>Loading...</p>;

  // Display Project Select Modal
  const RenderProjectSelect = () => {
    if (projects && !currentProject) {
      return (
        <ProjectSelectModal
          projects={projects}
          handleChange={handleProjectChange}
        />
      );
    } else {
      return <RenderLoading />;
    }
  };

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
        projects={projects}
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

  const handleEditOpen = (e, task) => {
    e && e.preventDefault();
    task && setCurrentTask(task);
    setOpenEdit(!openEdit);
  };

  return (
    <div>
      <RenderNavBar />
      <RenderNewTaskForm />
      <RenderTaskBoard />
      <RenderTaskEdit />
      <RenderProjectSelect />
    </div>
  );
};

export default App;
