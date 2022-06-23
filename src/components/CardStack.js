import React from 'react'
import TaskCard from './TaskCard'

function CardStack({ tasks }) {

  // {tasks.map((task) => {
  //       return <p key={task.id}>{task.id} {task.description} {task.story_points} {task.user_id !== 0 ? task.user.first_name : null}</p>
  //     })}
  return tasks.map((task) =>  <TaskCard task={task} />)
}

export default CardStack