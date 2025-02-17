import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import Logo from '../assets/img/logo2.svg';

function Login_1() {
  const handleLogin = async () => {
    const email = document.getElementById('formBasicEmail').value;
    const password = document.getElementById('formBasicPassword').value;

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result.message);
        // Redirect or perform other actions for successful login
      } else {
        console.error(result.error);
        // Display an error message to the user or perform other actions for failed login
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Container fluid >
      <Row>
        <Col md={6}>
          <Form className="login-form">
            <img
              src={Logo}
              alt="Logo"
              className="mb-4"
            />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Row className="mb-3"></Row>

            <Row className="justify-content-center">
            <Button variant="primary" type="button" className="w-100 custom-login-button" onClick={handleLogin}>
              Login
            </Button>

            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login_1;
