import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import footerCardData from "./footerCardData";
import styles from "./footerCard.module.scss";

function FooterCard() {
  return footerCardData.map((ele) => (
    <Row md={3} className={styles.row_main}>
      <Col>
        <Card className={styles.footer_card}>
          <Card.Img src={ele.img} className={styles.footer_card_image} />
          <Card.Body>
            <Card.Title>{ele.title}</Card.Title>
            <Card.Text>{ele.text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ));
}

export default FooterCard;
