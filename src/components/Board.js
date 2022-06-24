import React, { useEffect, useState } from 'react'
import { Box, Grid } from 'grommet'
import CardStack from './CardStack'

function Board({ tasks }) {
  const [backlog, setBacklog] = useState([])
  const [inProgress, setInProgress] = useState([])
  const [peerReview, setPeerReview] = useState([])
  const [closed, setClosed] = useState([])
  
  // Categorize tasks according to kanban state
  // 1 = backlog
  // 2 = In-Progress
  // 3 = Peer Review
  // 4 = Closed
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
    <Grid
      columns={{
        count: 4,
        size: 'auto',
      }}
      gap='medium'
      border='vertical'
      pad='medium'
    >
      <CardStack stack={"Backlog"} tasks={backlog} /> {/* Backlog */}
      <CardStack stack={"In Progress"} tasks={inProgress} /> {/* In-Progress */}
      <CardStack stack={"Peer Review"} tasks={peerReview} /> {/* Peer Review */}
      <CardStack stack={"Closed"} tasks={closed} /> {/* Closed */}
    </Grid>
  )
}

export default Board