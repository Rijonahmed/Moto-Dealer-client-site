import React from 'react';
import './Product.css'

const Product = ({ item }) => {
  const { name, email } = item;

  return (
    <div className='product'>
      <h1>{name}</h1>
      <p>{email}</p>




    </div>
  );
};

export default Product;