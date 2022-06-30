import React from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function TaskEditSelect({
  label,
  name,
  value,
  options,
  displayAttribute,
  handleChange,
}) {
  return (
    <FloatingLabel label={`${label}:`}>
      <Form.Select name={name} value={value} onChange={(e) => handleChange(e)}>
        {options.map((each) => {
          return (
            <option key={each.id} name={each.id} value={each.id}>
              {each[displayAttribute]}
            </option>
          );
        })}
      </Form.Select>
    </FloatingLabel>
  );
}

export default TaskEditSelect;
