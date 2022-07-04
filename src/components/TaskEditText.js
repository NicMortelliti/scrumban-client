import React from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function TaskEditText({ label, name, value, handleChange }) {
  return (
    <>
      <InputGroup>
        <InputGroup.Text id="btnGroupAddon">{label}</InputGroup.Text>
        <Form.Control
          type="text"
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </InputGroup>
    </>
  );
}

export default TaskEditText;
