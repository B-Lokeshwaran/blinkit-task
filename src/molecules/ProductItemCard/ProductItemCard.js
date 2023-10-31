import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDecrement, setIncrement } from "../../Store/buttonIncrementSlice";
import { setTrue, setFalse } from "../../Store/buttonStateSlice";
import { add, remove } from "../../Store/cartSlice";
import { Button, Card, Container } from "react-bootstrap";
import BootstrapButton from "../../atoms/button/Button";



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
    <Card key={ele.id} className="product-card">
      <Card.Text className="product-card-text">{ele.offer}</Card.Text>
      <Card.Img src={ele.img} className="product-card-img" />
      <Card.Body>
        <Card.Text className="product-card-text-1">{ele.time}</Card.Text>
        <div>
          <Card.Title className="product-card-title">{ele.name}</Card.Title>
          <Card.Text className="product-card-text-2">{ele.weight}</Card.Text>
        </div>

        <div className="main-div">
          <div className="main-sub-div">{ele.newPrice}</div>

          {statevalue[ele.id] ? (
            <>
              <div className="product-card-button">
                <BootstrapButton variant="success" text="-" onClick={()=>handleDecrement(ele)} />
                <span className="button-span">{buttonvalue[ele.id]}</span>
                <BootstrapButton variant="success" text="+" onClick={()=>handleIncrement(ele)} />
              </div>
            </>
          ) : (
            <BootstrapButton variant="success" text="ADD" className="card-button-1" onClick={()=>handleToggle(ele)} />
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductItemCard;