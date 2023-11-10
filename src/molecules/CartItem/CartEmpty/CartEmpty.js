import React from "react";
import Card from "react-bootstrap/Card";
import BootstrapButton from "../../../atoms/button/Button";
import styles from './cartEmpty.module.scss'

function CartEmpty() {
  return (
    <Card className={styles.main_cart}>
      <Card.Img
        variant="top"
        src="https://www.rlogical.com/wp-content/uploads/2023/03/Profile-4-1.webp"
      />
      <Card.Body>
        <Card.Text className={styles.card_text}>
          You Don't have anything in your Cart
        </Card.Text>
        <BootstrapButton variant="success" text="continue shopping" to="/" />
      </Card.Body>
    </Card>
  );
}

export default CartEmpty;
