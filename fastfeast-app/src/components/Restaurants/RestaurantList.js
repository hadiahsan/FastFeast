import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants, onRestaurantSelect }) => {
  return (
    <Container>
      <Row>
        {restaurants.map((restaurant) => (
          <Col key={restaurant.id} onClick={() => onRestaurantSelect(restaurant)}>
            <RestaurantCard restaurant={restaurant} onSelect={onRestaurantSelect} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RestaurantList;