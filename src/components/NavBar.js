import React, { useState } from "react";
import "./NavBar.scss";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container} from "react-bootstrap";
import logo from "../images/logo.png";

function NavBar() {
  //navbar extended or not
  const [expanded, setExpanded] = useState(false);
 
  // Closing navbar
  const closeNavbar = () => {
    setExpanded(false);
  };
  return (
    <Navbar expanded={expanded} onToggle={setExpanded} expand="lg">
      <Container fluid="xl" className="container-fluid">
        <Navbar.Brand as={NavLink} to="/" onClick={closeNavbar}>
          <img id="logo" src={logo} alt="To home page of Home Fitness" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded((expanded) => !expanded)}
        />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link
              as={NavLink}
              to="/"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              About
            </Nav.Link>
            <Link
              to="/loginpage"
              id="signBtn"
              className="btn btn-outline-warning"
              onClick={closeNavbar}
            >
              Sign In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
