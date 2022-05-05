import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';

const Register = () => {
  const [displayName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

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
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    navigate('/update')

  }
  const navigateHandleLogin = () => {
    navigate('/login');

  }

  if (loading || updating) {
    return <Loading></Loading>
  }
  if (user) {

  }

  let errorElement;
  if (updateError || error) {
    errorElement = (
      <div>
        <p className='text-danger w-50 mx-auto mt-2 text-center'>Error: {error.message}</p>
      </div>
    );
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

      <p className='text-center'>Already Creat account  <span className='text-primary cursor-style' onClick={navigateHandleLogin}> Log In</span></p>

      {errorElement}

      <Social></Social>


    </div>
  );
};

export default Register;