import React from "react";
import { Box, Heading } from "grommet";
import TaskCard from "./TaskCard";

function CardStack({ stack, stackTasks, setCurrentTask, setEditOpen }) {
  return (
    <Box>
      <Heading level={3}>{stack}</Heading>
      {stackTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          setCurrentTask={setCurrentTask}
          setEditOpen={setEditOpen}
        />
      ))}
    </Box>
  );
}

export default CardStack;
