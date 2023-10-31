import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "../../Assests/potato.png";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../Store/cartSlice";
import { setTrue, setFalse } from "../../Store/buttonStateSlice";
import { setDecrement, setIncrement } from "../../Store/buttonIncrementSlice";
import styles from "./Productscards.module.scss";
import BootstrapButton from "../../atoms/button/Button";
import ProductItemCard from "../../molecules/ProductItemCard/ProductItemCard";
import ProductcardData from "./ProductcardData";



function Productscards({ value }) {
 
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

  // return <Container className="d-flex flex-wrap container-wrap">{Products}</Container>;
  return <Container className={styles.container_wrap}>{Products}</Container>;



    
  
}

export default Productscards;
