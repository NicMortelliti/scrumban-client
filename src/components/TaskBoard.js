import React, { useEffect, useState } from "react";

import TaskCard from "./TaskCard";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

function TaskBoard({ data, users, projects }) {
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

  const Ccard = () => {
    return (
      <Card style={{ width: "flex" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  };

  const RenderColumns = () => {
    return (
      <Container fluid>
        <Row>
          <Stack gap={2} className="col-md-1 mx-auto">
            {backlog.map((eachTask) => (
              <TaskCard key={eachTask.id} task={eachTask} />
            ))}
          </Stack>
          <Stack gap={2} className="col-md-1 mx-auto">
            {inProgress.map((eachTask) => (
              <TaskCard key={eachTask.id} task={eachTask} />
            ))}
          </Stack>
          <Stack gap={2} className="col-md-1 mx-auto">
            <Ccard />
            <Ccard />
            <Ccard />
          </Stack>
          <Stack gap={2} className="col-md-1 mx-auto">
            <Ccard />
            <Ccard />
          </Stack>
        </Row>
      </Container>
    );
  };

  // Display tasks
  // const DisplayItems = () => {
  //   return (
  //     data &&
  //     data.map((eachTask) => (
  //       <TaskCard
  //         key={eachTask.id}
  //         task={eachTask}
  //         data={data}
  //         users={users}
  //         setData={setData}
  //         onDeleteTask={handleDeleteTask}
  //         url={URL}
  //       />
  //     ))
  //   );
  // };

  return (
    <div>
      <RenderColumns />
    </div>
  );
}

export default TaskBoard;
