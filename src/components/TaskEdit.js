import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
import TaskEditSelect from "./TaskEditSelect";
import TaskEditText from "./TaskEditText";

function TaskEdit({
  task,
  setOpenEdit,
  data,
  setData,
  users,
  projects,
  onDeleteTask,
  url,
}) {
  const [formData, setFormData] = useState({
    id: task.id,
    description: task.description,
    user: {
      id: task.user_id,
      first_name: task.user.first_name,
      last_name: task.user.last_name,
      username: task.user.username,
    },
    story_points: task.story_points,
    project_id: task.project_id,
    due_date: task.due_date,
  });

  // Update formData upon text field change
  const handleTextChange = (e) => {
    // Must spread the formData with setter otherwise
    // we end up setting all other attributes
    // to undefined.
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update formData upon select field change
  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value);

    // Match selected user ID with that found in the users state
    const userMatch = users.filter((user) => user.id === selectedId);

    // Update user state with found user info
    setFormData({ ...formData, user: { ...userMatch[0] } });
  };

  // Handle server delete
  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`${url}/tasks/${task.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedTask) => onDeleteTask(deletedTask.id));
  };

  // Handle server patch
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${url}/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: formData.description,
        due_date: formData.due_date,
        story_points: formData.story_points,
        project_id: formData.project_id,
        user_id: formData.user.id,
      }),
    })
      .then((r) => r.json())
      .then((updatedTask) => onUpdateTask(updatedTask))
      .then((e = setOpenEdit(e)));
  };

  // Handle updating submitted task
  const onUpdateTask = (updatedTask) => {
    // Find and update applicable task with form data
    const newData = data.map((eachTask) => {
      if (eachTask.id === formData.id) {
        return {
          ...eachTask,
          ...formData,
        };
      } else {
        return eachTask;
      }
    });
    // Set local data set with the updated data set
    setData(newData);
  };

  return (
    <Offcanvas show autoFocus={true} onHide={setOpenEdit}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <form>
        <TaskEditText
          label={"Description"}
          name={"description"}
          value={formData.description}
          handleChange={handleTextChange}
        />
        <TaskEditText
          label={"Points"}
          name={"story_points"}
          value={formData.story_points}
          handleChange={handleTextChange}
        />
        <TaskEditSelect
          label={"Assign to"}
          name={"user.id"}
          value={formData.user.id ? formData.user.id : 0}
          options={users}
          displayAttribute="username"
          handleChange={handleSelectChange}
        />
        <button onClick={(e) => setOpenEdit(e)}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
        <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
      </form>
    </Offcanvas>
  );
}

export default TaskEdit;
