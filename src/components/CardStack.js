import React from 'react'
import { Box } from 'grommet'
import TaskCard from './TaskCard'

function CardStack({ stack, tasks }) {
  return (
      <Box>
        <h1>{stack}</h1>
        {tasks.map(task => <TaskCard key={task.id} task={task} />)}
      </Box>
  )
}

export default CardStack