import React from 'react';
import useInventory from '../../Hooks/useInventory/useInventory';

const Inventory = () => {
  const [items] = useInventory();
  return (
    <div>
      <h1>inventory section {items.length}</h1>

    </div>
  );
};

export default Inventory;