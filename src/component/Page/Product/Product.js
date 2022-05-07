import React from 'react';
import './Product.css'

const Product = ({ item }) => {
  const { name, price, quantity, supplier_name, text } = item;

  return (
    <div className='product'>
      <h4>{name}</h4>
      <h4>{price}</h4>
      <h4>{quantity}</h4>
      <h4>{supplier_name}</h4>
      <h4>{text}</h4>


    </div>
  );
};

export default Product;