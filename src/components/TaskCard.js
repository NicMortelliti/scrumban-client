import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Text } from 'grommet'

function TaskCard({ task }) {
  return (
    <Card
      background='light-1'
      gap='small'
      animation={{ type: 'slideUp', duration: 500 }}>
      <CardHeader>{task.description}</CardHeader>
      <CardBody>ID: {task.id}</CardBody>
      <Text>Points: {task.story_points}</Text>
      <Text>{task.user ? `${task.user.first_name} ${task.user.last_name}`: "Unassigned"}</Text>
      <CardFooter pad={{horizontal: "medium"}} background="light-2">
        <Button>Btn1</Button>
        <Button>Btn2</Button>
      </CardFooter>
    </Card>
  )
}

export default TaskCard