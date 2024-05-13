import React, { useState } from 'react';
import NavbarComponent from './Navbar';
import { Container } from 'react-bootstrap';
import RestaurantList from './Restaurants/RestaurantList';
import { useNavigate } from 'react-router-dom';

const RestaurantPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const navigate = useNavigate();

  const handleRestaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);

    if (restaurant.name === 'Burger Haven') {
      navigate('/MenuPage');
    }

  };

  const restaurants = [
    {
      id: 1,
      name: 'Healthy Bites',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      description: 'Delicious and healthy food options',
      tags: ['Vegan', 'Vegetarian', 'Gluten-Free'],
      green: 'This restaurant uses sustainable packaging, locally sourced ingredients, and supports initiative to reduce food waste!'
    },
    {
      id: 2,
      name: 'Spice Paradise',
      image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS',
      description: 'Authentic Indian cuisine',
      tags: ['Halal', 'Vegetarian'],
      green: 'This restaurant uses sustainable packaging, locally sourced ingredients, and supports initiative to reduce food waste!'

    },
    {
      id: 3,
      name: 'Burger Haven',
      image: 'https://images.cutco.com/learn/2021/stuffed-grilled-burgers-cover-6-l.jpg',
      description: 'Gourmet burgers and fries',
      tags: ['Halal'],
      green: 'This restaurant uses sustainable packaging, locally sourced ingredients, and supports initiative to reduce food waste!'
    },
    {
      id: 4,
      name: 'Pizza Italia',
      image: 'https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?k=20&m=1220017909&s=612x612&w=0&h=PYV24uLjiGSd-kw5ArdAiQIcy5E-CmL2pznQo35kcHw=',
      description: 'Classic Italian pizzas and pasta',
      tags: ['Vegetarian'],
      green: 'This restaurant uses sustainable packaging, locally sourced ingredients, and supports initiative to reduce food waste!'

    },
    {
      id: 5,
      name: 'Sushi Delight',
      image: 'https://media.istockphoto.com/id/1218016941/photo/composition-with-delicious-sushi-rolls-japanese-food.jpg?s=612x612&w=0&k=20&c=jmFC9cqBPSXzKhL7o2hppD4i8Oo8qY5QwuXQujJsob0=',
      description: 'Fresh and delicious sushi rolls',
      tags: ['Gluten-Free'],
      green: 'This restaurant uses sustainable packaging, locally sourced ingredients, and supports initiative to reduce food waste!'

    },
    {
      id: 6,
      name: 'Taco Fiesta',
      image: 'https://media.istockphoto.com/id/542331706/photo/homemade-spicy-shrimp-tacos.jpg?s=612x612&w=0&k=20&c=fxx5deD9YgseQfLc3IFZpoMfwdq8Fb7jYimAjITs6TA=',
      description: 'Authentic tacos and burritos',
      tags: ['Gluten-Free', 'Halal'],
      green: 'This restaurant uses sustainable packaging, locally sourced ingredients, and supports initiative to reduce food waste!'
    },
    {
      id: 10,
      name: 'Yallah Shawarma',
      image: 'https://www.halfbakedharvest.com/wp-content/uploads/2020/07/Grilled-Chicken-Shawarma-with-Golden-Butter-Fries-and-Garlic-Sauce-6-700x467.jpg',
      description: 'Delicious Middle Eastern shawarma wraps with seasoned meats and vegetables',
      tags: ['Halal', 'Middle Eastern']
    },
    {
      id: 8,
      name: 'French Bistro',
      image: 'https://www.themanual.com/wp-content/uploads/sites/9/2021/06/french-cuisine-featured-image.jpg?fit=1340%2C782&p=1',
      description: 'Classic French dishes such as coq au vin, boeuf bourguignon, and escargot',
      tags: ['Vegetarian']
    },
    {
      id: 7,
      name: 'Trattoria',
      image: 'https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg',
      description: 'Traditional Italian cuisine with pasta, pizza, and risotto dishes',
      tags: ['Vegetarian', 'Gluten-Free']
    },
    
    
  ];

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <NavbarComponent />
            <Container className="py-4" style={{ marginBottom: '-450px' }}>
              <h1 className="text-center mb-4 text-white"> Explore Restaurants Near You </h1>
                <RestaurantList restaurants={restaurants} onRestaurantSelect={handleRestaurantSelect} />
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;