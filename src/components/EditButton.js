import { Button } from "grommet";
import React from "react";

function EditButton({ color, icon, label, onClick }) {
  return <Button color={color} name={label} icon={icon} label={label} onClick={onClick} />;
}

export default EditButton;
