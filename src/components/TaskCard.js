import React, { useState } from "react";
import TaskEdit from "./TaskEdit";

function TaskCard({ task, data, users, setData, onDeleteTask, url }) {
  const [openEdit, setOpenEdit] = useState(false);

  // Handle opening/closing of edit task form
  const handleEditTaskOpen = (e) => {
    e.preventDefault();
    setOpenEdit(!openEdit);
  };

  return (
    <div key={task.id}>
      <h3>
        Task {task.id}: {task.description}
      </h3>
      <p>Points: {task.story_points}</p>
      <p>Due: {task.due_date.slice(0, 10)}</p>
      <p>Assigned: {task.user ? task.user.username : "Unassinged"} </p>
      <button onClick={(e) => handleEditTaskOpen(e)}>Edit</button>
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
    </div>
  );
}

export default TaskCard;
