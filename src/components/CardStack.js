import React from "react";
import { Box, Heading } from "grommet";
import TaskCard from "./TaskCard";

function CardStack({ stack, tasks, setCurrentTask, setEditOpen }) {
  return (
    <Box>
      <Heading level={3}>{stack}</Heading>
      {tasks.map((task) => (
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
