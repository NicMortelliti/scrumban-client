import React, { useEffect, useState } from "react";

import TaskCard from "./TaskCard";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function TaskBoard({ data, currentProject, handleEditOpen }) {
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
        if (task.project.id === currentProject.id) {
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
        return null;
      });
    setBacklog(newBacklog);
    setInProgress(newInProgress);
    setPeerReview(newPeerReview);
    setClosed(newClosed);
  }, [data, currentProject]);

  const RenderColumns = () => {
    return (
      <Container fluid>
        {/* Display swim lane headers */}
        <Row xs={4} md={4} lg={4} className="g-4">
          {["Backlog", "In Progress", "Peer Review", "Closed"].map((phase) => (
            <Col key={phase} xs={3} className="text-center">
              <h5 className="nord6">{phase}</h5>
            </Col>
          ))}
        </Row>

        {/* Display task cards */}
        <Row xs={4} md={4} lg={4}>
          {[backlog, inProgress, peerReview, closed].map((phase, index) => (
            <Col key={index} xs={3}>
              {phase.map((eachTask) => (
                <TaskCard
                  key={eachTask.id}
                  task={eachTask}
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
