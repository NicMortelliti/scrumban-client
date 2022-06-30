import React from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function TaskEditText({ label, name, value, handleChange }) {
  return (
    <>
      <FloatingLabel label={`${label}:`}>
        <Form.Control
          type="text"
          name={name}
          className="my-3"
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </FloatingLabel>
    </>
  );
}

export default TaskEditText;
