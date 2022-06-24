import React, {useEffect, useState} from 'react'
import CardStack from './CardStack'

function Board({ tasks }) {
  const [backlog, setBacklog] = useState([])
  const [inProgress, setInProgress] = useState([])
  const [peerReview, setPeerReview] = useState([])
  const [closed, setClosed] = useState([])
  
  useEffect(() => {
    tasks.map(task => {
      if (task.state === 1) {
        const newBacklog = [...backlog, task];
        setBacklog(newBacklog)
      } else if (task.state === 2) {
        const newInProgress = [...inProgress, task];
        setInProgress(newInProgress)
      } else if (task.state === 3) {
        const newPeerReview = [...peerReview, task];
        setPeerReview(newPeerReview)
      } else if (task.state === 4) {
        const newClosed = [...closed, task];
        setClosed(newClosed)
      }
    })
  },[tasks])

  return (
    <div>
      <CardStack stack={"backlog"} tasks={backlog} /> {/* Backlog */}
      <CardStack stack={"inProgress"} tasks={inProgress} /> {/* In-Progress */}
      <CardStack stack={"peerReview"} tasks={peerReview} /> {/* Peer Review */}
      <CardStack stack={"closed"} tasks={closed} /> {/* Closed */}
    </div>
  )
}

export default Board