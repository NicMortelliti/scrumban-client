import React, { useState } from "react";

import TaskEditSelect from "./TaskEditSelect";
import TaskEditText from "./TaskEditText";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TaskEditForm({
  task,
  setOpenEdit,
  data,
  setData,
  users,
  onDeleteTask,
  url,
}) {
  const [formData, setFormData] = useState({
    id: task.id,
    description: task.description,
    user: {
      id: task.user ? task.user_id : "",
      first_name: task.user ? task.user.first_name : "",
      last_name: task.user ? task.user.last_name : "",
      username: task.user ? task.user.username : "",
    },
    story_points: task.story_points,
    project_id: task.project_id,
    state: task.state,
    due_date: task.due_date,
  });

  // Update formData upon text field change
  const handleTextChange = (e) => {
    // Must spread the formData with setter otherwise
    // we end up setting all other attributes
    // to undefined.
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // User Select Field Change
  const handleUserSelectChange = (e) => {
    // Match selected user ID with that found in the users state
    const userMatch = users.filter(
      (user) => user.id === parseInt(e.target.value)
    );

    // Update user state with found user info
    setFormData({ ...formData, user: { ...userMatch[0] } });
  };

  // State Select Field Change
  const handleStateSelectChange = (e) => {
    setFormData({ ...formData, state: parseInt(e.target.value) });
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
        state: formData.state,
        user_id: formData.user.id,
      }),
    })
      .then((r) => r.json())
      .then((updatedTask) => onUpdateTask(updatedTask))
      .then((e = setOpenEdit(e)));
  };

  // Handle updating submitted task
  const onUpdateTask = () => {
    console.log(formData);

    // Find and update applicable task with form data
    const newData = data.map((eachTask) => {
      if (eachTask.id === formData.id) {
        console.log("Server:", eachTask);
        console.log("Form:", formData);
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
    <Form className="text-center">
      <TaskEditText
        label="Description"
        name="description"
        value={formData.description}
        handleChange={handleTextChange}
      />
      <TaskEditText
        label="Points"
        name="story_points"
        value={formData.story_points}
        handleChange={handleTextChange}
      />
      <TaskEditSelect
        label="Assign to"
        name="user.id"
        value={formData.user && formData.user.id}
        options={users}
        displayAttribute="username"
        handleChange={handleUserSelectChange}
      />
      <TaskEditSelect
        label="Phase"
        name="state"
        value={formData.state}
        options={[
          { id: 1, name: "Backlog" },
          { id: 2, name: "In Progress" },
          { id: 3, name: "Peer Review" },
          { id: 4, name: "Closed" },
        ]}
        displayAttribute="name"
        handleChange={handleStateSelectChange}
      />

      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
      <Button variant="light" onClick={(e) => setOpenEdit(e)}>
        Cancel
      </Button>
      <Button variant="outline-danger" onClick={handleDelete}>
        Delete
      </Button>
    </Form>
  );
}

export default TaskEditForm;
