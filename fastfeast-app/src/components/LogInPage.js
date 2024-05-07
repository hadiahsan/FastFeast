import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Title from './Title';
import { Link, useNavigation } from 'react-router-dom';

const LogInPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Implement your sign-up logic here, e.g., send data to server
    // Reset form after submission (optional)
    setFormData({ firstName: '', lastName: '', email: '', password: '' });
  };

  return (

    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="w-100">
      <Title></Title>
      <h2 className="text-center mb-4">Log in to Your Account</h2>

        <Form onSubmit={handleSubmit} className="px-5">

          <Form.Group className="mb-4">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          
          <Button variant="danger" type="submit" className="w-100"> Log in </Button>

        </Form>
        <p className="text-center mt-2 text-danger">
          <Link to="/SignUpPage" className="text-danger">No account yet? Sign up.</Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;