import React from 'react';
import useInventory from '../../Hooks/useInventory/useInventory';
import SixItem from '../../Page/SixItem/SixItem';

import Banner from '../Banner/Banner';
import './Home.css'


const Home = () => {
  const [items] = useInventory();
  const sixItems = items.slice(0, 6);
  return (
    <div>
      <Banner></Banner>
      <div className='six-item'>
        {
          sixItems.map(item => <SixItem
            key={item.id}
            item={item}
          ></SixItem>)
        }
      </div>





    </div>
  );
};

export default Home;