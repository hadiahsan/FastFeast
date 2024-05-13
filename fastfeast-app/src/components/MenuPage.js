import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavbarComponent from './Navbar';
import { Link, useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const mealItems = [
    { id: 1, name: 'Classic Burger', category: 'Burgers', price: 10.99 },
    { id: 2, name: 'Double Cheeseburger', category: 'Burgers', price: 12.99 },
    { id: 3, name: 'Veggie Burger', category: 'Burgers', price: 9.99 },
    { id: 4, name: 'Fries', category: 'Sides', price: 4.99 },
    { id: 5, name: 'Onion Rings', category: 'Sides', price: 5.99 },
    { id: 6, name: 'Poutine', category: 'Sides', price: 7.99 },
    { id: 7, name: 'Chocolate Shake', category: 'Drinks', price: 6.99 },
    { id: 8, name: 'Iced Tea', category: 'Drinks', price: 2.99 },
    { id: 9, name: 'Soda Can', category: 'Drinks', price: 1.99 }
  ];

  const [cartItems, setCartItems] = useState([]);

  const navigation = useNavigate();

  const handleContinueToPayment = () => {
    navigation.push('/cart');
  };

  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
      // Item is not in cart, add it with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      // Item is already in cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
  };

  const removeItem = (item) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[itemIndex].quantity > 1) {
        updatedCartItems[itemIndex].quantity -= 1;
      } else {
        updatedCartItems.splice(itemIndex, 1); // Remove item if quantity is 1
      }
      setCartItems(updatedCartItems);
    }
  };

  return (
    <Container className="my-5">
      <NavbarComponent></NavbarComponent>
      <h1 className="text-center mb-4" style={{ marginTop:"80px"}}>Burger Haven</h1>

      {['Burgers', 'Sides', 'Drinks'].map((category) => (
        <div key={category} className="mb-4">
          <h2>{category}</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {mealItems
              .filter((item) => item.category === category)
              .map((item) => (
                <Col key={item.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>Price: ${item.price.toFixed(2)}</Card.Text>
                      <Button onClick={() => addToCart(item)} variant="primary">
                        Add to Cart
                      </Button>
                      {cartItems.find((cartItem) => cartItem.id === item.id) && (
                        <Button
                          variant="danger"
                          className="ms-2"
                          onClick={() => removeItem(item)}
                        >
                          Remove
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      ))}

      <div className="mt-5">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((cartItem) => (
              <li key={cartItem.id}>
                {cartItem.name} - ${cartItem.price.toFixed(2)} x{cartItem.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-5 text-center">
        <Link to="/checkoutPage"> <Button variant="success" size="lg">Continue to Payment</Button></Link>
      </div>
    </Container>
  );
};

export default MenuPage;