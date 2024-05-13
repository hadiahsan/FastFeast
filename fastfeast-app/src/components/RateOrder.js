import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const RateOrder = () => {
  const [foodRating, setFoodRating] = useState(0);
  const [deliveryRating, setDeliveryRating] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  const handleFoodRatingChange = (rating) => {
    setFoodRating(rating);
  };

  const handleDeliveryRatingChange = (rating) => {
    setDeliveryRating(rating);
  };

  const handleTipChange = (e) => {
    const amount = parseFloat(e.target.value);
    setTipAmount(amount);
  };

  const handleConfirm = () => {
    alert('Thank you for choosing FastFeast!');
  };

  return (
    <>
      <div className="centered-container">
        <Container className="delivery-details-container">
          <h1 className="text-center">Leave a Review!</h1>
          <Row className="mb-3">
            <Col>
              <h3>How was your food?</h3>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= foodRating ? 'star-filled' : 'star-empty'}
                    onClick={() => handleFoodRatingChange(star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <h3>How was your delivery driver?</h3>
              {/* Star rating for delivery */}
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= deliveryRating ? 'star-filled' : 'star-empty'}
                    onClick={() => handleDeliveryRatingChange(star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <h3>Tip your delivery driver (optional)</h3>
              {/* Tip amount input */}
              <Form.Control
                type="number"
                min="0"
                step="0.01"
                placeholder="Enter tip amount"
                value={tipAmount}
                onChange={handleTipChange}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              {/* Confirm button */}
              <Button variant="success" size="lg" onClick={handleConfirm}>
                Confirm
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default RateOrder;
