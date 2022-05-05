import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div style={{ wedth: '500px' }} className='w-50 mx-auto'>
      <Spinner animation="border" variant="primary" />

    </div>
  );
};

export default Loading;