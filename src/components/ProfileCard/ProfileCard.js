import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const ProfileCard = () => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        height: "75%",
        width: "75%",
      }}
    >
      <Card.Img
        variant="top"
        style={{
          alignSelf: "center",
          height: "40%",
          width: "55%",
          margin: "5%",
          borderRadius: "50%",
          backgroundColor: "blue",
        }}
      />
      <Card.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Card.Title>Display Name</Card.Title>
            <Card.Subtitle>username</Card.Subtitle>
          </div>
          <Card.Text className="text-muted">Joined date</Card.Text>
        </div>
        <Card.Text
          style={{
            height: "45%",
            margin: "5% auto",
            overflow: "scroll",
            fontSize: "1em",
          }}
        >
          About about about about about about about about about about about
          about about about about about about about.
        </Card.Text>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button style={{}} variant="primary">
            Edit Profile
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
