import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function MyNavBar() {
  return (
    <Navbar variant="dark" expand="lg" sticky="top">
      <div className="container">
        <Navbar.Brand href="/">
          <div>Logo</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text>ehhh</Navbar.Text>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
