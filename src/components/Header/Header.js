import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { useStore } from "../../store";

const styles = {
  navBarWrap: {
    height: "7vh",
  },
  navLinkWrap: {
    width: "100%",
  },
};

export const Header = (props) => {
  const authUser = useStore((state) => state.authUser);

  const handleLogout = (e) => {};

  return (
    <Navbar style={styles.navBarWrap} fixed="top" bg="light" expand="sm">
      <Navbar.Brand href="/">Social App</Navbar.Brand>
      {!authUser.token ? (
        ""
      ) : (
        <Nav className="justify-content-end" style={styles.navLinkWrap}>
          <Nav.Link href="/">News Feed</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Item>
            <Button onClick={() => handleLogout()}>Logout</Button>
          </Nav.Item>
        </Nav>
      )}
    </Navbar>
  );
};
