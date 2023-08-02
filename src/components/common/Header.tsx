import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillBagFill } from 'react-icons/bs';
import oju_clinic from '../../assets/oju_clinic-bg.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start font-semibold hidden md:flex'>
          <img className='w-24 h-24' src={oju_clinic} alt='' />
        </div>

        <div className='navbar-center md:hidden'>
          <h3 className='text-2xl text-accent-content'>Oju Eye Clinic</h3>
        </div>

        <div className='navbar-end hidden md:flex'>
          <div>
            <Link to="/form" className='btn btn-ghost'>LOG IN</Link>
          </div>
          
          <button className='btn btn-ghost btn-circle'>
            <AiFillHeart className='text-[80%] text-black hover:text-blueColorsicon' />
          </button>
          <button className='btn btn-ghost btn-circle'>
            <BsFillBagFill className='text-[80%] text-black hover:text-blueColorsicon' />
          </button>
        </div>
      </div>

      {/* <div className='line w-[100%] h-1 bg-green-800'></div> */}
    </div>
  );
};

export default Header;
