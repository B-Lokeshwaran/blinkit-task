import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "./productsidebar.module.scss";




const ProductsSidebar = ({ sidebardata=[], setValue }) => sidebardata.map((productsidebar) => (
      <Accordion defaultActiveKey="0">
        <Accordion.Item className={styles.accordion_main_nav} eventKey={productsidebar.id}>
          <Accordion.Header onClick={() => setValue(productsidebar)}>
            <span className={styles.sidebar_text}>{productsidebar.name}</span>
          </Accordion.Header>
        </Accordion.Item>
      </Accordion>
    ));

export default React.memo(ProductsSidebar);
