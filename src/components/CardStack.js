import React from 'react'
import { Box, Heading } from 'grommet'
import TaskCard from './TaskCard'

function CardStack({ stack, tasks }) {
  return (
      <Box>
        <Heading level={3}>{stack}</Heading>
        {tasks.map(task => <TaskCard key={task.id} task={task} />)}
      </Box>
  )
}

export default CardStack