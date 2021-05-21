import React from "react";
import { Navbar, Nav } from "react-bootstrap";
//import { useHistory } from "react-router-dom";
import { styles } from "./styles/navStyles";
const NavBar = () => {
  return (
    <>
      <Navbar style={styles.navBar}>
        <Nav className="mr-auto">
          <Nav.Link style={styles.navLinks} href="#home">
            News
          </Nav.Link>
          <Nav.Link style={styles.navLinks} href="#features">
            Opinion
          </Nav.Link>
          <Nav.Link style={styles.navLinks} href="#pricing">
            Sport
          </Nav.Link>
          <Nav.Link style={styles.navLinks} href="#pricing">
            Culture
          </Nav.Link>
          <Nav.Link style={styles.navLinks} href="#pricing">
            Lifestyle
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
