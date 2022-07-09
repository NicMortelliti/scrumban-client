import React, { useState } from "react";

import DateSelect from "./DateSelect";
import TaskEditSelect from "./TaskEditSelect";
import TaskEditText from "./TaskEditText";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TaskForm({
  data,
  onDeleteTask,
  project,
  setData,
  setOpenPanel,
  task,
  url,
  users,
}) {
  const [formData, setFormData] = useState({
    id: task ? task.id : "",
    description: task ? task.description : "",
    due_date: task ? task.due_date : "",
    project_id: task ? task.project_id : project.id,
    state: task ? task.state : "",
    story_points: task ? task.story_points : "",
    user: {
      id: task.user_id ? task.user_id : "",
      username: task.username ? task.username : "",
    },
  });

  const phases = [
    { id: 1, name: "Backlog" },
    { id: 2, name: "In Progress" },
    { id: 3, name: "Peer Review" },
    { id: 4, name: "Closed" },
  ];

  // Text entry field change
  const handleTextChange = (e) => {
    // Must spread the formData with setter otherwise
    // we end up setting all other attributes
    // to undefined.
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Select field Change
  const handleSelectChange = (e, name) => {
    // Update user state with found user info
    setFormData({ ...formData, [name]: parseInt(e.target.value) });
  };

  // Update due date in formData
  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: `${e.target.value}T00:00:00.000Z`,
    });
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
    (task.id
      ? fetch(`${url}/tasks/${task.id}`, {
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
            user_id: formData.user_id,
          }),
        })
      : fetch(`${url}/tasks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: formData.description,
            due_date: formData.due_date,
            story_points: formData.story_points,
            state: 1,
            project_id: formData.project_id,
            user_id: formData.user.id,
          }),
        })
    )
      .then((r) => r.json())
      .then((newTask) => handleDataUpdate(newTask))
      .then((e = setOpenPanel(e)));
  };

  // Update task board
  const handleDataUpdate = (newTask) => {
    const newData = task
      ? // If editing task
        data.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      : // If adding new task
        [...data, newTask];

    // Set new data
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
        name="user_id"
        value={formData.user_id && formData.user_id}
        options={users}
        displayAttribute="username"
        handleChange={handleSelectChange}
      />
      <TaskEditSelect
        label="Phase"
        name="state"
        value={formData.state}
        options={phases}
        displayAttribute="name"
        handleChange={handleSelectChange}
      />
      <DateSelect
        label="Due Date"
        name="due_date"
        value={formData.due_date.slice(0, 10)}
        handleChange={handleDateChange}
      />
      <div className="form-button-group">
        <Button
          className="form-button custom-primary-form-btn"
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
        <Button
          className="form-button custom-secondary-btn"
          variant="light"
          onClick={(e) => setOpenPanel(e)}>
          Cancel
        </Button>
        <Button
          className="form-button custom-delete-btn"
          variant="outline-danger"
          onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Form>
  );
}

export default TaskForm;
