import { DateInput, FormField } from "grommet";
import React from "react";

function EditFormDatePick({ label, value, setValue }) {
  <FormField label={label}>
    <DateInput
      name={label.toLowerCase()}
      format="mm/dd/yyyy"
      onChange={(e) => console.log(e.target.value)}
    />
  </FormField>;
}

export default EditFormDatePick;
