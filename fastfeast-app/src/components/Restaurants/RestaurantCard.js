import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const RestaurantCard = ({ restaurant, onSelect }) => {
  const { name, image, description, tags, green } = restaurant;

  const handleSelect = () => {
    onSelect(restaurant); // Trigger onSelect callback with selected restaurant data
  };

  return (
    <Card style={{ width: '18rem', marginBottom: '10px', marginRight:'40px', marginTop: '60px', cursor: 'pointer' }} onClick={handleSelect}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="text-success fw-bold">{green}</Card.Text>
        <div>
          {tags.map((tag) => (
            <Badge key={tag} bg="black" className="me-2">{tag}</Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;