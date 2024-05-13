import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Title from './Title';
import { Link, useNavigate } from 'react-router-dom';

const LogInPage = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.identifier.trim() === '' || formData.password.trim() === '') {
      setFormError('Please provide a valid email or phone number and password.');
    } else {
      setFormError('');
      console.log('Form submitted:', formData);

      // Navigate to RestaurantPage upon successful login
      navigate('/RestaurantPage');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="w-50">
        <Title />
        <h2 className="text-center mb-4" style={{ marginTop: '-20px' }}>
          <strong>Hi, Welcome Back! 👋</strong>
        </h2>

        <Form onSubmit={handleSubmit} className="px-5">
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              placeholder="Enter email or phone number"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {formError && <Alert variant="danger">{formError}</Alert>}

          <Button
            variant="danger"
            type="submit"
            className="w-100"
            disabled={!formData.identifier || !formData.password}
          >
            Log in
          </Button>
        </Form>

        <p className="text-center mt-3 text-danger">
          <Link to="/SignUpPage" className="text-danger">
            Don't have an account yet? Sign up.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;