import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Update = () => {
  const { updateId } = useParams();
  const [update, setUpdate] = useState({});
  const [isReload, setIsReload] = useState(true)




  useEffect(() => {
    const url = `https://lit-beach-00194.herokuapp.com/inventory/${updateId}`

    fetch(url)
      .then(res => res.json())
      .then(data => setUpdate(data))
  }, [isReload])



  const handleAddQuantity = e => {
    e.preventDefault();

    const Inputquantity = e.target.quantity.value;

    const updateQuantity = (parseInt(update.quantity)) + parseInt(Inputquantity);

    const quantity = updateQuantity;

    const url = `https://lit-beach-00194.herokuapp.com/inventory/${updateId}`

    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity })


    })
      .then(res => res.json())
      .then(data => {
        alert('quantity added seccessfully');
        setIsReload(!isReload)
        e.target.reset();
      })
  }

  // deliver item


  const handleDeliver = () => {
    let delivery = parseInt(update.quantity) - 1;
    const quantity = delivery;

    const url = `https://lit-beach-00194.herokuapp.com/inventory/${updateId}`


    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity })

    })
      .then(res => res.json())
      .then(data => {

        setIsReload(!isReload)
      })

  }

  return (

    <div className='w-50 mx-auto border mt-4'>
      <div>
        <img className='w-50 my-3 rounded-circle' src={update.images} alt="" />
        <h1>Product Name: {update.name} </h1>
        <p>Price: {update.price} TK</p>
        <p>Quantity: {update.quantity}</p>
        <p><span>Description:</span>{update.text}</p>
        <div className='d-flex justify-content-around mb-4'>

          <button className='btn btn-outline-danger' onClick={handleDeliver}>Deliver</button>

          <div>
            <form onSubmit={handleAddQuantity}>
              <input type="number" name='quantity' placeholder='add Quantity' required />
              <br />

              <input className='btn btn-outline-primary mt-2' type="submit" value="Add" />
            </form>
          </div>

        </div>
      </div>


    </div>
  );
};

export default Update;