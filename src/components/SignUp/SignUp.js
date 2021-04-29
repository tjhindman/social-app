import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useStore } from "../../store";

export const SignUp = () => {
  const [state, setState] = useState({
    username: "",
    displayName: "",
    password: "",
  });
  const login = useStore((state) => state.login);

  const handleChange = (e) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    login();
    setState({
      username: "",
      displayName: "",
      password: "",
    });
  };

  return (
    <Card style={{ display: "flex", width: "40vw" }}>
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title as="h1" style={{ alignSelf: "center" }}>
          Sign Up
        </Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              value={state.username}
              onChange={handleChange}
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group controlId="formBasicDisplayName">
            <Form.Label>Display Name</Form.Label>
            <Form.Control
              name="displayName"
              value={state.displayName}
              onChange={handleChange}
              placeholder="Enter display name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
            <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
