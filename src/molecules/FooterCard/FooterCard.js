import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FooterCardData from "./FooterCardData";
import styles from './FooterCard.module.scss'


function FooterCard() {
  let Cards = FooterCardData.map((ele) => {
    return (
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
    );
  });

  return Cards;
}

export default FooterCard;
