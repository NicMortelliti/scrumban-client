import React, { useContext } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Text } from "grommet";
import { FormPrevious, FormNext } from "grommet-icons";
import { CurrentTaskContext } from "../context/currentTask";

function TaskCard({ task, setEditOpen }) {
  const { setCurrentTask } = useContext(CurrentTaskContext);

  const onEditOpen = () => {
    setEditOpen(true);
    setCurrentTask(task);
  };

  return (
    <Card
      background="light-1"
      badge={2}
      gap="small"
      animation={{ type: "slideUp", duration: 500 }}>
      <CardHeader>
        <Text>{task.id}</Text>
        <Text>{task.story_points}</Text>
      </CardHeader>
      <CardBody>{task.due_date}</CardBody>
      <Text>{task.description}</Text>
      <Text>
        {task.user
          ? `${task.user.first_name} ${task.user.last_name}`
          : "Unassigned"}
      </Text>
      <CardFooter pad={{ horizontal: "medium" }} background="light-2">
        <Button plain={true} icon={<FormPrevious />} />
        <Button label="Edit" onClick={onEditOpen} />
        <Button plain={true} icon={<FormNext />} />
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
