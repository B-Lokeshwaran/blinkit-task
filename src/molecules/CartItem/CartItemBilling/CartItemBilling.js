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
            <Col md={4}>MRP</Col>
            <Col md={{ span: 4, offset: 4 }}>{cartdata.oldPrice}</Col>
          </Row>
          <Row>
            <Col md={4}>Product Discount</Col>
            <Col md={{ span: 4, offset: 4 }}>
              {cartdata.oldPrice - cartdata.price}
            </Col>
          </Row>
          <Row>
            <Col md={4}>Delivery Charge</Col>
            <Col md={{ span: 4, offset: 4 }}>Free</Col>
          </Row>
          <Row>
            <Col md={4}>Grand Total</Col>
            <Col md={{ span: 4, offset: 4 }}>{cartdata.price}</Col>
          </Row>
          <Row xs="auto">
            <Col>
              <span>Coupons are only applicable on blinkit App</span>
            </Col>
          </Row>
        </div>
    
    </>
  )
}

export default CartBilling