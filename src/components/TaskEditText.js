import React from "react";

function TaskEditText({ label, name, value, handleChange }) {
  return (
    <label>
      {`${label}:`}
      <input
        type="text"
        name={name}
        onChange={(e) => handleChange(e)}
        value={value}
      />
    </label>
  );
}

export default TaskEditText;
