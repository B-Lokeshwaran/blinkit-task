import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from './ProductSidebar.module.scss'
import { Container } from "react-bootstrap";




function ProductsSidebar({setValue}) {


  
  return (
    
    <Accordion className={styles.accordion_main_nav} defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={(e)=>setValue(e.target.textContent)}>All</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Fresh Vegetables</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Fresh Fruits</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Exotics</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Seasonal</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Organic & Hydroponic</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Fresh Juice</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Health Drinks</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Energy Drinks</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Nachos</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Popcorn</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Noodles</Accordion.Header>
      </Accordion.Item>

      <Accordion.Item eventKey="12">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Pasta</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="13">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Cookies</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="14">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Cakes & Rolls</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="14">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Cheese</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="14">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Vermicelli</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="14">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>Milk Drinks</Accordion.Header>
      </Accordion.Item>
    </Accordion>
  );

}

export default ProductsSidebar;
