import { AiFillHeart } from 'react-icons/ai';
import { BsFillBagFill } from 'react-icons/bs';
import oju_clinic from '../../assets/oju_clinic-bg.png';
import { IoIosPin } from 'react-icons/io';

const Header = () => {
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start font-semibold hidden md:flex'>
          <IoIosPin className='mr-2' /> Find a store
        </div>

        <div className='navbar-center'>
          <img src={oju_clinic} alt='Company Logo' className='w-28 h-28' />
        </div>

        <div className='navbar-end hidden md:flex'>
          <button className='btn btn-ghost'>Log in</button>
          <button className='btn btn-ghost btn-circle'>
            <AiFillHeart className='text-[80%] text-black hover:text-blueColorsicon' />
          </button>
          <button className='btn btn-ghost btn-circle'>
            <BsFillBagFill className='text-[80%] text-black hover:text-blueColorsicon' />
          </button>
        </div>
      </div>

      <div className='line w-[100%] h-1 bg-green-800'></div>
    </div>
  );
};

export default Header;
