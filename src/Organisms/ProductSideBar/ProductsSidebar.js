import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from './ProductSidebar.module.scss'
import { Container } from "react-bootstrap";




function ProductsSidebar({setValue}) {


  
  return (
    
    <Accordion  defaultActiveKey="0">
      <Accordion.Item className={styles.accordion_main_nav} eventKey="0" >
        <Accordion.Header onClick={(e)=>setValue(e.target.textContent)}><img className={styles.img_div} src="https://www.businessoutreach.in/wp-content/uploads/2022/12/success-story-of-Blinkit.png" /><span className={styles.sidebar_text}>All</span></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item className={styles.accordion_main_nav} eventKey="1">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://www.ceylonsupermart.com/cdn/shop/collections/bc3b04651f1f4b02717ff776a63e3a94.jpg?v=1655384810"/><span className={styles.sidebar_text}>Fresh Vegetables</span></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/321169a.jpg?ts=1692608540"/><span className={styles.sidebar_text}>Fresh Fruits</span></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/394525a.jpg?ts=1696330769"/><span className={styles.sidebar_text}>Exotics</span></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://m.media-amazon.com/images/I/31cXlUcvRVL._AC_UF1000,1000_QL80_.jpg"/><span className={styles.sidebar_text}>Seasonal</span></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://m.media-amazon.com/images/I/81uwx8f8X4L._AC_UF1000,1000_QL80_.jpg"/><span className={styles.sidebar_text}>Organic & Hydroponic</span></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/62221a.jpg?ts=1687265019"/><span className={styles.sidebar_text}>Fresh Juice</span></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/full_screen/pro_229795.jpg?ts=1686019334"/><span className={styles.sidebar_text}>Health Drinks</span></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://media.istockphoto.com/id/458473367/photo/can-of-red-bull-energy-drink.jpg?s=612x612&w=0&k=20&c=8MngnfgpB3hdAnxzmQR6HGzY6ebt_agvFIhfdCXFAxM="/><span className={styles.sidebar_text}>Energy Drinks</span></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://cdn.grofers.com/app/images/products/full_screen/pro_440304.jpg?ts=1685982147"/><span className={styles.sidebar_text}>Nachos</span></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://pbs.twimg.com/media/Fy1Uq3zagAE3kG9.jpg:large"/><span className={styles.sidebar_text}>Popcorn</span></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://cdn.grofers.com/app/images/products/full_screen/pro_476527.jpg?ts=1693480372"/><span className={styles.sidebar_text}>Noodles</span></Accordion.Header>
      </Accordion.Item>

      <Accordion.Item eventKey="12">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://m.media-amazon.com/images/I/718dnd7NJ1L._AC_SX148_SY213_QL70_.jpg"/><span className={styles.sidebar_text}>Pasta</span></Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="13">
        <Accordion.Header onClick={(e) => setValue(e.target.textContent)}><img className={styles.img_div} src="https://store.blinkpetsbakery.com/cdn/shop/products/Apple_Cookies_large.jpg?v=1553252591"/><span className={styles.sidebar_text}>Cookies</span></Accordion.Header>
      </Accordion.Item>
     
    </Accordion>
  );

}

export default ProductsSidebar;
