import React,{useState} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FaCloudShowersHeavy } from "react-icons/fa";
import {ModalCom} from "../modal/ModalCom"

export default function Navigation() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LILBEX</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Create New Time Table" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">For School</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">For a Class</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">For yourself</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Saved Time-Tables</Nav.Link>
            <Nav.Link href="#pricing">Saved Entries</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact Us
            </Nav.Link>
            <button className="btn btn-outline-light" onClick={() => setModalIsOpen(true) }>Login</button>
            <ModalCom 
              isOpen={modalIsOpen} 
              closeModal={()=>setModalIsOpen(false)} 
              onRequestClose={()=>setModalIsOpen(false)}
              shouldCloseOnOverlayClick={false}
              />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
