import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./CartItemBilling.module.scss"

function CartBilling() {
    const cartdata = useSelector((state) => state.cart);
  return (
    <>
   
     <div className={styles.card_div_1}>
          <Row>
            <Col  className={styles.cart_billing} md={4}>MRP</Col>
            <Col className={styles.cart_billing_amount} md={{ span: 4, offset: 4 }}>{cartdata.oldPrice}</Col>
          </Row>
          <Row>
            <Col className={styles.cart_billing} md={4}>Product Discount</Col>
            <Col md={{ span: 4, offset: 4 }} className={styles.cart_discount_amount}>
              {cartdata.oldPrice - cartdata.price}
            </Col>
          </Row>
          <Row>
            <Col className={styles.cart_billing} md={4}>Delivery Charge</Col>
            <Col md={{ span: 4, offset: 4 }} className={styles.cart_discount_amount}>Free</Col>
          </Row>
          <Row>
            <Col className={styles.cart_billing} md={4}>Grand Total</Col>
            <Col md={{ span: 4, offset: 4 }} className={styles.cart_billing_amount}>{cartdata.price}</Col>
          </Row>
          <Row xs="auto">
            <Col className={styles.cart_billing_coupons}>
              <span >Coupons are only applicable on blinkit App</span>
            </Col>
          </Row>
        </div>
    
    </>
  )
}

export default CartBilling