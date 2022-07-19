import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function NavBar({
  handleOpen,
  projects,
  currentProject,
  handleChange,
  handleAddProject,
}) {
  // Display Navbar.
  // Display create task and project selection buttons
  // if currentProject is not null
  const RenderNavBar = () => (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>Scrum Board</Navbar.Brand>
          {currentProject && (
            <>
              <RenderAddButton />
              <RenderDropDown />
            </>
          )}
        </Container>
      </Navbar>
      <br />
    </>
  );

  // Display button to create new task
  const RenderAddButton = () => (
    <Button
      variant="primary"
      className="custom-primary-btn"
      onClick={(e) => handleOpen(e)}>
      Create Task
    </Button>
  );

  const handleSelect = (e) => {
    if (e === "addProject") {
      handleAddProject(e);
    } else {
      handleChange(e);
    }
  };

  // Display project selection drop down
  const RenderDropDown = () => (
    <DropdownButton
      id="projectSelect"
      title={currentProject.name}
      variant="secondary"
      align="end"
      onSelect={(e) => handleSelect(e)}>
      {projects.map((project) => (
        <Dropdown.Item key={project.id} eventKey={project.id}>
          {project.name}
        </Dropdown.Item>
      ))}
      <Dropdown.Divider />
      <Dropdown.Item key="addProject" eventKey="addProject">
        Add Project
      </Dropdown.Item>
    </DropdownButton>
  );

  return <RenderNavBar />;
}

export default NavBar;
