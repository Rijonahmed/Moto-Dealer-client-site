import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Social from '../Social/Social';

const LogIn = () => {
  return (
    <div>
      <Form className='w-50 mx-auto mt-4'>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control type="email" placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Social></Social>


    </div>
  );
};

export default LogIn;