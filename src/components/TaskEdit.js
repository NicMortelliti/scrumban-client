import React, { useState } from "react";
import TaskEditText from "./TaskEditText";

function TaskEdit({ task, setEditOpen, data, setData }) {
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
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
    setFormData({ name: e.target.value })
  };

  // Handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Find and update applicable task with form data
    const newData = data.map((eachTask) => {
      if (eachTask.id === formData.id) {
        return {
          ...eachTask,
          description: formData.description,
          user_id: formData.user_id,
          username: formData.username,
          story_points: formData.story_points,
          due_date: formData.due_data,
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
        <button onClick={() => setEditOpen(false)}>Cancel</button>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

export default TaskEdit;
