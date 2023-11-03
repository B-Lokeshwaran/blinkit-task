import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDecrement, setIncrement } from "../../store/ButtonIncrementSlice";
import { add, remove } from "../../store/CartSlice";
import { Button, Card, Container } from "react-bootstrap";
import BootstrapButton from "../../atoms/button/Button";
import styles from "./productItemCard.module.scss";
import {
  handleIncrement,
  handleDecrement,
  addtoCart,
  removetocart,
  handleToggle,
} from "./ProductItemCard.helper";

function ProductItemCard({ ele }) {
  const [count, setCount] = useState({});
  const dispatch = useDispatch();
  const buttonvalue = useSelector((state) => state.buttonIncrement);

  const productButtonState = useSelector((state) => state.cart).items.find(
    (item) => item.id === ele.id
  );

  return (
    <Card key={ele.id} className={styles.product_card}>
      <Card.Text className={styles.product_card_text}>{ele.offer}</Card.Text>
      <Card.Img src={ele.img} className={styles.product_card_img} />
      <Card.Body>
        <Card.Text className={styles.product_card_text_1}>{ele.time}</Card.Text>
        <div>
          <Card.Title className={styles.product_card_title}>
            {ele.name}
          </Card.Title>
          <Card.Text className={styles.product_card_text_2}>
            {ele.weight}
          </Card.Text>
        </div>

        <div className={styles.main_div}>
          <div className={styles.price_div}>
            <div className={styles.main_div_price}>{ele.newPrice}</div>
            <div className={styles.main_sub_div}>{ele.oldPrice}</div>
          </div>

          {productButtonState ? (
            <>
              <div className={styles.product_card_button}>
                <BootstrapButton
                  variant="success"
                  text="-"
                  onClick={() =>
                    handleDecrement(
                      ele,
                      setCount,
                      buttonvalue,
                      dispatch,

                      count
                    )
                  }
                />
                <span className={styles.button_span}>
                  {buttonvalue[ele.id]}
                </span>
                <BootstrapButton
                  variant="success"
                  text="+"
                  onClick={() =>
                    handleIncrement(ele, count, setCount, dispatch, buttonvalue)
                  }
                />
              </div>
            </>
          ) : (
            <BootstrapButton
              variant="secondary"
              text="ADD"
              className={styles.card_button_1}
              onClick={() => handleToggle(ele, setCount, count, dispatch)}
            />
          )}

        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductItemCard;
