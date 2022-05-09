import React from 'react';
import useInventory from '../../Hooks/useInventory/useInventory';
import About from '../../Page/About/About';
import Rechart from '../../Page/Rechart/Rechart';
import SixItem from '../../Page/SixItem/SixItem';

import Banner from '../Banner/Banner';
import './Home.css'


const Home = () => {
  const [items] = useInventory();
  const sixItems = items.slice(0, 6);
  return (
    <div>
      <Banner></Banner>
      <hr />
      <h2 className='my-3'>Inventory Product </h2>
      <div className='six-item container'>
        {
          sixItems.map(item => <SixItem
            key={item.id}
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