import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import styles from "./cartcard.module.scss";
import CartHeading from "../../molecules/cartItem/cartItemHeading/CartItemHeading";
import CartBilling from "../../molecules/cartItem/cartItemBilling/CartItemBilling";
import CartSummary from "../../molecules/cartItem/cartItemSummary/CartItemSummary";
import CartItemCard from "../../molecules/cartItem/cartItemCard/CartItemCard";
import CartEmpty from "../../molecules/cartItem/cartEmpty/CartEmpty";

function CartCard() {
  const cartdata = useSelector((state) => state.cart);
  console.log(cartdata, "values getting from redux");

  return (
    <Container>
      <div className={styles.cart_card_main}>
        {cartdata.count === 0 ? (
          <CartEmpty />
        ) : (
          <>
            <CartHeading />
            <CartItemCard />
            <CartBilling />
            <CartSummary />
          </>
        )}
      </div>
    </Container>
  );
}

export default CartCard;
