import React from "react";

import Offcanvas from "react-bootstrap/Offcanvas";

import TaskForm from "./TaskForm";

function TaskPanel({
  data,
  onDeleteTask,
  project,
  setData,
  setOpenPanel,
  task,
  url,
  users,
  verb,
}) {
  // Determine which form to render
  const RenderForm = () => {
    if (verb === "Editing") {
      return (
        <TaskForm
          data={data}
          onDeleteTask={onDeleteTask}
          setData={setData}
          setOpenPanel={setOpenPanel}
          task={task}
          url={url}
          users={users}
        />
      );
    } else {
      return (
        <TaskForm
          data={data}
          project={project}
          setData={setData}
          setOpenPanel={setOpenPanel}
          url={url}
          users={users}
        />
      );
    }
  };

  return (
    <Offcanvas
      className="off-canvas"
      show
      autoFocus
      placement="end"
      onHide={setOpenPanel}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="nord6">
          {verb} {project.name}
          {task && `-${task.id}`}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <RenderForm />
    </Offcanvas>
  );
}

export default TaskPanel;
