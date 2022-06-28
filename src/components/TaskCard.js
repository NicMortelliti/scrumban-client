import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "grommet";
import { FormPrevious, FormNext } from "grommet-icons";

function TaskCard({ task, setCurrentTask, setEditOpen }) {
  const onEditOpen = () => {
    setEditOpen(true);
    setCurrentTask(task);
  };

  return (
    <Card
      background="light-1"
      height="small"
      width="small"
      border
      elevation="small"
      animation={{ type: "slideUp", duration: 500, size: "medium" }}>
      <CardHeader pad="small" border="bottom" height="xxsmall">
        <Text size="small">
          {<b>ID</b>} {task.id}
        </Text>
        <Text size="small">
          {task.story_points} {<small>Points</small>}
        </Text>
      </CardHeader>
      <CardBody>
        <Heading level={3} size="xsmall" margin="xxsmall" responsive>
          {task.description}
        </Heading>
      </CardBody>
      <CardBody>
        <Text size="small" margin="xxsmall">
          {task.user
            ? `${task.user.first_name} ${task.user.last_name}`
            : "Unassigned"}
        </Text>
        <Text size="small" margin="xxsmall">
          {<small>Due:</small>} {task.due_date.substring(0, 10)}
        </Text>
      </CardBody>
      <CardFooter
        pad={{ horizontal: "xxsmall" }}
        background="light-2"
        border="top">
        <Button label="Edit" plain fill onClick={onEditOpen} />
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
