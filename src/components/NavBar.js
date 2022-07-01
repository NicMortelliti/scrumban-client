import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function NavBar({ handleOpen, projects, currentProject, handleChange }) {
  // Display Navbar.
  // Display create task and project selection buttons
  // if currentProject is not null
  const RenderNavBar = () => (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" border="dark">
        <Container>
          <Navbar.Brand>Scrum Board</Navbar.Brand>
          {currentProject && (
            <>
              <RenderAddButton />
              <RenderDropDown />
            </>
          )}
        </Container>
      </Navbar>
      <br></br>
    </>
  );

  // Display button to create new task
  const RenderAddButton = () => (
    <Button variant="primary" onClick={(e) => handleOpen(e)}>
      Create Task
    </Button>
  );

  // Display project selection drop down
  const RenderDropDown = () => (
    <DropdownButton
      id="projectSelect"
      title={currentProject.name}
      variant="secondary"
      align="end"
      onSelect={(e) => handleChange(e)}>
      {projects.map((project) => (
        <Dropdown.Item key={project.id} eventKey={project.id}>
          {project.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );

  return <RenderNavBar />;
}

export default NavBar;
