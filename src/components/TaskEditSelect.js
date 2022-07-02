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
      <Form.Select
        name={name}
        value={value}
        className="my-3"
        onChange={(e) => handleChange(e)}>
        {options.map((each) => {
          return (
            <option key={each.id} name={each.name} value={each.id}>
              {displayAttribute ? each[displayAttribute] : each}
            </option>
          );
        })}
      </Form.Select>
    </FloatingLabel>
  );
}

export default TaskEditSelect;
