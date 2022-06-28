import React from "react";
import { Box, Button, Heading, Text } from "grommet";

function EditDelete({ handleClick, setOpen, url, id }) {
  // Delete from server
  function handleDeleteClick() {
    fetch(`${url}/tasks/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(handleClick);
  }

  return (
    <Box pad="medium" gap="small" width="medium">
      <Heading level={3} margin="none">
        Whoa!
      </Heading>
      <Text>
        Did you mean to click that? Are you sure you want to delete this task?
      </Text>
      <Box
        as="footer"
        gap="small"
        direction="row"
        align="center"
        justify="end"
        pad={{ top: "medium", bottom: "small" }}>
        <Button label="Cancel" onClick={setOpen} color="dark-3" />
        <Button
          label={
            <Text color="white">
              <strong>Delete</strong>
            </Text>
          }
          onClick={handleDeleteClick}
          primary
          color="status-critical"
        />
      </Box>
    </Box>
  );
}

export default EditDelete;
