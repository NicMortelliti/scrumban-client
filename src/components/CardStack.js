import React from "react";
import { Box, Heading } from "grommet";
import TaskCard from "./TaskCard";

function CardStack({ stack, stackTasks, setEditOpen }) {
  return (
    <Box>
      <Heading level={3}>{stack}</Heading>
      {stackTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          setEditOpen={setEditOpen}
        />
      ))}
    </Box>
  );
}

export default CardStack;
