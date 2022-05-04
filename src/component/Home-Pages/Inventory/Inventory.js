import React from 'react';
import useInventory from '../../Hooks/useInventory/useInventory';
import Product from '../../Page/Product/Product';
import './Inventory.css'

const Inventory = () => {
  const [items] = useInventory();
  return (
    <div>
      <h1>inventory section {items.length}</h1>
      <div className="inventory-container">
        {
          items.map(item => <Product
            key={item.id}
            item={item}

          ></Product>)
        }
      </div>


    </div>
  );
};

export default Inventory;