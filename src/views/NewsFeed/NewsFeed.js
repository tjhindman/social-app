import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { MessageList, ProfileCard } from "../../components";

export const NewsFeed = (props) => {
  return (
    <Row style={{ height: "100%" }}>
      <Col sm={7}>
        <MessageList />
      </Col>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        sm={5}
      >
        <ProfileCard />
      </Col>
    </Row>
  );
};
