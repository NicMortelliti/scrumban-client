import React, { useState } from "react";
import TaskEdit from "./TaskEdit";

function TaskCard({ task, data, setData }) {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div>
      <p key={task.id}>{task.description}</p>
      <button onClick={() => setOpenEdit(true)}>Edit</button>
      {openEdit && (
        <TaskEdit
          task={task}
          setOpenEdit={setOpenEdit}
          data={data}
          setData={setData}
        />
      )}
    </div>
  );
}

export default TaskCard;
