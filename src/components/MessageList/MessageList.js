import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Message } from "../Message/Message";

import { useStore } from "../../store";

export const MessageList = () => {
  const messages = useStore((state) => state.messages);

  return (
    <div style={{ padding: "4%" }}>
      <Form
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingBottom: "4%",
        }}
      >
        <Form.Control style={{ width: "85%" }} placeholder="New message..." />
        <Button type="submit">Send</Button>
      </Form>
      <div style={{ height: "76vh", width: "100%", overflow: "scroll" }}>
        {messages.map((message) => (
          <Message />
        ))}
      </div>
    </div>
  );
};
