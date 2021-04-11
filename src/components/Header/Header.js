import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { useStore } from "../../store";

const styles = {
  navLinkWrap: {
    width: "100%",
  },
};

export const Header = (props) => {
  const authUser = useStore((state) => state.authUser);
  return (
    <Navbar fixed="top" bg="light" expand="sm">
      <Navbar.Brand href="/">Social App</Navbar.Brand>
      {!authUser.token ? (
        ""
      ) : (
        <Nav className="justify-content-end" style={styles.navLinkWrap}>
          <Nav.Link href="/">News Feed</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
};
