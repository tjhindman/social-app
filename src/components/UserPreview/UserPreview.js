import React from "react";

import { Message } from "../Message/Message";

import { useStore } from "../../store";

export const UserPreview = () => {
  const messages = useStore((state) => state.messages);

  return (
    <div>
      <div style={{ display: "flex", height: "20%", margin: "4% 0 4% 4%" }}>
        <img
          style={{
            backgroundColor: "blue",
            borderRadius: "50%",
            width: "30%",
            height: "100%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "4%",
          }}
        >
          <h3>Display name</h3>
          <h5>@username</h5>
        </div>
      </div>
      <div style={{ height: "67%", overflow: "scroll" }}>
        {messages.map((message) => (
          <Message />
        ))}
      </div>
    </div>
  );
};
