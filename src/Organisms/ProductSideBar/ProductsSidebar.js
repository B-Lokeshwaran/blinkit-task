import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "./productsidebar.module.scss";
import { Container } from "react-bootstrap";



const ProductsSidebar = ({ sidebardata=[], setValue }) => sidebardata.map((ele) => (
      <Accordion defaultActiveKey="0">
        <Accordion.Item className={styles.accordion_main_nav} eventKey={ele.id}>
          <Accordion.Header onClick={() => setValue(ele)}>
            <span className={styles.sidebar_text}>{ele.name}</span>
          </Accordion.Header>
        </Accordion.Item>
      </Accordion>
    ));

export default React.memo(ProductsSidebar);
