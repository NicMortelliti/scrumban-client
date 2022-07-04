import React from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
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
          // className="my-3"
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </InputGroup>
    </>
  );
}

export default TaskEditText;
