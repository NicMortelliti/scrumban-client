import React from 'react'
import TaskCard from './TaskCard'

function CardStack({ stack, tasks }) {
  
  return (
    <div>
      <h1>{stack}</h1>
      {tasks.map(task => <TaskCard key={task.id} task={task} />)}
    </div>
  )
}

export default CardStack