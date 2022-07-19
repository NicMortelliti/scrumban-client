import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";

function ProjectPanel({ url, projects, setProjects, setOpenPanel, verb }) {
  const [formData, setFormData] = useState({ name: "" });

  // Update field data
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit form data to server
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${url}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
      }),
    })
      .then((r) => r.json())
      .then((newProject) => handleDataUpdate(newProject))
      .then((e) => setOpenPanel(e));
  };

  const handleDataUpdate = (newProject) => {
    const newProjects = [...projects, newProject];
    setProjects(newProjects);
  };

  return (
    <Modal show size="md" centered className={`text-center`}>
      <Modal.Header closeButton className="bg-custom-dark nord6">
        <Modal.Title>{verb}</Modal.Title>
      </Modal.Header>

      <div className="bg-custom-dark">
        <br />
        <InputGroup className="form-field">
          <InputGroup.Text id="btnGroupAddon">Project Name: </InputGroup.Text>
          <Form.Control
            autoFocus
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </InputGroup>
        <div className="form-button-group">
          <Button
            className="form-button custom-primary-form-btn"
            type="submit"
            onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
          <Button
            className="form-button custom-secondary-btn"
            onClick={(e) => setOpenPanel(e)}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectPanel;
