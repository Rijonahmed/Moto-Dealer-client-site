import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Social from '../Social/Social';

const Register = () => {
  return (
    <div>
      <Form className='w-50 mx-auto mt-4'>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control type="text" placeholder="Enter email" required />
          <Form.Control type="email" placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Social></Social>


    </div>
  );
};

export default Register;