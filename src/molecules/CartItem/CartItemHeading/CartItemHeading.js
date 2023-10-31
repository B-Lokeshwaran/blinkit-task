import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import styles from './CartItemHeading.module.scss'

function CartHeading() {
    const cartdata = useSelector((state) => state.cart);

  console.log(cartdata, "values getting from redux");
  return (
    <>
    <div className={styles.cart_heading}>
          <p className={styles.cart_heading_title}>Place Order</p>
        </div>

        <div className={styles.cart_heading_1}>
          <p>Delivery in 10 Minutes</p>
        </div>
        <div className={styles.cart_heading_2}>
          <p>{cartdata.count} Items</p>
        </div>
        </>
  )
}

export default CartHeading