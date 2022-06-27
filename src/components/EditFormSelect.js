import { FormField, Select } from "grommet";
import React from "react";

function EditFormSelect({ label, options, value, setValue }) {
  // Put usernames into list
  let menuOptions = [];
  options.forEach((each) => {
    menuOptions.push(each.username);
  });

  return (
    <FormField label={label} name={label.toLowerCase()}>
      <Select
        name={label.toLowerCase()}
        options={menuOptions}
        value={value}
        onChange={setValue}
      />
    </FormField>
  );
}

export default EditFormSelect;
