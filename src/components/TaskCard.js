import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import TaskCardBadge from "./TaskCardBadge";

function TaskCard({ task, handleEditOpen }) {
  const RenderCard = () => {
    return (
      <Card style={{ width: "flex" }} className="my-3 card">
        <Card.Header className="nord6">
          {task.project.name}-{task.id}
        </Card.Header>
        <Card.Body>
          <Row>
            <Card.Title>{task.description}</Card.Title>
          </Row>
          <Row>
            <TaskCardBadge
              bgColor="primary"
              label={`${task.story_points} Points`}
            />
          </Row>
          <Row>
            <TaskCardBadge
              bgColor="secondary"
              label={task.due_date.slice(0, 10)}
            />
          </Row>
          {task.user && task.user.id !== 1 && (
            <Row>
              <TaskCardBadge bgColor="info" label={task.user.username} />
            </Row>
          )}
        </Card.Body>
        <Card.Footer className="text-center">
          <Button
            variant="primary"
            className="custom-primary-btn"
            onClick={(e) => handleEditOpen(e, task)}>
            Edit
          </Button>
        </Card.Footer>
      </Card>
    );
  };
  return <RenderCard />;
}

export default TaskCard;
