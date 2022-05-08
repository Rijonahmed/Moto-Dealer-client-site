import React from 'react';
import { Table } from "react-bootstrap";
import useInventory from '../../Hooks/useInventory/useInventory';

const ManageItems = () => {
  const [items, setItems] = useInventory();

  const handleDelete = id => {
    const prosceed = window.confirm('Are you sure?');
    if (prosceed) {
      console.log('deleteing with id ', id)
      const url = `http://localhost:5000/inventory/${id}`;
      const remaining = items.filter(item => item._id !== id);
      setItems(remaining);

      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })



    }
  }
  return (
    <div className='container'>
      <h1>Manage Items</h1>
      <Table striped bordered hover varian="dark">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Supplier Name</th>
            <th>Email</th>

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
              <td>{item.email}</td>
              <td >

                <button onClick={() => handleDelete(item._id)}>Delete</button></td>

            </tr>)

          }
        </tbody>
      </Table>


    </div>
  );
};

export default ManageItems;