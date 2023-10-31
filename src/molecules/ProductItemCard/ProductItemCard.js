import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDecrement, setIncrement } from "../../Store/buttonIncrementSlice";
import { setTrue, setFalse } from "../../Store/buttonStateSlice";
import { add, remove } from "../../Store/cartSlice";
import { Button, Card, Container } from "react-bootstrap";
import BootstrapButton from "../../atoms/button/Button";
import styles from './ProductItemCard.module.scss'


function ProductItemCard({ele} ) {
    
  const [count, setCount] = useState({});
  const [isAdding, setIsAdding] = useState({});
  const dispatch = useDispatch();
  const buttonvalue = useSelector((state) => state.buttonIncrement);
  const statevalue = useSelector((state) => state.buttonState);

  const handleToggle = () => {
    setIsAdding({ ...isAdding, [ele.id]: true });
    setCount({ ...count, [ele.id]: 1 });
    dispatch(setTrue({ ...isAdding, [ele.id]: true }));
    dispatch(setIncrement({ ...count, [ele.id]: 1 }));
    addtoCart(ele, { ...count, [ele.id]: 1 });
  };

  const handleIncrement = () => {
    setCount((prev) => ({
      ...prev,
      [ele.id]: (parseInt(prev[ele.id]) || 0) + 1,
    }));

    dispatch(setIncrement({ ...buttonvalue, [ele.id]: buttonvalue[ele.id] + 1 }))
    addtoCart(ele, { ...count, [ele.id]: count[ele.id] + 1 });
  };

  const handleDecrement = () => {
    setCount((prev) => ({
      ...prev,
      [ele.id]: prev[ele.id] - 1,
    }));

    dispatch(setDecrement({ ...buttonvalue, [ele.id]: buttonvalue[ele.id] - 1 }));
    if (buttonvalue[ele.id] === 1) {
      setIsAdding({ ...buttonvalue, [ele.id]: false });
      dispatch(setFalse({ ...statevalue, [ele.id]: false }));
    }

    removetocart(ele, { ...count, [ele.id]: count[ele.id] - 1 });
  };

  const addtoCart = (ele, quantity) => {
    dispatch(add({ ...ele, quantity: quantity }));
  };

  const removetocart = (ele, quantity) => {
    dispatch(remove({ ...ele, quantity: quantity }));
  };

  return (
    <Card key={ele.id} className={styles.product_card}>
      <Card.Text className={styles.product_card_text}>{ele.offer}</Card.Text>
      <Card.Img src={ele.img} className={styles.product_card_img} />
      <Card.Body>
        <Card.Text className={styles.product_card_text_1}>{ele.time}</Card.Text>
        <div>
          <Card.Title className={styles.product_card_title}>{ele.name}</Card.Title>
          <Card.Text className={styles.product_card_text_2}>{ele.weight}</Card.Text>
        </div>

        <div className={styles.main_div}>
          <div className={styles.main_sub_div}>{ele.newPrice}</div>

          {statevalue[ele.id] ? (
            <>
              <div className={styles.product_card_button}>
                <BootstrapButton variant="success" text="-" onClick={()=>handleDecrement(ele)} />
                <span className={styles.button_span}>{buttonvalue[ele.id]}</span>
                <BootstrapButton variant="success" text="+" onClick={()=>handleIncrement(ele)} />
              </div>
            </>
          ) : (
            <BootstrapButton variant="success" text="ADD" className={styles.card_button_1} onClick={()=>handleToggle(ele)} />
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductItemCard;