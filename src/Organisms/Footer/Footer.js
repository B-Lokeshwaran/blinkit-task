import React from "react";
import { Container } from "react-bootstrap";

import "./Footer.css";
import FooterCard from "../../molecules/FooterCard/FooterCard";

function Footer() {
  return (
    <Container className="d-flex">
      <FooterCard />
    </Container>
  );
}

export default Footer;
