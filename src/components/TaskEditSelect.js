import React from "react";

function TaskEditSelect({ label, name, value, options, handleChange }) {
  return (
    <label>
      {`${label}:`}
      <select name={name} value={value} onChange={(e) => handleChange(e)}>
        {options.map((each) => {
          return (
            <option key={each} value={each}>
              {each}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default TaskEditSelect;
