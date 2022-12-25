import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth)

  const onSubmit = data => {

    const url = 'https://moto-dealer-server-site.vercel.app/item';
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'

      },
      body: JSON.stringify(data)

    })
      .then(res => res.json())
      .then(result => {
        reset();

        toast('add item sucsess');



      })



  }
  return (
    <div className='w-50 mx-auto'>
      <h2 className="my-4">Please Add a new Item</h2>
      <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

        <input placeholder='Name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} required />

        <input placeholder='Price' className='mb-2' type="number" {...register("price")} required />
        <input placeholder='Quantity' className='mb-2' type="number" {...register("quantity")} required />
        <input placeholder='Images URL' className='mb-2' type="text" {...register("images")} required />
        <input value={user?.email} className='mb-2' type="text" {...register("email")} readOnly required />
        <textarea placeholder='Description' className='mb-2' {...register("text")} required />
        <input placeholder='Supplier Name' className='mb-2' {...register("supplier_name", { required: true, maxLength: 20 })} required />
        <input type="submit" value="Add Item" />

      </form>

      <ToastContainer />
    </div>
  );
};

export default AddItem;