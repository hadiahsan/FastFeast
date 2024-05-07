import React from 'react';
import { Navbar, Container, Nav, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Title';

const NavbarComponent = () => {

  const contactEmail = 'support@fastfeast.com'; // Replace with your email address

  const handleContactClick = () => {
    window.location.href = `mailto:${contactEmail}`;
  };

  return (
    <Navbar bg="danger" variant="danger" fixed="top" expand="lg">
      <Container>
        {/* Navbar Brand (Centered) */}
        <Navbar.Brand className="mx-auto fw-bold" href="/" style={{ fontSize: '3rem' }}>FastFeast</Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Content (Navbar Links) */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Navbar Links */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>

            {/* Contact Us Link */}
            <Nav.Link onClick={handleContactClick}>Contact Us</Nav.Link>
            <Nav.Link onClick={handleContactClick}>Cooking Classes</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;