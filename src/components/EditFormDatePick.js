import { DateInput, FormField } from "grommet";
import React from "react";

function EditFormDatePick({ label, value, setValue }) {
  return (
    <FormField label={label} required>
      <DateInput name="date" format="mm/dd/yyyy" value={value}/>
    </FormField>
  );
}

export default EditFormDatePick;
