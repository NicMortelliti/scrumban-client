import { FormField, TextInput } from "grommet";
import React from "react";

function EditFormTextInput({ label, value, setValue }) {
  return (
    <FormField label={label}>
      <TextInput
        name={label.toLowerCase()}
        value={value}
        onChange={setValue}
      />
    </FormField>
  );
}

export default EditFormTextInput;
