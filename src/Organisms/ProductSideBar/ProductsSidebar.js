import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "./productsidebar.module.scss";
import PropTypes from "prop-types";


const ProductsSidebar = ({ sidebardata=[], setValue }) => sidebardata.map((productsidebar) => (
      <Accordion defaultActiveKey="0">
        <Accordion.Item className={styles.accordion_main_nav} eventKey={productsidebar.id}>
          <Accordion.Header onClick={() => setValue(productsidebar)}>
         <img src={productsidebar.img} style={{width:"50px", height:"50px"}}></img>
            <span className={styles.sidebar_text}>{productsidebar.name}</span>
          </Accordion.Header>
        </Accordion.Item>
      </Accordion>
    ));

export default ProductsSidebar;

ProductsSidebar.propTypes = {
  sidebardata: PropTypes.object,
  setValue: PropTypes.func,
};
