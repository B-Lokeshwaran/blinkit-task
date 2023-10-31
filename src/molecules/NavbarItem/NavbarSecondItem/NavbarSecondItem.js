import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarSecondItemData from './NavbarSecondItemData';



function NavbarSecondItem() {
  return (
    <>
    <Navbar expand="lg">
        <Container>
          <Nav className="me-auto">
            <Nav.Item  className="nav-item-1" >
              {NavbarSecondItemData.map((ele) => {
                return (
                  <Nav>
                    <div  className="div-nav" >
                      {ele.name}
                    </div>
                  </Nav>
                );
              })}
              <NavDropdown
                title="More"
                className="nav-dropdown-1"
                
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