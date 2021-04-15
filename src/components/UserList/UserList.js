import React from "react";

import { User } from "../User/User";

import { useStore } from "../../store";

export const UserList = () => {
  const messages = useStore((state) => state.messages);

  return (
    <div>
      <h1 style={{ margin: "3%", textAlign: "center" }}>Top 10 Users</h1>
      <div style={{ height: "64vh", overflow: "scroll" }}>
        {messages.map((message) => (
          <User />
        ))}
      </div>
    </div>
  );
};
