import React from "react";

import Offcanvas from "react-bootstrap/Offcanvas";

import TaskEditForm from "./TaskEditForm";

function TaskEditPanel({
  task,
  setOpenEdit,
  data,
  setData,
  users,
  onDeleteTask,
  url,
}) {
  return (
    <Offcanvas
      className="off-canvas"
      show
      autoFocus={true}
      placement="end"
      onHide={setOpenEdit}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="nord6">
          Editing {task.project.name}-{task.id}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <TaskEditForm
        task={task}
        setOpenEdit={setOpenEdit}
        data={data}
        setData={setData}
        users={users}
        onDeleteTask={onDeleteTask}
        url={url}
      />
    </Offcanvas>
  );
}

export default TaskEditPanel;
