import React, { useState } from "react";

import DateSelect from "./DateSelect";
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
    story_points: task.story_points,
    user_id: task.user_id ? task.user_id : "", // Task isn't always assigned to a user
    project_id: task.project_id,
    state: task.state,
    due_date: task.due_date,
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
        user_id: formData.user_id,
      }),
    })
      .then((r) => r.json())
      .then((updatedTask) => onUpdateTask(updatedTask))
      .then((e = setOpenEdit(e)));
  };

  // Handle updating submitted task
  const onUpdateTask = (updatedTask) => {
    const newData = data.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });
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
          onClick={(e) => setOpenEdit(e)}>
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

export default TaskEditForm;
