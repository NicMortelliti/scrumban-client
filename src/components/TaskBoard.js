import React, { useEffect, useState } from "react";

import TaskCard from "./TaskCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

function TaskBoard({ data, users, projects, handleEditOpen }) {
  const [backlog, setBacklog] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [peerReview, setPeerReview] = useState([]);
  const [closed, setClosed] = useState([]);

  // Categorize tasks into development phases
  useEffect(() => {
    let newBacklog = [];
    let newInProgress = [];
    let newPeerReview = [];
    let newClosed = [];

    data &&
      data.map((task) => {
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
  }, [data]);

  const RenderColumns = () => {
    return (
      <Container fluid>
        <Row>
          {[backlog, inProgress, peerReview, closed].map((phase, index) => (
            <Stack key={index} gap={2} className="col-md-1 mx-auto">
              {phase.map((eachTask) => (
                <TaskCard
                  key={eachTask.id}
                  task={eachTask}
                  handleEditOpen={handleEditOpen}
                />
              ))}
            </Stack>
          ))}
        </Row>
      </Container>
    );
  };

  return (
    <div>
      <RenderColumns />
    </div>
  );
}

export default TaskBoard;
