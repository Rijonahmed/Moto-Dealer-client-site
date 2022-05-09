import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <div>

      <h2>Moto Dealer</h2>

      <Container>
        <Row>
          <Col><div>
            <h3>About US</h3>
            <p>If there's one thing you've learned about shopping for a car, it's that you'll find many of the best bargains in the used market. The problem? It's only a bargain if you find the "right" used car for you.</p>
            <p>Our inventory is just the start! We're here for you through every step of the vehicle purchase process. From your first test drive to your first service appointment, you'll find the help you need with the Moto Dealer team.</p>
          </div></Col>
          <Col><div>
            <h3>Contact US</h3>
            <address>
              <h5>Home Address:<p> Purbachal sector #2 Road#102/001</p></h5>

              <h5>Moto Dealer Office: <p>Purbachal Nila market sector #1 Road#301</p></h5>
              <h5>Email Address:</h5>
              <p>rijon036@gmail.com <br />019999999999</p>


            </address>
          </div></Col>
        </Row>

      </Container>
    </div>




  );
};

export default About;