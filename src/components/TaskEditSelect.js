import React from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function TaskEditSelect({
  label,
  name,
  value,
  options,
  displayAttribute,
  handleChange,
}) {
  return (
    <InputGroup>
      <InputGroup.Text id="btnGroupAddon">{label}</InputGroup.Text>
      <Form.Select
        value={value}
        onChange={(e) => handleChange(e, name)}>
        {options.map((each) => {
          return (
            <option key={each.id} name={name} value={each.id}>
              {displayAttribute ? each[displayAttribute] : each}
            </option>
          );
        })}
      </Form.Select>
    </InputGroup>
  );
}

export default TaskEditSelect;
