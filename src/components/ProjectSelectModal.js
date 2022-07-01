import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

function ProjectSelectModal({ projects, handleChange }) {
  return (
    <Modal show size="lg" centered className="text-center">
      <Modal.Header closeButton>
        <Modal.Title>Welcome!</Modal.Title>
      </Modal.Header>
      <br></br>
      <Dropdown onSelect={(e) => handleChange(e)}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Select a project
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {projects.map((project) => (
            <Dropdown.Item key={project.id} eventKey={project.id}>
              {project.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <br></br>
    </Modal>
  );
}

export default ProjectSelectModal;
