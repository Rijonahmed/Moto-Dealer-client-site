import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Update = () => {
  const { updateId } = useParams();
  const [update, setUpdate] = useState({});
  const [isReload, setIsReload] = useState(true)




  useEffect(() => {
    const url = `http://localhost:5000/inventory/${updateId}`

    fetch(url)
      .then(res => res.json())
      .then(data => setUpdate(data))
  }, [isReload])




  const handleAddQuantity = e => {
    e.preventDefault();

    const quantity = e.target.quantity.value;




    const updateQuantity = (parseInt(update.quantity)) + parseInt(quantity);

    const newUpdateQuantity = updateQuantity;
    console.log('mot quantity', newUpdateQuantity)


    const url = `http://localhost:5000/inventory/${updateId}`
    console.log(url)


    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newUpdateQuantity })


    })
      .then(res => res.json())
      .then(data => {
        console.log('success', data)
        alert('quantity added seccessfully');
        setIsReload(!isReload)


        e.target.reset();
      })
  }

  // deliver item


  const handleDeliver = () => {
    const delivery = (update.quantity) - 1;
    const newDelivery = delivery;
    console.log(newDelivery)

    const url = `http://localhost:5000/inventory/${updateId}`
    console.log(url)

    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newDelivery })

    })
      .then(res => res.json())
      .then(data => {
        console.log('success', data)
        setIsReload(!isReload)
      })

  }

  return (

    <div className='w-50 mx-auto border mt-4'>
      <div>
        <img className='w-50 my-3 rounded-circle' src={update.images} alt="" />
        <h1>this is update: {update.name} </h1>
        <p>Price: {update.price} TK</p>
        <p>Quantity: {update.quantity}</p>
        <p><span>Description:</span>{update.text}</p>
        <div className='d-flex justify-content-around mb-4'>

          <button onClick={handleDeliver}>Deliver</button>

          <div>
            <form onSubmit={handleAddQuantity}>
              <input type="number" name='quantity' placeholder='add Quantity' required />

              <input type="submit" value="Add" />
            </form>
          </div>

        </div>
      </div>


    </div>
  );
};

export default Update;