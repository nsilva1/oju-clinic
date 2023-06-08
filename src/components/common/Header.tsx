import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillBagFill } from 'react-icons/bs';
import oju_clinics1 from '../../assets/oju_clinic1.png';

const Header = () => {
  return (
  <div>

<div className='headerDiv p-2 text-blue-500 flex justify-between items-center h-[8rem]  '>
      

     

      <div className=" osondu flex justify-center"> {/* Add a container to center the image */}
        <img src={oju_clinics1} alt="Company Logo" className="w-[10rem] h-[10rem] " />
      </div>
      <strong className="menuList text-black hover:text-blueColor"></strong>
      
      
      <div className='menuList flex gap-10 '>
        <strong className="menuList text-black hover:text-blueColor text-[80%]">Log in</strong>
        <AiFillHeart className="text-[80%] text-black hover:text-blueColorsicon"/>
        <BsFillBagFill className="text-[80%] text-black hover:text-blueColorsicon"/>
        
      </div>
         
    </div>

    <div className='line w-[100%] h-1 bg-green-800'>

        </div> 
  </div>
    
    
       


        );
    }

export default Header;
