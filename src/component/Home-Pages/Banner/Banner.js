import React from 'react';
import './Banner.css';
import car from '../../../images/car.png'

const Banner = () => {
  return (
    <div className='d-flex justify-content-around align-items-center '>

      <div >
        <img src={car} alt="" />
      </div>
      <div className='me-5'>
        <h2>MOTO DEALER</h2>
      </div>


    </div>
  );
};

export default Banner;