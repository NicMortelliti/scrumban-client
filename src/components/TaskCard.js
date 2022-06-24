import React from 'react'

function TaskCard({ task }) {
  return (
    <div>
      <p>{task.description}</p>
      <p>{task.id}</p>
    </div>
  )
}

export default TaskCard