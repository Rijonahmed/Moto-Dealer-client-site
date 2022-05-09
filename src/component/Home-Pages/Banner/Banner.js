import React from 'react';
import './Banner.css';
import car from '../../../images/car.png'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='d-flex justify-content-around align-items-center  container'>

      <div >
        <img src={car} alt="" />
      </div>
      <div className='me-5'>
        <h2>MOTO DEALER</h2>
        <h4>FIND YOUR NEXT CAR AT MOTO DEALER IN YOUR COMPANY</h4>
        <p>Our inventory is just the start! We're here for you through every step of the vehicle purchase process. From your first test drive to your first service appointment, you'll find the help you need with the Moto Dealer team.</p>

        <Link to='/inventory'>
          <button className='btn btn-outline-primary my-3 rounded-pill'>All Inventory</button>
        </Link>


      </div>


    </div>

  );
};

export default Banner;