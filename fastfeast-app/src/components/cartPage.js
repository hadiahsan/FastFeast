import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cartItems }) => {
  const navigate = useNavigate();

  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleBackToMenu = () => {
    navigate('/cart');
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Cart Total</h1>
      <div className="text-center">
        <h2>Total: ${calculateCartTotal()}</h2>
        <Button variant="primary" onClick={handleBackToMenu}>Back to Menu</Button>
      </div>
    </Container>
  );
};

export default CartPage;
