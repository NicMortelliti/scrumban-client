import React from "react";

function TaskEditText({ label, name, value, handleChange }) {
  return (
    <label>
      {`${label}:`}
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
}

export default TaskEditText;
