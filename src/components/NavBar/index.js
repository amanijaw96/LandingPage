import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navbar.scss";

export default function MyNavBar() {
  return (
    <Navbar variant="dark" expand="lg" sticky="top">
      <div className="container">
        <Navbar.Brand href="/">
          <button className="pl-5 pr-5 pt-2 pb-2 Logo">Logo</button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text style={{ color: "#ffffff" }}>Login</Navbar.Text>
          <div className="userIcon">
            <i className="fa fa-user" style={{ color: "#ffffff" }}></i>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
