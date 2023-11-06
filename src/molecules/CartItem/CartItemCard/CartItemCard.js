import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BootstrapButton from "../../../atoms/button/Button";
import { useSelector, useDispatch } from "react-redux";
import { handleIncrement, handleDecrement } from "./cartItem.helper";
import styles from "./cartItemCard.module.scss";

function CartItemCard() {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cart);

  

  return (
    <>
      <div className={styles.cart_main}>
        {cartdata.items.map((ele) => {
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
                        <Col md={{ span: 3 }} className={styles.cart_name}>
                          {ele.name}
                        </Col>
                      </Row>
                      <Row>
                        <Col md={{ span: 3 }} className={styles.cart_size}>
                          {ele.weight}
                        </Col>
                      </Row>
                      <Row>
                        <Col md={{ span: 3 }} className={styles.cart_price}>
                          <span className={styles.cart_newprice}>
                            {ele.newPrice}
                          </span>{" "}
                          <span className={styles.cart_oldprice}>
                            {ele.oldPrice}
                          </span>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={{ span: 3, offset: 10 }}>
                          <>
                            <div className={styles.card_div}>
                              <BootstrapButton
                                variant="success"
                                text="-"
                                onClick={() =>
                                  handleDecrement(dispatch, ele, cartdata.productIncrement)
                                }
                              />
                              <span style={{ color: "white" }}>
                               
                                {cartdata.productIncrement[ele.id]}
                              </span>

                              <BootstrapButton
                                variant="success"
                                text="+"
                                onClick={() =>
                                  handleIncrement(dispatch, ele, cartdata.productIncrement)
                                }
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
