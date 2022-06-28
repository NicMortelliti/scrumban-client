import React, { useEffect, useState } from "react";
import { Grid } from "grommet";
import CardStack from "./CardStack";

function Board({ setCurrentTask, setEditOpen, tasks }) {
  const [backlog, setBacklog] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [peerReview, setPeerReview] = useState([]);
  const [closed, setClosed] = useState([]);

  // Set up contexts

  // Categorize tasks according to kanban state
  // 1 = backlog
  // 2 = In-Progress
  // 3 = Peer Review
  // 4 = Closed
  useEffect(() => {
    console.log(`Length of tasks object: ${tasks.length}`);
    let newBacklog = [];
    let newInProgress = [];
    let newPeerReview = [];
    let newClosed = [];
    tasks.map((task) => {
      if (task.state === 1) {
        newBacklog = [...newBacklog, task];
      } else if (task.state === 2) {
        newInProgress = [...newInProgress, task];
      } else if (task.state === 3) {
        newPeerReview = [...newPeerReview, task];
      } else if (task.state === 4) {
        newClosed = [...newClosed, task];
      }
      return null;
    });
    setBacklog(newBacklog);
    setInProgress(newInProgress);
    setPeerReview(newPeerReview);
    setClosed(newClosed);
  }, [tasks]);

  return (
    <Grid
      columns={{
        count: 4,
        size: "auto",
      }}
      gap="medium"
      border="vertical"
      pad="medium">
      <CardStack
        stack={"Backlog"}
        stackTasks={backlog}
        setCurrentTask={setCurrentTask}
        setEditOpen={setEditOpen}
      />{" "}
      {/* Backlog */}
      <CardStack
        stack={"In Progress"}
        stackTasks={inProgress}
        setCurrentTask={setCurrentTask}
        setEditOpen={setEditOpen}
      />
      {/* In-Progress */}
      <CardStack
        stack={"Peer Review"}
        stackTasks={peerReview}
        setCurrentTask={setCurrentTask}
        setEditOpen={setEditOpen}
      />
      {/* Peer Review */}
      <CardStack
        stack={"Closed"}
        stackTasks={closed}
        setCurrentTask={setCurrentTask}
        setEditOpen={setEditOpen}
      />
      {/* Closed */}
    </Grid>
  );
}

export default Board;
