import React from 'react';
import './SixItem.css'

const SixItem = ({ item }) => {
  const { name, email } = item
  return (
    <div className='six-item-style'>
      <h2>{name}</h2>
      <p>{email}</p>
      <button>check Out</button>
      <button>Delete</button>

    </div>
  );
};

export default SixItem;