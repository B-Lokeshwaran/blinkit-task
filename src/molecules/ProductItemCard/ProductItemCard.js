import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";
import BootstrapButton from "../../atoms/button/Button";
import styles from "./productItemCard.module.scss";
import {
  handleIncrement,
  handleDecrement,
  handleToggle,
} from "./ProductItemCard.helper";
import PropTypes from "prop-types"


function ProductItemCard({ productCard }) {
 
  const [count, setCount] = useState({});
  const dispatch = useDispatch();


  const buttonIncrement = useSelector((state) => state.cart)
  

  const productButtonState = useSelector((state) => state.cart).items.find(
    (item) => item.id === productCard.id
  );

  return (
    <Card key={productCard.id} className={styles.product_card}>
      <Card.Text className={styles.product_card_text}>{productCard.offer}</Card.Text>
      <Card.Img src={productCard.img} className={styles.product_card_img} />
      <Card.Body>
        <Card.Text className={styles.product_card_text_1}>{productCard.time}</Card.Text>
        <div>
          <Card.Title className={styles.product_card_title}>
            {productCard.name}
          </Card.Title>
          <Card.Text className={styles.product_card_text_2}>
            {productCard.weight}
          </Card.Text>
        </div>

        <div className={styles.main_div}>
          <div className={styles.price_div}>
            <div className={styles.main_div_price}>{productCard.newPrice}</div>
            <div className={styles.main_sub_div}>{productCard.oldPrice}</div>
          </div>

          {productButtonState ? (
            <>
              <div className={styles.product_card_button}>
                <BootstrapButton
                  variant="success"
                  text="-"
                  onClick={() =>
                    handleDecrement(
                      productCard,
                      setCount,
                      buttonIncrement.productIncrement,
                      dispatch,
                      count
                    )
                  }
                />
                <span className={styles.button_span}>
                  
                  {buttonIncrement.productIncrement[productCard.id]}
                </span>
                <BootstrapButton
                  variant="success"
                  text="+"
                  onClick={() =>
                    handleIncrement(productCard, count, setCount, dispatch,buttonIncrement.productIncrement)
                  }
                />
              </div>
            </>
          ) : (
            <BootstrapButton
              variant="secondary"
              text="ADD"
              className={styles.card_button_1}
              onClick={() => handleToggle(productCard, setCount, count, dispatch, buttonIncrement.productIncrement)}
            />
          )}

        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductItemCard;


ProductItemCard.propTypes ={
  productCard:  PropTypes.object
}