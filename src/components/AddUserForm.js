import React, { useState } from "react";
import{Form, Button, Row, Col} from "react-bootstrap";

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
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
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
      <button type="submit" style={{ padding: "10px" }}>Add User</button>
    </form>
  );
}

export default AddUserForm;
