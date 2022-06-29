import React, { useState } from "react";
import TaskEdit from "./TaskEdit";

import { Card } from "primereact/card";
import { Button } from "primereact/button";

function TaskCard({ task, data, users, setData, onDeleteTask, url }) {
  const [openEdit, setOpenEdit] = useState(false);

  // Handle opening/closing of edit task form
  const handleEditTaskOpen = (e) => {
    e.preventDefault();
    setOpenEdit(!openEdit);
  };

  // Define card footer components
  const footer = (
    <span>
      <Button
        label="Edit"
        icon="pi pi-pencil"
        className="p-button-text"
        onClick={(e) => handleEditTaskOpen(e)}
      />
    </span>
  );

  return (
    <Card
      key={task.id}
      title={task.description}
      subTitle={`Task #: ${task.id}`}
      footer={footer}>
      <p>Points: {task.story_points}</p>
      <p>Due: {task.due_date.slice(0, 10)}</p>
      <p>Assigned: {task.user ? task.user.username : "Unassinged"} </p>
      {openEdit && (
        <TaskEdit
          task={task}
          setOpenEdit={handleEditTaskOpen}
          data={data}
          users={users}
          setData={setData}
          onDeleteTask={onDeleteTask}
          url={url}
        />
      )}
    </Card>
  );
}

export default TaskCard;
