import { FormField, Select } from "grommet";
import React from "react";

function EditFormSelect({ label, options, value, setValue }) {
  // Put usernames into list
  let menuOptions = ["-- Unassigned --"];
  options.forEach((each) => {
    menuOptions.push(each.username);
  });

  return (
    <FormField label={label} name={label.toLowerCase().replace(/ /g, "_")}>
      <Select
        name={label.toLowerCase().replace(/ /g, "_")}
        options={menuOptions}
        value={value}
        onChange={(selection) =>
          setValue(selection.value, label.toLowerCase().replace(/ /g, "_"))
        }
      />
    </FormField>
  );
}

export default EditFormSelect;
