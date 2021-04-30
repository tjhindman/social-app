import React from "react";

import { Message } from "../Message/Message";

import { useStore } from "../../store";

export const UserMessages = () => {
  const messages = useStore((state) => state.messages);

  return (
    <div style={{ padding: "4%" }}>
      <h1 style={{ paddingBottom: "4%", textAlign: "center" }}>My Posts</h1>
      <div style={{ height: "73vh", overflow: "scroll" }}>
        {messages.map((message) => (
          <Message />
        ))}
      </div>
    </div>
  );
};
