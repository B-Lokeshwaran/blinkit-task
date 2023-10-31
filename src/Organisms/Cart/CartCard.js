import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import styles from "./CartCard.module.scss";
import CartHeading from "../../molecules/CartItem/CartItemHeading/CartItemHeading";
import CartBilling from "../../molecules/CartItem/CartItemBilling/CartItemBilling";
import CartSummary from "../../molecules/CartItem/CartItemSummary/CartItemSummary";
import CartItemCard from "../../molecules/CartItem/CartItemCard/CartItemCard";

function CartCard() {
  const cartdata = useSelector((state) => state.cart);
  console.log(cartdata, "values getting from redux");

  const buttonvalue = useSelector((state) => state.buttonIncrement);
  console.log(buttonvalue, "button values");

  const statevalue = useSelector((state) => state.buttonState);
  console.log(statevalue, "statevalue");

  return (
    <Container>
      <div className={styles.cart_card_main}>
        <CartHeading />

        <CartItemCard />

        <CartBilling />

        <CartSummary />
      </div>
    </Container>
  );
  // })}
}

export default CartCard;
