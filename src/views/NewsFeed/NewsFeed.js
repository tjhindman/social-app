import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { MessageList } from "../../components";

export const NewsFeed = (props) => {
  return (
    <Row style={{ height: "100%" }}>
      <Col style={{ backgroundColor: "red" }} sm={7}>
        <MessageList />
      </Col>
      <Col style={{ backgroundColor: "green" }} sm={5}>
        Profile
      </Col>
    </Row>
  );
};
