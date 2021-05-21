import React from "react";
import { Button, Container } from "react-bootstrap";
import NavBar from "./NavBar";
import { styles } from "./styles/headerStyles";
const Header = () => {
  return (
    <Container fluid style={styles.headerWrap}>
      <Container>
        <h4 style={styles.navTitle}>Support Gerardo Garza</h4>
        <p style={styles.navSubtitle}>
          Front end Developer open to work immediately
        </p>
        <a href="https://github.com/owlsCloud">
          <Button style={styles.gitBtn}>My Github</Button>
        </a>
        <a href="https://owscloud.tech">
          <Button style={styles.portfolioBtn}>My Portfolio</Button>
        </a>
        <NavBar />
      </Container>
    </Container>
  );
};

export default Header;
