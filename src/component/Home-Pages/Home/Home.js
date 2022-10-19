import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../Hooks/useInventory/useInventory';
import About from '../../Page/About/About';
import Rechart from '../../Page/Rechart/Rechart';
import SixItem from '../../Page/SixItem/SixItem';

import Banner from '../Banner/Banner';
import './Home.css'


const Home = () => {
  const navigate = useNavigate();

  const [items] = useInventory();
  const sixItems = items.slice(0, 6);
  if (!items) {
    navigate('/loading');

  }




  return (
    <div>
      <Banner></Banner>

      <h2 className='my-4 fw-bold'><span className='text-primary'>Inventory</span> Product </h2>
      <div className='six-item container'>
        {



          sixItems.map(item => <SixItem
            key={item._id}
            item={item}


          ></SixItem>)
        }
      </div>
      <Rechart></Rechart>
      <About></About>





    </div>
  );
};

export default Home;