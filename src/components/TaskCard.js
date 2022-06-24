import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'grommet'

function TaskCard({ task }) {
  return (
    <Card pad='small' background='dark-1' gap='medium'>
      <CardHeader>{task.description}</CardHeader>
      <CardBody>ID: {task.id}</CardBody>
      <CardFooter>Points: {task.story_points}</CardFooter>
    </Card>
  )
}

export default TaskCard