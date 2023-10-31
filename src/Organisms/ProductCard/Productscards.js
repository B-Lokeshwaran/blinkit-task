import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "../../Assests/potato.png";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../Store/cartSlice";
import { setTrue, setFalse } from "../../Store/buttonStateSlice";
import { setDecrement, setIncrement } from "../../Store/buttonIncrementSlice";
import "./Productscards.css";
import BootstrapButton from "../../atoms/button/Button";
import ProductItemCard from "../../molecules/ProductItemCard/ProductItemCard";
import ProductcardData from "./ProductcardData";



function Productscards({ value }) {
  // console.log(id,"id")
  // const [count, setCount] = useState({});
  // const [isAdding, setIsAdding] = useState({});
  // const dispatch = useDispatch();

  // const handleToggle = (ele) => {
  //   setIsAdding({ ...isAdding, [ele.id]: true });
  //   // dispatch(add(ele))
  //   setCount({ ...count, [ele.id]: 1 });
  //   dispatch(setTrue({ ...isAdding, [ele.id]: true }));

  //   dispatch(setIncrement({ ...count, [ele.id]: 1 }));
  //   addtoCart(ele, { ...count, [ele.id]: 1 });
  // };

  // const statevalue = useSelector((state) => state.buttonState);
  // // console.log(statevalue, "statevalue");

  // const handleIncrement = (ele) => {
  //   console.info({ hi: ele });

  //   setCount((prev) => ({
  //     ...prev,
  //     [ele.id]: (parseInt(prev[ele.id]) || 0) + 1,
  //   }));

  //   // dispatch(setIncrement({ ...count, [ele.id]: count[ele.id] + 1 }))
  //   dispatch(
  //     setIncrement({ ...buttonvalue, [ele.id]: buttonvalue[ele.id] + 1 })
  //   );

  //   addtoCart(ele, { ...count, [ele.id]: count[ele.id] + 1 });
  // };

  // const buttonvalue = useSelector((state) => state.buttonIncrement);
  // console.log(buttonvalue, "button values at first");

  // console.info({ count });

  // const handleDecrement = (ele) => {
  //   setCount((prev) => ({
  //     ...prev,
  //     [ele.id]: prev[ele.id] - 1,
  //   }));

  //   dispatch(
  //     setDecrement({ ...buttonvalue, [ele.id]: buttonvalue[ele.id] - 1 })
  //   );

  //   if (buttonvalue[ele.id] === 1) {
  //     setIsAdding({ ...buttonvalue, [ele.id]: false });
  //     dispatch(setFalse({ ...statevalue, [ele.id]: false }));
  //   }

  //   removetocart(ele, { ...count, [ele.id]: count[ele.id] - 1 });
  // };

  // const addtoCart = (ele, quantity) => {
  //   console.log(count, "hiiii");
  //   dispatch(add({ ...ele, quantity: quantity }));
  // };

  // const removetocart = (ele, quantity) => {
  //   dispatch(remove({ ...ele, quantity: quantity }));
  // };

  // console.log(count, "number");

  // const card = (ele) => {
  //   return (
  //     <Card key={ele.id} className="product-card">
  //       <Card.Text className="product-card-text">{ele.offer}</Card.Text>
  //       <Card.Img src={ele.img} className="product-card-img" />
  //       <Card.Body>
  //         <Card.Text className="product-card-text-1">{ele.time}</Card.Text>
  //         <div>
  //           <Card.Title className="product-card-title">{ele.name}</Card.Title>
  //           <Card.Text className="product-card-text-2">{ele.weight}</Card.Text>
  //         </div>

  //         <div className="main-div">
  //           <div className="main-sub-div">{ele.newPrice}</div>

  //           {statevalue[ele.id] ? (
  //             <>
  //               <div className="product-card-button">
                 
                  
  //                 <BootstrapButton variant="success"text="-" onClick={()=>handleDecrement(ele)} />
  //                 <span className="button-span">{buttonvalue[ele.id]}</span>
                 
  //                 <BootstrapButton variant="success" text="+" onClick={()=> handleIncrement(ele)}/>
  //               </div>
  //             </>
  //           ) : (
            
  //             <BootstrapButton variant="success" text="ADD" className="card-button-1" onClick={()=> handleToggle(ele)} />
  //           )}
  //         </div>
  //       </Card.Body>
  //     </Card>
  //   );
  // };
  // console.log(value, "accordion");
  let Products;
  if (value === "All") {
    Products = ProductcardData.map((ele) => {
      return <ProductItemCard ele={ele}/>;
    });
  } else if (value === "Fresh Vegetables") {
    Products = ProductcardData
      .filter((ele) => ele.category === value)
      .map((ele) => {
        return <ProductItemCard key={ele.id} ele={ele}/>;
      });
  } else if (value === "Fresh Fruits") {
    Products = ProductcardData
      .filter((ele) => ele.category === value)
      .map((ele) => {
        return <ProductItemCard ele={ele}/>;
      });
  } else if (value === "Seasonal") {
    Products = ProductcardData
      .filter((ele) => ele.category === value)
      .map((ele) => {
        return <ProductItemCard ele={ele}/>;
      });
  }

  return <Container className="d-flex flex-wrap container-wrap">{Products}</Container>;



    
  
}

export default Productscards;
