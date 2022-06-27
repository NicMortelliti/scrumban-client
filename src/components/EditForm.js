import React, { useEffect, useState } from "react";
import { Close, FormTrash } from "grommet-icons";
import { Box, Button, Heading, Layer } from "grommet";
import EditButton from "../components/EditButton";
import EditFormTextInput from "../components/EditFormTextInput";
import EditFormSelect from "../components/EditFormSelect";
import EditFormDatePick from "../components/EditFormDatePick";

function EditForm({ setOpen, task, url }) {
  const [users, setUsers] = useState([]);

  // const currentTask = [...task];
  const [formData, setFormData] = useState({
    ...task,
    id: task.id,
    description: task.description,
    points: task.story_points,
    due_date: task.due_date,
    assigned_to: task.user.username,
  });

  useEffect(() => {
    fetch(`${url}/users`)
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  const onClose = () => setOpen(false);

  // Handle change function
  // Dynamically sets object key:value depending
  // on the component that calls the function.
  const handleChange = (value, key) => {
    const newTask = { ...formData, [key]: value };
    setFormData(newTask);
  };

  const handleClick = (value) => {
    console.log("Woah, did you mean to click that?");
  };

  return (
    <Box fill align="center" justify="center">
      <Layer
        position="right"
        full="vertical"
        modal
        onClickOutside={onClose}
        onEsc={onClose}>
        <Box
          as="form"
          fill="vertical"
          overflow="auto"
          width="medium"
          pad="medium"
          onSubmit={onclose}>
          <Box flex={false} direction="row" justify="between">
            <Heading level={2} margin="none">
              Task ID: {formData.id}
            </Heading>
            <Button icon={<Close />} onClick={onClose} />
          </Box>
          <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
            <EditFormTextInput
              label="Description"
              value={formData.description}
              setValue={handleChange}
            />
            <EditFormTextInput
              label="Points"
              value={formData.points}
              setValue={handleChange}
            />
            <EditFormDatePick
              label="Due Date"
              value={formData.due_date}
              setValue={handleChange}
            />
            <EditFormSelect
              label="Assigned To"
              options={users}
              value={formData.assigned_to}
              setValue={handleChange}
            />
          </Box>
          <Box flex={false} as="footer" align="start">
            <Box
              flex={false}
              as="footer"
              align="start"
              direction="row"
              gap="small"
              pad="xsmall">
              <EditButton
                color="status-critical"
                icon={<FormTrash />}
                label="Delete"
                onClick={handleClick}
              />
              <Button type="submit" label="Submit" onClick={onClose} primary />
            </Box>
          </Box>
        </Box>
      </Layer>
    </Box>
  );
}

export default EditForm;
