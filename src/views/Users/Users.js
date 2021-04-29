import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { UserList, UserPreview } from "../../components";

import { useStore } from "../../store";

export const Users = (props) => {
  const selectedUser = useStore((state) => state.selectedUser);
  return (
    <div style={{ height: "100%" }}>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "13%",
        }}
      >
        <Form
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <Form.Control
            style={{ width: "85%" }}
            placeholder="Search all users..."
          />
          <Button type="submit">Search</Button>
        </Form>
      </Row>
      <Row style={{ height: "87%" }}>
        <Col sm={7} style={{ height: "100%" }}>
          <UserList />
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
          sm={5}
        >
          {selectedUser.username ? (
            <UserPreview />
          ) : (
            "Click on a user to find out more details!"
          )}
        </Col>
      </Row>
    </div>
  );
};
