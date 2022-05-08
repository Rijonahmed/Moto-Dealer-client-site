
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import google from '../../../images/google.png'
import Loading from '../Loading/Loading';

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let form = location.state?.from?.pathname || "/";

  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className='text-danger w-50 mx-auto'>Error: {error?.message}{error?.message}</p>
      </div>
    );
  }
  if (user) {
    navigate(form, { replace: true });

  }
  if (loading) {
    return <Loading></Loading>
  }


  return (

    <div>
      <div className=' social '>
        <div className='d-flex align-items-center w-50 mx-auto'>
          <div style={{ height: '1px' }} className='bg-dark w-50'></div>
          <p className='mt-2 px-2'>Or</p>
          <div style={{ height: '1px' }} className='bg-dark w-50'></div>
        </div>
      </div>
      {errorElement}

      <button
        onClick={() => signInWithGoogle()}
        className='btn btn-primary d-block mx-auto w-50 my-2 '>
        <img className='mx-2' style={{ width: '30px' }} src={google} alt="" />
        Google Sign In</button>





    </div>
  );
};

export default Social;