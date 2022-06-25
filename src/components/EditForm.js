import React, { useContext, useEffect, useState } from "react";
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

// Import contexts
import { EditOpenContext } from "../context/editOpen";
import { CurrentTaskContext } from "../context/currentTask";

function EditForm() {
  const [select, setSelect] = useState("");
  const [task, setTask] = useState();
  const { editOpen, setEditOpen } = useContext(EditOpenContext);
  const { currentTask } = useContext(CurrentTaskContext);

  const onClose = () => setEditOpen(undefined);

  useEffect(() => {
    setTask(currentTask);
  }, [currentTask]);

  const handleDescriptionChange = (e) => {
    const newTask = { ...task, description: e.target.value };
    setTask(newTask);
  };

  const handlePointsChange = (e) => {
    const newTask = { ...task, story_points: e.target.value };
    setTask(newTask);
  };

  return (
    <Box fill align="center" justify="center">
      {editOpen && (
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
                Task ID: {task.id}
              </Heading>
              <Button icon={<Close />} onClick={onClose} />
            </Box>
            <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
              <FormField label="First">
                <TextInput
                  value={task.description}
                  onChange={handleDescriptionChange}
                />
              </FormField>
              <FormField label="Story Points:">
                <TextInput
                  value={task.story_points}
                  onChange={handlePointsChange}
                />
              </FormField>
              <FormField label="Due Date:">
                <TextArea />
              </FormField>
              <FormField label="Assigned To:">
                <TextArea />
              </FormField>
            </Box>
            <Box flex={false} as="footer" align="start">
              <Button type="submit" label="Submit" onClick={onClose} primary />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
}

export default EditForm;
