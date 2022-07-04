import React from "react";

import InputGroup from "react-bootstrap/InputGroup";

function DateSelect({ label, name, value, handleChange }) {
  return (
    <InputGroup>
      <InputGroup.Text id="btnGroupAddon">{`${label}:`}</InputGroup.Text>
      <input
        type="date"
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </InputGroup>
  );
}

export default DateSelect;
