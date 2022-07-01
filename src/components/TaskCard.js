import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TaskCard({ task, handleEditOpen }) {
  const RenderCard = () => {
    return (
      <Card style={{ width: "flex" }} border="dark" className="my-3">
        <Card.Header>
          {task.project.name}-{task.id}
        </Card.Header>
        <Card.Body>
          <Card.Title>{task.description}</Card.Title>
          <Card.Text>Points: {task.story_points}</Card.Text>
          <Card.Text>Due: {task.due_date.slice(0, 10)}</Card.Text>
          {task.user && <Card.Text>Assigned: {task.user.username}</Card.Text>}
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
