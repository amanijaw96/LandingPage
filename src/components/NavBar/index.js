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
  const [expanded, setExpanded] = React.useState(false);
  const [screenSize, setScreemSize] = React.useState(1200);

  React.useEffect(() => {
    setScreemSize(window.innerWidth);
    window.addEventListener("resize", function () {
      setScreemSize(window.innerWidth);
    });
  }, []);

  return (
    <Navbar
      variant="dark"
      expand="lg"
      bg={screenSize < 1200 && expanded ? "dark" : ""}
    >
      <div className="container align-items-start d-flex">
        <Navbar.Brand href="/">
          <button className="pl-5 pr-5 pt-2 pb-2 Logo">Logo</button>
        </Navbar.Brand>
        {screenSize < 1200 ? (
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded((curr) => !curr)}
          />
        ) : null}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`justify-content-end ${expanded === true ? "d-flex" : ""}`}
        >
          <Navbar.Text style={{ color: "#ffffff" }}>Login</Navbar.Text>
          <div className="userIcon mr-3">
            <i className="fa fa-user" style={{ color: "#ffffff" }}></i>
          </div>
        </Navbar.Collapse>
        <div className="break mr-3 d-none d-md-inline"></div>
        {screenSize > 1200 ? (
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded((curr) => !curr)}
          />
        ) : null}
      </div>
    </Navbar>
  );
}
