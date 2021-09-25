import React,{useState} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FaCloudShowersHeavy } from "react-icons/fa";
import "../../utils/Fonts.css"

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="font">
      <Container>
        <Navbar.Brand href="/">LILBEX</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Create" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/create">For School</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">For a Class</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">For yourself</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Time-tables</Nav.Link>
            <Nav.Link href="/create">Entries</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact Us
            </Nav.Link>
            <Nav.Link href="/login"><button className="btn btn-outline-light">Login</button></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
