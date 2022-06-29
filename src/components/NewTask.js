import React, { useState } from "react";
import TaskEditText from "./TaskEditText";
import TaskEditSelect from "./TaskEditSelect";

function NewTask({ users, projects }) {
  const [formData, setFormData] = useState({
    description: "",
    user: {
      id: "",
      username: "",
    },
    story_points: "",
    project: {
      id: "",
      name: "",
    },
    due_date: "",
  });

  // Update formData upon text field change
  const handleTextChange = (e) => {
    // Must spread the formData with setter otherwise
    // we end up setting all other attributes
    // to undefined.
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update user formData upon select field change
  const handleUserSelectChange = (e) => {
    const selectedId = parseInt(e.target.value);

    // Match selected user ID with that found in the users state
    const userMatch = users.filter((user) => user.id === selectedId);

    // Update user state with found user info
    setFormData({ ...formData, user: { ...userMatch[0] } });
  };

  // Update project formData upon select field change
  const handleProjectSelectChange = (e) => {
    const selectedId = parseInt(e.target.value);

    // Match selected user ID with that found in the users state
    const projectMatch = projects.filter(
      (project) => project.id === selectedId
    );

    // Update user state with found user info
    setFormData({ ...formData, project: { ...projectMatch[0] } });
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form>
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
          value={formData.user.id}
          options={users}
          displayAttribute="username"
          handleChange={handleUserSelectChange}
        />
        <TaskEditSelect
          label="Project"
          name="project_id"
          value={formData.project.id}
          options={projects}
          displayAttribute="name"
          handleChange={handleProjectSelectChange}
        />
      </form>
    </div>
  );
}

export default NewTask;
