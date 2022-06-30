import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TaskCard({ task, handleEditOpen }) {
  const RenderCard = () => {
    return (
      <Card style={{ width: "flex" }}>
        <Card.Body>
          <Card.Title>ID: {task.id}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
          <Card.Text>Points: {task.story_points}</Card.Text>
          <Card.Text>Due: {task.due_date}</Card.Text>
          {/* <Card.Text>Assigned: {task.user.username}</Card.Text> */}
          <Button variant="primary" onClick={(e) => handleEditOpen(e, task)}>
            Edit
          </Button>
        </Card.Body>
      </Card>
    );
  };
  return <RenderCard />;
}

export default TaskCard;
