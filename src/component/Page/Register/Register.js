import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Social from '../Social/Social';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleNameBlur = e => {
    setName(e.target.value);
  }
  const handleEmailBlur = e => {
    setEmail(e.target.value);
  }
  const handlePasswordBlur = e => {
    setpassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()


  }
  return (
    <div>
      <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-4'>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control className='mb-3' onBlur={handleNameBlur} type="text" placeholder="Enter Name" required />
          <Form.Control className='md-3' onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Control className='mb-3' onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
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