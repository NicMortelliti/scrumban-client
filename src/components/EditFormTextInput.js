import { FormField, TextInput } from "grommet";
import React from "react";

function EditFormTextInput({ label, value, setValue }) {
  return (
    <FormField label={label}>
      <TextInput
        name={label.toLowerCase()}
        value={value}
        onChange={(text) =>
          setValue(text.target.value, label.toLowerCase().replace(/ /g, "_"))
        }
      />
    </FormField>
  );
}

export default EditFormTextInput;
