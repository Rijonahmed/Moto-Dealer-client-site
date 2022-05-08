import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const MyItem = () => {
  const [user] = useAuthState(auth)
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user.email
    const url = `http://localhost:5000/inventory?email=${email}`
    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data))

  }, [user])

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
      <h1>{items.length}</h1>
      <Table striped bordered hover varian="dark">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Email</th>
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
              <td>{item.email}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.supplier_name}</td>

              <td >

                <button onClick={() => handleDelete(item._id)}>Delete</button></td>

            </tr>)

          }
        </tbody>
      </Table>


    </div>
  );
};

export default MyItem;