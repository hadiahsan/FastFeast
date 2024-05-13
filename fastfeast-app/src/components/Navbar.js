import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Title';

const NavbarComponent = () => {
  const handleCookingClick = () => {
    // Define the URL of the external website (e.g., Google)
    const externalUrl = 'https://homemadecooking.com/';

    // Open the external URL in a new browser tab
    window.open(externalUrl, '_blank');
  };

  const handleContactClick = () => {
    // Define the contact email address
    const contactEmail = 'support@fastfeast.com';

    // Open the default email client with the contact email address
    window.location.href = `mailto:${contactEmail}`;
  };

  const handleGreetingClick = () => {
    alert('Hi Andriy P! Our devs are working hard on bringing you the "Profile View" feature, thank you for your patience!'); // Display an alert with the greeting message
  };

  return (
    <Navbar bg="dark" variant="danger" fixed="top" expand="lg" className="mb-4" style={{ height: '100px' }}>
      <Container>
        {/* Navbar Brand (Centered) */}
        <Navbar.Brand className="mt-3" href="/"><Title /></Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Content (Navbar Links) */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ color: 'white' }}>
            {/* Navbar Links */}
            <Nav.Link className="text-white" href="/">Home</Nav.Link>

            {/* Cooking Classes Link (Navigate to Google) */}
            <Nav.Link className="text-white" onClick={handleCookingClick}>Cooking Classes</Nav.Link>

            <Nav.Link className="text-white" onClick={handleContactClick}> Contact Us</Nav.Link>

            {/* Contact Us Link (Open email client) */}


            {/* Greeting Message (Example) */}
            <Nav.Link className="text-white font-weight-bold" onClick={handleGreetingClick}>Hi, Andriy P! 👋</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;