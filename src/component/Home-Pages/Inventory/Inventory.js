import React from 'react';
import { Table } from 'react-bootstrap';
import useInventory from '../../Hooks/useInventory/useInventory';
import './Inventory.css'
import { Link } from 'react-router-dom';

const Inventory = () => {

  const [items, setItems] = useInventory();
  const handleDelete = id => {
    const prosceed = window.confirm('Are you sure?');
    if (prosceed) {
      console.log('deleteing with id ', id)
      const url = `https://moto-dealer-server-site.vercel.app/inventory/${id}`;
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
    <div>

      <div className='container'>
        <h1>Manage All Inventory</h1>
        <Link to='/addItem'>
          <button className='btn btn-outline-primary my-3 rounded-pill'>add new Item</button>
        </Link>

        <Table striped bordered hover varian="dark">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Supplier Name</th>
              <th>Description</th>

            </tr>
          </thead>
          <tbody>

            {

              items.map(item => <tr
                key={item._id}>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.supplier_name}</td>
                <td>{item.text.slice(0, 15)}</td>
                <td >

                  <button className='btn btn-outline-danger' onClick={() => handleDelete(item._id)}>Delete</button></td>

              </tr>)

            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Inventory;