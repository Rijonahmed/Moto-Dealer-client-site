import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = 'http://localhost:5000/item';
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'

      },
      body: JSON.stringify(data)

    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
      })

  }
  return (
    <div className='w-50 mx-auto'>
      <h2>Add Item</h2>
      <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />

        <input placeholder='Price' className='mb-2' type="number" {...register("price")} />
        <input placeholder='Quantity' className='mb-2' type="number" {...register("quantity")} />
        <input placeholder='Images URL' className='mb-2' type="text" {...register("images")} />
        <textarea placeholder='Description' className='mb-2' {...register("text")} />
        <input placeholder='Supplier Name' className='mb-2' {...register("supplier_name", { required: true, maxLength: 20 })} />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;