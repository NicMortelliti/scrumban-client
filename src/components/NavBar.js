import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar({ handleOpen, projects, currentProject, handleChange }) {
  const RenderDropDown = () => (
    <NavDropdown
      title={currentProject.name}
      id="projectSelect"
      onSelect={(e) => handleChange(e)}>
      {projects.map((project) => (
        <NavDropdown.Item key={project.id} eventKey={project.id}>
          {project.name}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );

  const RenderAddButton = () => (
    <Button variant="outline-primary" onClick={(e) => handleOpen(e)}>
      Add Task
    </Button>
  );

  const RenderNavBar = () => (
    <Navbar sticky="top" bg="light" variant="light">
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
  );

  return <RenderNavBar />;
}

export default NavBar;
