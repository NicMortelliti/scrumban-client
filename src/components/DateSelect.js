import React from "react";

function DateSelect({ label, name, value, handleChange }) {
  return (
    <label>
      {`${label}:`}
      <input
        type="date"
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
}

export default DateSelect;
