import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";


import styles from "./productscards.module.scss";
import BootstrapButton from "../../atoms/button/Button";
import ProductItemCard from "../../molecules/productItemCard/ProductItemCard";
import productCardData from "./productcardData";

const Product = ({ products }) => {
  return products?.map((product) => (
    <ProductItemCard key={product.id} productCard={product} />
  ));
};

function Productscards({ value }) {
  const getProductsList = () => {
    if(value.id === 0) return productCardData
    else return productCardData.filter((productCard) => productCard.categoryId === value.id)
  }


  return (
    <div className={styles.top_div}>
      {value.name}
      <Container className={styles.container_wrap}>
        <Product
          products={getProductsList()}
        />
      </Container>
    </div>
  );
}

export default React.memo(Productscards);
