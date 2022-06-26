import React, { useContext, useState } from "react";
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
  const { editOpen, setEditOpen } = useContext(EditOpenContext);
  const { currentTask } = useContext(CurrentTaskContext);

  const onClose = () => setEditOpen(undefined);

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
                Task ID: {currentTask.id}
              </Heading>
              <Button icon={<Close />} onClick={onClose} />
            </Box>
            <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
              <FormField label="First">
                <TextInput />
              </FormField>
              <FormField label="Second">
                <Select
                  options={[
                    "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight",
                  ]}
                  value={select}
                  onSearch={() => {}}
                  onChange={({ option }) => setSelect(option)}
                />
              </FormField>
              <FormField label="Third">
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
