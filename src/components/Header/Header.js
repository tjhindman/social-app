import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { useStore } from "../../store";

// refactor all files to follow this styling pattern after skeleton finished
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
  const logout = useStore((state) => state.logout);

  // const handleLogout = (e) => {};

  return (
    <Navbar style={styles.navBarWrap} fixed="top" bg="light" expand="sm">
      <Navbar.Brand href="/">Social App</Navbar.Brand>
      {!authUser.token ? (
        ""
      ) : (
        <Nav className="justify-content-end align-items-center" style={styles.navLinkWrap}>
          <Nav.Link href="/">News Feed</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Item>
            <Nav.Link href="/">
              <Button onClick={() => logout()}>Logout</Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      )}
    </Navbar>
  );
};
