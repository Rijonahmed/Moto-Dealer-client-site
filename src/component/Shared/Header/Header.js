import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () => {
    signOut(auth);
  }
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




              {
                user ?
                  <span className='d-flex'>
                    <Nav.Link as={Link} to="/manageItems">
                      Manage Items
                    </Nav.Link>
                    <Nav.Link as={Link} to="/addItem">
                      Add Item
                    </Nav.Link>
                    <Nav.Link as={Link} to="/myItem">
                      My Item
                    </Nav.Link>
                    <Nav.Link onClick={handleSignOut}>Log Out
                    </Nav.Link>

                  </span>
                  :
                  <Nav.Link as={Link} to="/login">
                    Log In
                  </Nav.Link>

              }

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