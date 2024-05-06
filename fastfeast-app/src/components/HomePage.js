import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    city: '',
    postalCode: '',
    country: '',
    province: '',
    cardNumber: '',
    expiration: '',
    cvc: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Clear form fields after submission (optional)
    setFormData({
      name: '',
      email: '',
      address: '',
      phoneNumber: '',
      city: '',
      postalCode: '',
      country: '',
      province: '',
      cardNumber: '',
      expiration: '',
      cvc: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#FF5733', marginTop: '-30px' }}>
        <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>Fast</span>
        <span style={{ fontSize: '3rem', fontWeight: 'bold', color: 'Orange' }}>Feast</span>
      </h1>

      <form onSubmit={handleSubmit}>
        
        {/* User Information Section */}
        <div className="mb-4">
          <h2>User Information</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Province/State"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Information Section */}
        <div className="mb-4">
          <h2>Payment Information</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Card Number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Expiration (MM/YY)"
                name="expiration"
                value={formData.expiration}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="CVC"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Sign Up Section */}
        <div>
          <h2>Sign Up</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Confirm Email"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/RestaurantPage" className="btn btn-primary mt-3 btn-lg">
              Create Account
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <div> Already have an account? </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomePage;