import { DateInput, FormField } from "grommet";
import React from "react";

function EditFormDatePick({ label, value, setValue }) {
  return (
    <FormField label={label} required>
      <DateInput
        name={label.toLowerCase().replace(/ /g, "_")}
        format="mm/dd/yyyy"
        value={value}
        onChange={(date) =>
          setValue(date, label.toLowerCase().replace(/ /g, "_"))
        }
      />
    </FormField>
  );
}

export default EditFormDatePick;
