import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SixItem.css'

const SixItem = ({ item }) => {
  const { _id, name, price, quantity, images, supplier_name, text } = item;
  const navigate = useNavigate();

  const handleBtnUpdate = id => {
    navigate('/inventory/' + id)

  }
  return (
    <div className='six-item-style d-flex'>
      <img src={images} alt="" />
      <span className='m-3'>
        <h3>{name}</h3>
        <p>Price:$ {price} </p>
        <p>Quantity: {quantity}</p>
        <p><big>Description: </big> {text.slice(0, 50)}</p>
        <h5>Supplier Name: {supplier_name}</h5>
        <button onClick={() => handleBtnUpdate(_id)} type="button" className="btn btn-primary">Update</button>
      </span>

    </div>
  );
};

export default SixItem;