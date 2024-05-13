import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import './DeliveryDetails.css'; // Import custom CSS for styling
import { Link } from 'react-router-dom';
import NavbarComponent from './Navbar';

const DeliveryDetails = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('standard'); // State to manage selected delivery method

  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value); // Update selected delivery method
  };

  const handlePlaceOrder = () => {
    // Handle place order functionality
    console.log('Placing order...');
  };

  return (
    <div className="centered-container">
      <Container className="delivery-details-container">
        <h1 className="text-center"> Checkout</h1>
          <h5 className="text-center"> Burger Haven</h5>

        <Row>
        <Col>
            <h3 className="text-center">Order Summary</h3>
            <ul className="order-summary">
              
            </ul>
            {/* Display subtotal, taxes, fees, and total amount */}
            <p className="detail-label d-flex justify-content-between">
              <span><strong>Subtotal:</strong></span>
              <span><strong>$30.96</strong></span>
            </p>

            <p className="detail-label d-flex justify-content-between">
              <span><strong>Taxes:</strong></span>
              <span><strong>$4.03</strong></span>
            </p>

            <p className="detail-label d-flex justify-content-between">
              <span><strong>Delivery Fee:</strong></span>
              <span><strong>$2.00</strong></span>
            </p>
            <p className="detail-label d-flex justify-content-between">
              <span><strong>Total Amount:</strong></span>
              <span><strong>$36.99</strong></span>
            </p>
            <Button variant="primary" className="note-button">Add a note</Button>
        </Col>
        
          <Col>
            <h3 className="text-center">Payment Information</h3>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="creditCardNumberLabel">
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
                  </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="fullName">
                    <Form.Label>Name on Card</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>
                </Col>
              </Row>

              <div className="mt-4">
                <Row>
                  <Col>
                    <Form.Group controlId="expirationDate">
                      <Form.Label>Expiration Date</Form.Label>
                      <Form.Control type="text" placeholder="MM/YY" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="cvvInput">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="text" placeholder="***" />
                    </Form.Group>
                  </Col>

                  <Row>
                    <Col className="text-center" style={{ marginTop:"30px"}}>
                      <h3>Apply Promo Code</h3>
                      <Form className="promo-form d-flex justify-content-center">
                        <Form.Group controlId="promoCode">
                          <Form.Control type="text" placeholder="Enter promo code" />
                        </Form.Group>
                        <Button variant="primary" className="apply-button">Apply</Button>
                      </Form>
                    </Col>
                  </Row>  
                </Row>
              </div>

            </Form>
          </Col>
        </Row>

        <div className="mt-5 text-center">
        <Link to="/OrderStatus"> <Button variant="success" size="lg">Place Order</Button></Link>
        </div>

      </Container>
    </div>
  );
};

export default DeliveryDetails;
