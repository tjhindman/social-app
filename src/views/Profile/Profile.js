import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ProfileCard, UserMessages } from "../../components";

export const Profile = (props) => {
  return (
    <Row style={{ height: "100%" }}>
      <Col sm={7} style={{ height: "100%" }}>
        {/* User messages should be passed as props from authUser here */}
        <UserMessages />
      </Col>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
        sm={5}
      >
        <ProfileCard />
      </Col>
    </Row>
  );
};
