import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mapFinal from "../images/mapFinal.jpg";
import RateOrder from './RateOrder';

const OrderStatus = () => {
  const estimatedTime = '30 minutes';
  const orderNumber = '123456789';

  return (
    <div className="centered-container" style={{ marginBottom:"0", marginTop:"-165px"}}>
      <Container className="delivery-details-container text-center">
        <h1 className="mb-4">Order Status</h1>

        <Row className="mb-4">
          <Col>
            <h2>Estimated Time</h2>
            <h5><strong>{estimatedTime}</strong></h5>
          </Col>
        
          <Col>
            <h2>Order Number</h2>
            <h5><strong>{orderNumber}</strong></h5>
          </Col>
        </Row>

        <Col xs={12} className="mb-4">
          <p className="fw-bold">Thank you for your order!</p>
          <p className="fw-bold mb-5">
            We're busy preparing your order with care.<br />
            Stay tuned, deliciousness is on its way to you soon!
          </p>
          <Image src={mapFinal} alt="Order Details" fluid />
        </Col>

        <div className="mb-4">
          <Link to="/RateOrder">
            <Button variant="success" size="lg">Rate your Order</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default OrderStatus;