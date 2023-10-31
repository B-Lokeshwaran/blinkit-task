import React from "react";
import Accordion from "react-bootstrap/Accordion";
import './ProductSidebar.css'

function ProductsSidebar({setValue}) {
  return (
    <Accordion className="accordion-main-nav" defaultActiveKey="0">
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
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}>FreshlyCuts & Sprouts</Accordion.Header>
      </Accordion.Item>
    </Accordion>
  );
}

export default ProductsSidebar;
