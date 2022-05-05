import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Social from '../Social/Social';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  let form = location.state?.from?.pathname || "/update";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );
  if (user) {
    navigate(form, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>
  }


  const handleEmailBlur = event => {
    setEmail(event.target.value)
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }
  const handleLogIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)

  }

  const navigateHandle = event => {
    navigate('/register');
  }
  let errorElement;

  if (error || error) {
    errorElement = (
      <div>
        <p className='text-danger w-50 mx-auto mt-2 text-center'>Error: {error.message}</p>
      </div>
    );
  }
  const resetPassword = async () => {

    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else {
      toast('Please Enter your email address')
    }

  }

  return (
    <div>
      <h2 className='text-primary text-center mt-3'>Please Log In</h2>
      <Form onSubmit={handleLogIn} className='w-50 mx-auto mt-3'>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
        </Form.Group>

        <Button className='w-100' variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      {errorElement}

      <p className='w-50 mx-auto text-center'>Moto Dealer Account <span className='text-primary cursor-style' onClick={navigateHandle}> New Creat Account</span></p>

      <p className='w-50 mx-auto text-center'>Forget Password<span className='text-danger cursor-style' onClick={resetPassword}> Reset Password</span></p>

      <ToastContainer />

      <Social></Social>

    </div>
  );
};

export default LogIn;