import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

function ProjectSelectModal({ projects, setCurrentProject }) {
  return (
    <Modal show size="lg" centered className="text-center">
      <Modal.Header closeButton>
        <Modal.Title>Welcome!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Please select a project...</h4>
      </Modal.Body>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          -
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {projects.map((project) => (
            <Dropdown.Item key={project.id}>{project.name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Modal>
  );
}

export default ProjectSelectModal;
