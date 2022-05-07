import React from 'react';
import { Table } from "react-bootstrap";
import useInventory from '../../Hooks/useInventory/useInventory';

const ManageItems = () => {
  const [items] = useInventory();
  return (
    <div>
      <h1>{items.length}</h1>
      <Table striped bordered hover varian="dark">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Supplier Name</th>
          </tr>
        </thead>
        <tbody>

          {

            items.map(item => <tr
              key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.supplier_name}</td>
              <td><button>Delete</button></td>
            </tr>)

          }
        </tbody>
      </Table>


    </div>
  );
};

export default ManageItems;