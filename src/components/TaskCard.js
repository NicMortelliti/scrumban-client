import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import { Bullseye, CalendarDateFill, PersonFill } from "react-bootstrap-icons";

import TaskCardBadge from "./TaskCardBadge";

function TaskCard({ task, handleEditOpen }) {
  const RenderCard = () => {
    return (
      <Card style={{ width: "flex" }} border="dark" className="my-3">
        <Card.Header>
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
          {task.user && (
            <Row>
              <TaskCardBadge bgColor="info" label={task.user.username} />
            </Row>
          )}
        </Card.Body>
        <Card.Footer className="text-center">
          <Button
            variant="outline-primary"
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
