import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { User } from "../../components";

export const Users = (props) => {
  return (
    <>
      <Row style={{ backgroundColor: "blue" }}>Search all users</Row>
      <Row style={{ backgroundColor: "red", height: "100%" }}>
        <Col sm={7}>
          <User />
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
    </>
  );
};
