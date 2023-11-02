import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarSecondItemData from './navbarsecondItemdata';
import styles from './navbarSecondItem.module.scss';


function NavbarSecondItem() {
  return (
    <>
    <Navbar expand="lg">
        <Container>
          <Nav className="me-auto">
            <Nav.Item  className={styles.nav_item_1} >
              {NavbarSecondItemData.map((ele) => {
                return (
                  <Nav>
                    <div  className={styles.div_nav} >
                      {ele.name}
                    </div>
                  </Nav>
                );
              })}
              <NavDropdown
                title="More"
                className={styles.nav_dropdown_1}
                
              ></NavDropdown>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <hr />
    </>
  )
}

export default NavbarSecondItem