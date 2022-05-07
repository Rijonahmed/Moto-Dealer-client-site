import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { updateId } = useParams();

  return (
    <div>
      <h1>this is update: {updateId} </h1>

    </div>
  );
};

export default Update;