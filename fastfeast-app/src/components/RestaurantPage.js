import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NavbarComponent from './NavbarComponent'; 
import MenuPage from './MenuPage';
import { Link } from 'react-router-dom';



const RestaurantPage = () => {
  // Sample restaurant data (replace with actual data from backend or API)
  const restaurants = [
    {
      id: 1,
      name: 'Delicious Eats',
      cuisine: 'Italian',
      location: '123 Main Street, Cityville',
      description: 'Enjoy authentic Italian cuisine in a cozy atmosphere.',
      greenComment: 'This restaurant uses sustainable packaging, locally sourced ingredients, and supports initiatives to reduce food waste!',
      imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Pasta-800x533.jpg', // Placeholder image URL
      
    },
    {
      id: 2,
      name: 'Spicy Bites',
      cuisine: 'Mexican',
      location: '456 Elm Avenue, Townsville',
      description: 'Savor the flavors of Mexico with our spicy dishes.',
      imageUrl: 'https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/a-selection-of-traditional-mexican-foods-including-tamales-and-rojo-1694408828-785X440.jpg', // Placeholder image URL
    },
    {
      id: 3,
      name: 'Taste of Asia',
      cuisine: 'Asian',
      location: '789 Oak Road, Villageland',
      description: 'Experience a variety of Asian dishes from different regions.',
      imageUrl: 'https://generasian.blog/wp-content/uploads/2022/11/asian-food.webp', // Placeholder image URL
    },
  ];

  return (
    <div className="container mt-5">
      <NavbarComponent />

      <h1 className="text-center mt-0 py-20" style={{ color: 'white', fontSize: '12' }}>.</h1>


      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for restaurants..."
          aria-describedby="searchButton"
        />
        <button className="btn btn-outline-secondary" type="button" id="searchButton">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="row">
        {/* Map over restaurant data to display each restaurant */}
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
              src={restaurant.imageUrl} 
              className="card-img-top" 
              alt={restaurant.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text"><strong>Cuisine:</strong> {restaurant.cuisine}</p>
                <p className="card-text"><strong>Location:</strong> {restaurant.location}</p>
                <p className="card-text">{restaurant.description}</p>
                <p className="card-text" style={{ color: 'green' }}><strong>This restaurant uses sustainable packaging, locally sourced ingredients, and supports initiatives to reduce food waste!</strong></p>
                <Link to="/MenuPage" className="btn btn-primary">View Menu</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;