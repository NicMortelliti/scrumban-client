import React, { useEffect, useState } from "react";
import { Close, FormTrash } from "grommet-icons";
import { Box, Button, Heading, Layer } from "grommet";
import EditButton from "../components/EditButton";
import EditFormTextInput from "../components/EditFormTextInput";
import EditFormSelect from "../components/EditFormSelect";
import EditFormDatePick from "../components/EditFormDatePick";
import EditDelete from "./EditDelete";

function EditForm({ currentTask, setOpen, url, handleEditFormChange }) {
  const [users, setUsers] = useState([]);
  const [deleteOpen, setDeleteOpen] = useState(false);

  // const currentTask = [...task];
  const [formData, setFormData] = useState({
    ...currentTask,
    id: currentTask.id,
    description: currentTask.description,
    points: currentTask.story_points,
    due_date: currentTask.due_date,
    assigned_to: currentTask.user.username,
  });

  // Populate users array
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
    setDeleteOpen(true);
  };

  const handleDelete = (e) => {
    setDeleteOpen(false);
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const itemData = {
      description: formData.description,
      due_date: formData.due_date,
      story_points: formData.points,
      //project_id:
      user_id: formData.user_id,
    };

    // Fetch Patch data to backend
    fetch(`${url}/tasks/${formData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then(handleEditFormChange);

    onClose();
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
              <Button
                type="submit"
                label="Submit"
                onClick={(e) => handleSubmit(e)}
                primary
              />
            </Box>
          </Box>
        </Box>
      </Layer>
      {deleteOpen && (
        <Layer
          id="hello world"
          position="center"
          onClickOutside={() => setDeleteOpen(false)}
          onEsc={() => setDeleteOpen(false)}>
          <EditDelete
            handleClick={handleDelete}
            setOpen={() => setDeleteOpen(false)}
            url={url}
            id={formData.id}
          />
        </Layer>
      )}
    </Box>
  );
}

export default EditForm;
