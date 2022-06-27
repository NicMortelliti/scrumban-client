import React, { useEffect, useState } from "react";
import { Add, Close, Task } from "grommet-icons";
import {
  Box,
  Button,
  FormField,
  Heading,
  Layer,
  Select,
  TextArea,
  TextInput,
} from "grommet";
import EditFormTextInput from "../components/EditFormTextInput";
import EditFormSelect from "../components/EditFormSelect";

function EditForm({ setOpen, task, url }) {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    id: task.id,
    description: task.description,
    points: task.story_points,
    due: task.due_date,
    assigned: task.username,
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
    const newTask = { ...task, [e.target.name]: e.target.value };
    setFormData(newTask);
  };

  const handleUserSelectChange = (e) => {
    const newTask = { ...task, [task.user.first_name]: e.target.value };
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
            <FormField label="Due Date:">
              <TextArea />
            </FormField>
            <EditFormSelect
              label="Assigned to"
              options={users}
              value={formData.assigned}
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
