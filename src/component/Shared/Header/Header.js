import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>MOTO DEALER</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/home'>Home</Nav.Link>
              <Nav.Link as={Link} to='/inventory'>Inventory</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
              <Nav.Link eventKey={2} as={Link} to='/blog'>
                Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>

  );
};

export default Header;