import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyFooter() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Informazioni</h5>
            <p>Per maggiori info contattaci.</p>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: +123456789</p>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <p>Links to social media profiles.</p>
          </Col>
          <Col md={3}>
            <h5>copyright</h5>
            <p>Info copyright </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;