import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, FormControl } from "react-bootstrap";
import ZZ from "../../../assests/logo.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BootstrapButton from "../../../atoms/button/Button";
import styles from "./navbarFirstItem.module.scss";
import Searchbar from "../../../atoms/searchbar/Searchbar";

function NavbarFirstItem() {
  const cartValue = useSelector((state) => state.cart);


  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={ZZ} alt="" />
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Item>
              <Nav className={styles.navbar_heading}>
                Delivery in 10 minutes
              </Nav>

              <NavDropdown
                title="Delhi, India"
                className={styles.nav_dropdown}
              ></NavDropdown>
            </Nav.Item>
          </Nav>

         
          <Searchbar className={styles.search_form } type="text" placeholder="search here" />

          <BootstrapButton
            variant="light"
            text="Login"
            className={styles.btn_login}
          />

          <BootstrapButton
            variant="success"
            text={"Cart " + cartValue.count}
            to="/cart"
          />
        </Container>
      </Navbar>
      <hr />
    </>
  );
}

export default NavbarFirstItem;
