import React, { useEffect, useState } from "react";
import { Close } from "grommet-icons";
import { Box, Button, Heading, Layer } from "grommet";
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

  // Handle change function for text fields.
  // Dynamically sets object key:value depending
  // on the component that calls the function.
  const handleTextChange = (e) => {
    const newTask = { ...formData, [e.target.name]: e.target.value };
    setFormData(newTask);
  };

  // Update selection boxes
  const handleUserSelectChange = (e) => {
    const newTask = { ...formData, [e.target.name]: e.target.value };
    setFormData(newTask);
  };

  // Update due date
  const handleDateChange = (e, label) => {
    const newTask = { ...formData, [label]: e.value };
    setFormData(newTask);
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
              setValue={handleTextChange}
            />
            <EditFormTextInput
              label="Points"
              value={formData.points}
              setValue={handleTextChange}
            />
            <EditFormDatePick
              label="Due Date"
              value={formData.due_date}
              setValue={handleDateChange}
            />
            <EditFormSelect
              label="Assigned To"
              options={users}
              value={formData.assigned_to}
              setValue={handleUserSelectChange}
            />
          </Box>
          <Box flex={false} as="footer" align="start">
            <Button type="submit" label="Submit" onClick={onClose} primary />
          </Box>
        </Box>
      </Layer>
    </Box>
  );
}

export default EditForm;
