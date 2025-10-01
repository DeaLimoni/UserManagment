import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function AddUserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Name and Email are required!");
      return;
    }
    const newUser = {
      id: Date.now(),
      name,
      email,
      company: { name: "Local Company" }
    };
    onAddUser(newUser);
    setName("");
    setEmail("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
        <Col>
          <Button type="submit" variant="success">
            Add User
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddUserForm;
