import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Title from './Title';
import { Link } from 'react-router-dom';


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ firstName: '', lastName: '', email: '', password: '' });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="w-50">
      <Title></Title>
      <h2 className="text-center mb-4" style={{marginTop:"-20px"}}><strong>Create an Account</strong></h2>

        <Form onSubmit={handleSubmit} className="px-5">

          <Form.Group className="mb-4">
            <Form.Control
              type="full-name"
              placeholder="Full Name"
              name="full-name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="fullname"
              placeholder="Enter phone number or email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          

          <Form.Group className="mb-4">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Link to="/UserInfo">
          <Button variant="danger" type="submit" className="w-100"> <b>Sign up</b> </Button>
          </Link>

        </Form>

        <p className="text-center mt-3 text-danger">
          <Link to="/" className="text-danger">Already have an account? Log in.</Link>
        </p>

        <p className="text-center">By creating an account, you are agreeing to our <Link to="/" className="text-danger"><u>Terms of Use</u></Link> and our <Link to="/" className="text-danger"><u>Privacy Policy.</u></Link></p>

      </div>
    </div>
  );
};

export default SignUpPage;