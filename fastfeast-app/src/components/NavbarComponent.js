import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHeadset } from '@fortawesome/free-solid-svg-icons';


const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left side (address) */}
        <div className="d-flex align-items-center">
          <span className="d-none d-lg-inline">43 Candy Dr.</span>
          <span className="d-lg-none">43 Candy Dr.</span>
        </div>

        {/* Center (brand name) */}
        <Navbar.Brand
          className=""
          style={{fontFamily: 'Arial, sans-serif', color: '#FF5733', flex: '1' }}
          href="/"
        >
          <span style={{ marginLeft: '50px', fontSize: '1.5rem', fontWeight: 'bold' }}>Fast</span>
          <span style={{ marginRight: '60px', fontSize: '1.5rem', fontWeight: 'bold', color: 'orange' }}>Feast</span>
        </Navbar.Brand>

        {/* Right side (settings button) */}
        <Nav>
          <Button variant="outline-secondary">
            <FontAwesomeIcon icon={faCog} />
          </Button>
        </Nav>

      </Container>
    </Navbar>
  );
};

export default NavbarComponent;