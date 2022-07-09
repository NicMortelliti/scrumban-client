import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

function ProjectSelectModal({ projects, handleChange }) {
  return (
    <Modal show size="lg" centered className="text-center">
      <Modal.Header closeButton className="bg-custom-dark nord6">
        <Modal.Title>Welcome to Scrum!</Modal.Title>
      </Modal.Header>

      <div className="bg-custom-dark">
        <br />
        <Dropdown onSelect={(e) => handleChange(e)}>
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className="custom-primary-btn">
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
        <br />
      </div>
    </Modal>
  );
}

export default ProjectSelectModal;
