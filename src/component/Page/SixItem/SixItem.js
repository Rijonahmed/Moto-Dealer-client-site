import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SixItem.css'

const SixItem = ({ item }) => {
  const { id, name, price, quantity, images, supplier_name, text } = item;
  const navigate = useNavigate();

  const handleBtnUpdate = id => {
    navigate('/update/' + id)

  }
  return (
    <div className='six-item-style d-flex'>
      <img src={images} alt="" />
      <span className='m-3'>
        <h2>Name: {name}</h2>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p>Description: {text}</p>
        <h5>Supplier Name: {supplier_name}</h5>
        <button onClick={() => handleBtnUpdate(id)} type="button" class="btn btn-primary">Update</button>
      </span>

    </div>
  );
};

export default SixItem;