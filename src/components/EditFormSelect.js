import { FormField, Select } from "grommet";
import React from "react";

function EditFormSelect({ label, options, value, setValue }) {
  // Put usernames into list
  const menuOptions = [options.map((each) => each.username)];

  return (
    <FormField label={label} name={label.toLowerCase()}>
      <Select
        name={label.toLowerCase()}
        options={menuOptions}
        labelKey="label"
        valueKey={value}
        onChange={setValue}
      />
    </FormField>
  );
}

export default EditFormSelect;
