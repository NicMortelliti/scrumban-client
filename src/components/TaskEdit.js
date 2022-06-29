import React, { useState } from "react";
import TaskEditSelect from "./TaskEditSelect";
import TaskEditText from "./TaskEditText";

function TaskEdit({ task, setEditOpen, data, users, setData }) {
  const [formData, setFormData] = useState({
    id: task.id,
    description: task.description,
    user_id: task.user_id,
    username: task.user.username,
    story_points: task.story_points,
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
    console.log("Feature not fully implemented");
  };

  // Handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div>
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
          value={formData.username ? formData.username : "unassigned"}
          options={users.map((each) => each.username)}
          handleChange={handleSelectChange}
        />
        <button onClick={() => setEditOpen(false)}>Cancel</button>
        <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
      </form>
    </div>
  );
}

export default TaskEdit;
