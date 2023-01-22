import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <h3>Copyright © {year} RK</h3>
    </Container>
  );
}

export default Footer;
