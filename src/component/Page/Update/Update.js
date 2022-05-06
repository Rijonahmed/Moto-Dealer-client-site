import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const params = useParams();

  return (
    <div>
      <h1>this is update: {params.updateId} </h1>

    </div>
  );
};

export default Update;