import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BootstrapButton from "../../../atoms/button/Button";
import { useSelector, useDispatch } from "react-redux";
// import {
//   setDecrement,
//   setIncrement,
// } from "../../../Store/buttonIncrementSlice";
// import { setFalse } from "../../../Store/buttonStateSlice";
// import { add, remove } from "../../../Store/cartSlice";
import { handleIncrement,handleDecrement } from "./CartItemhelper";
import styles from './CartItemCard.module.scss'


function CartItemCard() {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cart);
  console.log(cartdata.count)

  const buttonvalue = useSelector((state) => state.buttonIncrement);
  console.log(buttonvalue, "button values");

  const statevalue = useSelector((state) => state.buttonState);
  console.log(statevalue, "statevalue");

  return (
    <>
  
      <div className={styles.cart_main}>
        
        {cartdata.items.map((ele) => {
          console.log(ele, "cart values after add or remove");
          return (
            <>
              <Card className={styles.Cart_card}>
                <div className={styles.card_main_1}>
                  <Card.Img
                    variant="top"
                    src={ele.img}
                    className={styles.card_image}
                  />
                  <Card.Body>
                    <Container>
                      <Row>
                        <Col md={{ span: 3 }} className={styles.cart_name}>{ele.name}</Col>
                      </Row>
                      <Row>
                        <Col md={{ span: 3 }} className={styles.cart_size}>{ele.weight}</Col>
                      </Row>
                      <Row>
                        <Col md={{ span: 3 }} className={styles.cart_price}><span className={styles.cart_newprice}>{ele.newPrice}</span> <span className={styles.cart_oldprice}>{ele.oldPrice}</span></Col>
                       
                      </Row>

                      <Row>
                        <Col md={{ span: 3, offset: 10 }}>
                          <>
                            <div className={styles.card_div}>
                              <BootstrapButton
                                variant="success"
                                text="-"
                                
                                onClick={()=>handleDecrement(dispatch, ele, buttonvalue, statevalue)}
                              />
                              <span style={{color:"white"}}>{buttonvalue[ele.id]}</span>

                              <BootstrapButton
                                variant="success"
                                text="+"
                                onClick={() => handleIncrement(dispatch, ele, buttonvalue)}
                               
                              />
                            </div>
                          </>
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </div>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CartItemCard;
