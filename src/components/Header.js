import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { styles } from "./styles/headerStyles";
const Header = () => {
  return (
    <Container style={styles.headerWrap}>
      <h4 style={styles.navTitle}>Support Gerardo Garza</h4>
      <p style={styles.navSubtitle}>
        Front end Developer open to work immediately
      </p>
      <Button style={styles.gitBtn}>My Github</Button>
      <Button style={styles.portfolioBtn}>My Portfolio</Button>
    </Container>
  );
};

export default Header;
