import React, {useEffect, useState} from 'react'
import CardStack from './CardStack'

function Board({ tasks }) {
  const [backlog, setBacklog] = useState([])
  const [inProgress, setInProgress] = useState([])
  const [peerReview, setPeerReview] = useState([])
  const [closed, setClosed] = useState([])
  
  useEffect(() => {
    let newBacklog = []
    let newInProgress = []
    let newPeerReview = []
    let newClosed = [] 
    tasks.map(task => {
      if (task.state === 1) {
        newBacklog = [...newBacklog, task];
      } else if (task.state === 2) {
        newInProgress = [...newInProgress, task];
      } else if (task.state === 3) {
        newPeerReview = [...newPeerReview, task];
      } else if (task.state === 4) {
        newClosed = [...newClosed, task];
      }
    })
    setBacklog(newBacklog)
    setInProgress(newInProgress)
    setPeerReview(newPeerReview)
    setClosed(newClosed)
  }, [tasks])
  

  return (
    <div>
      <CardStack stack={"Backlog"} tasks={backlog} /> {/* Backlog */}
      <CardStack stack={"In Progress"} tasks={inProgress} /> {/* In-Progress */}
      <CardStack stack={"Peer Review"} tasks={peerReview} /> {/* Peer Review */}
      <CardStack stack={"Closed"} tasks={closed} /> {/* Closed */}
    </div>
  )
}

export default Board