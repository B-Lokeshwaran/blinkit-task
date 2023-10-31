import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import styles from './CartItemSummary.module.scss'

function CartSummary() {
    const cartdata = useSelector((state) => state.cart);
  return (
    <>
     <div className={styles.col_main}>
          <Row>
            <Col sm={8}>
              <span className={styles.col_span}>
                {" "}
                {cartdata.count}Items {cartdata.price}
              </span>
            </Col>
            <Col sm={4}>Proceed</Col>
          </Row>
        </div>
    
    </>
  )
}

export default CartSummary