import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { UserList } from "../../components";

export const Users = (props) => {
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
        <Col sm={7}>
          <UserList />
        </Col>
        <Col
          style={{
            display: "flex",
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
          sm={5}
        >
          User Preview
        </Col>
      </Row>
    </div>
  );
};
