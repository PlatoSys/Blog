import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import * as AiIcons from 'react-icons/ai';

function Header() {


  return (
    <header>
      <Navbar className="navbar" bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand href="/">
              <AiIcons.AiFillHome />
              Home</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/">
            <Navbar.Brand href="/">Articles</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;