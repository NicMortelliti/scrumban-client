import React, { useEffect, useState } from "react";

import TaskCard from "./TaskCard";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

function TaskBoard({ data, users, projects, currentProject, handleEditOpen }) {
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
        if (task.project_id === currentProject.id) {
          if (task.state === 1) {
            newBacklog = [...newBacklog, task];
          } else if (task.state === 2) {
            newInProgress = [...newInProgress, task];
          } else if (task.state === 3) {
            newPeerReview = [...newPeerReview, task];
          } else if (task.state === 4) {
            newClosed = [...newClosed, task];
          }
        }
      });
    setBacklog(newBacklog);
    setInProgress(newInProgress);
    setPeerReview(newPeerReview);
    setClosed(newClosed);
  }, [data]);

  const RenderColumns = () => {
    return (
      <Container fluid>
        <Row xs={1} md={4} className="g-4">
          {[backlog, inProgress, peerReview, closed].map((phase, index) => (
            <Col key={index}>
              {phase.map((eachTask) => (
                <TaskCard
                  key={eachTask.id}
                  task={eachTask}
                  currentProject={currentProject}
                  handleEditOpen={handleEditOpen}
                />
              ))}
            </Col>
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
