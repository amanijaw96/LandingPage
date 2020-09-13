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
    <Navbar variant="dark" expand="lg">
      <div className="container align-items-start d-flex">
        <Navbar.Brand href="/">
          <button className="pl-5 pr-5 pt-2 pb-2 Logo">Logo</button>
        </Navbar.Brand>
        {/* <div className="d-flex flex-md-row flex-column-reverse"> */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text style={{ color: "#ffffff" }}>Login</Navbar.Text>
          <div className="userIcon mr-3">
            <i className="fa fa-user" style={{ color: "#ffffff" }}></i>
          </div>
        </Navbar.Collapse>
        <div className="break mr-3 d-none d-md-inline"></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* </div> */}
      </div>
    </Navbar>
  );
}
