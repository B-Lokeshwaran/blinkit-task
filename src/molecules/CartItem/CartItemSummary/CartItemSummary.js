import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import styles from './cartItemSummary.module.scss'

function CartSummary() {
    const cartdata = useSelector((state) => state.cart);
  return (
    <>
     <div className={styles.col_main}>
          <Row>
            <Col className={styles.col_span} md={4}>
              <span >
                {" "}
                {cartdata.count}  Items 
              </span>
              <span className={styles.cart_price}>
                {cartdata.price}
              </span>
            </Col>
            <Col md={{span:4, offset:4}}>Proceed</Col>
          </Row>
        </div>
    
    </>
  )
}

export default CartSummary