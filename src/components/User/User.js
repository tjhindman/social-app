import React from "react";
import Card from "react-bootstrap/Card";

export const User = () => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        width: "95%",
        height: "20vh",
        margin: "4%",
      }}
    >
      <div style={{ width: "20%", margin: "4% 0 4% 4%" }}>
        <Card.Img
          style={{
            backgroundColor: "blue",
            borderRadius: "50%",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <Card.Body style={{ display: "flex" }}>
        <div>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Subtitle className="text-muted">Time of post</Card.Subtitle>
        </div>
      </Card.Body>
    </Card>
  );
};
