import React from 'react';

const MenuPage = () => {
  const restaurantName = 'Delizioso Italiano';
  const deliveryTime = '30-45 minutes';
  const deliveryCost = '$5.00';
  const distance = '5 km';

  const foodItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza topped with tomatoes, mozzarella, and fresh basil',
      price: '$12.99',
      imageUrl: 'https://en-chatelaine.mblycdn.com/uploads/ench/2023/07/margherita-pizza.jpg',
    },
    {
      id: 2,
      name: 'Lasagna al Forno',
      description: 'Homemade lasagna with layers of pasta, Bolognese sauce, and cheese',
      price: '$15.99',
      imageUrl: 'https://i.ytimg.com/vi/BUAAgNyi8kg/maxresdefault.jpg',
    },
    {
      id: 3,
      name: 'Tiramisu',
      description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone',
      price: '$8.99',
      imageUrl: 'https://www.nonnabox.com/wp-content/uploads/2016/01/classic_tiramisu_recipe.jpg',
    },
  ];

  const handleAddToCart = (itemId) => {
    // Implement add to cart functionality
    console.log(`Item ${itemId} added to cart`);
  };

  const handleRemoveFromCart = (itemId) => {
    // Implement remove from cart functionality
    console.log(`Item ${itemId} removed from cart`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{restaurantName}</h1>

      <div className="text-center mb-3">
        <p>Delivery Time: {deliveryTime}</p>
        <p>Delivery Cost: {deliveryCost}</p>
        <p>Distance: {distance}</p>
      </div>

      <div className="row">
        {foodItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={item.imageUrl} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Price: {item.price}</p>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    -
                  </button>
                  <span>0</span>
                  <button
                    className="btn btn-sm btn-outline-primary ms-2"
                    onClick={() => handleAddToCart(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-0">
        <button className="btn btn-primary mb-4">Continue to Payment</button>
      </div>
    </div>
  );
};

export default MenuPage;