import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TaskCard({ task }) {

  const [openEdit, setOpenEdit] = useState(false);

  // Handle opening/closing of edit task form
  const handleEditTaskOpen = (e) => {
    e.preventDefault();
    setOpenEdit(!openEdit);
  };

  const RenderCard = () => {
    return (
      <Card style={{ width: "flex" }}>
        <Card.Body>
          <Card.Title>ID: {task.id}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
          <Card.Text>Points: {task.story_points}</Card.Text>
          <Card.Text>Due: {task.due_date}</Card.Text>
          <Card.Text>Assigned: {task.user.username}</Card.Text>
          <Button variant="primary">Edit</Button>
        </Card.Body>
      </Card>
    );
  };

  console.log(task.description);
  return (
    <RenderCard />
    // <Card key={task.id}>
    //   <h3>
    //     Task {task.id}: {task.description}
    //   </h3>
    //   <p>Points: {task.story_points}</p>
    //   <p>Due: {task.due_date.slice(0, 10)}</p>
    //   <p>Assigned: {task.user ? task.user.username : "Unassinged"} </p>
    //   <button onClick={(e) => handleEditTaskOpen(e)}>Edit</button>
    // </Card>

  // Define card footer components
  const footer = (
    <span>
      <Button
        label="Edit"
        icon="pi pi-pencil"
        className="p-button-text"
        onClick={(e) => handleEditTaskOpen(e)}
      />
    </span>
  );

  return (
    <Card
      key={task.id}
      title={task.description}
      subTitle={`Task #: ${task.id}`}
      footer={footer}>
      <p>Points: {task.story_points}</p>
      <p>Due: {task.due_date.slice(0, 10)}</p>
      <p>Assigned: {task.user ? task.user.username : "Unassinged"} </p>
      {openEdit && (
        <TaskEdit
          task={task}
          setOpenEdit={handleEditTaskOpen}
          data={data}
          users={users}
          setData={setData}
          onDeleteTask={onDeleteTask}
          url={url}
        />
      )}
    </Card>
  );
}

export default TaskCard;
