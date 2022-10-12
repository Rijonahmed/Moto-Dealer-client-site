import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div style={{
      backgroundImage: `url("https://cdn.asiatatler.com/asiatatler/ph/archives/30547/story-20150914181600-Hybrid-Supercars_Ferrari-0.gif")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
    }} className='d-flex justify-content-around align-items-center '>

      <div className='me-5 banner-text-color my-5'>
        <h1 >MOTO DEALER</h1>
        <h3>FIND YOUR NEXT CAR AT MOTO DEALER IN YOUR COMPANY</h3>
        <p className='p-color'>Our inventory is just the start! We're here for you through every step of the vehicle purchase process.<br /> From your first test drive to your first service appointment,  you'll find the help <br /> you need with the Moto Dealer team.</p>

        <Link to='/inventory'>
          <button className='btn btn-outline-primary my-3 rounded-pill'>All Inventory</button>
        </Link>


      </div>


    </div>

  );
};

export default Banner;