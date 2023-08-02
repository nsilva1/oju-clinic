import { useState } from 'react';
import glasses from '../../assets/Glasses_1.jpg';
import eye_test from '../../assets/eye_test.jpg';
import Header from './Header';
import menu from '../../assets/menu.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Header />
      <div className='navbar bg-white'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label
              tabIndex={0}
              className='btn btn-neutral lg:hidden'
              onClick={() => setToggle((prev) => !prev)}
            >
              <img src={menu} alt='Mobile Menu' className='h-10 w-10' />
            </label>
            {toggle && (
              <div className='p-6 bg-white absolute top-20 left-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar z-10'>
                <ul
                  tabIndex={0}
                  className='list-none flex flex-col justify-end items-center flex-1'
                >
                  <li className='footer-title'>About Us</li>
                  <li className='footer-title'>Glasses</li>
                  <li className='footer-title'>Eye Test</li>
                  <li className='footer-title'>Hearing</li>
                  <li className='footer-title'>Log In</li>
                  <li className='footer-title'>Online Store</li>
                  <li className='mt-3'>
                    <button className='btn btn-neutral'>
                      Book Appointment
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 '>
            <li className='mx-3 text-[20px] text-black'>About us</li>
            <div className='dropdown dropdown-hover'>
              <label tabIndex={0} className='mx-3 text-[20px] text-black'>
                Glasses
              </label>
              <ul
                tabIndex={0}
                className='dropdown-content menu p-0 text-green-800 bg-base-500'
              >
                <li>
                  <a>
                    <div>
                      <footer className='footer p-10 bg-white  text-green-800 w-[50rem] h-[100%]'>
                        <div>
                          <strong className='footer-title'>
                            Ages and Gender
                          </strong>
                          <a className='link link-hover'>Women</a>
                          <a className='link link-hover'>Men</a>
                          <a className='link link-hover'>Unisex</a>
                          <a className='link link-hover'>Kids</a>
                        </div>
                        <div>
                          <span className='footer-title'>Type</span>
                          <a className='link link-hover'>Sunglasses</a>
                          <a className='link link-hover'>Designer glasses</a>
                          <a className='link link-hover'>Designer brands</a>
                          <a className='link link-hover'>
                            Our Locally manufactured Glasses collection
                          </a>
                        </div>

                        <div className='normal-case items-center menu'>
                          <img
                            src={glasses}
                            alt='Company Logo'
                            className='w-[250px] h-[250px]'
                          />

                          <button className='btn bg-brand text-white hover:bg-green-300'>
                            View Spec
                          </button>
                        </div>
                      </footer>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className='dropdown dropdown-hover'>
              <label
                tabIndex={0}
                className='mx-3 text-[20px] hover:bg-white  text-black bg-white '
              >
                Eye Test
              </label>
              <ul
                tabIndex={0}
                className='dropdown-content menu p-0 text-green-800 bg-base-500'
              >
                <li>
                  <a>
                    <div>
                      <footer className='footer p-10 bg-white  text-green-800 w-[40rem] h-[100%]'>
                        <div>
                          <strong className='footer-title'>Services</strong>
                          <a className='link link-hover'>Book an eye test</a>
                          <a className='link link-hover'>Eyecare at work</a>
                          <a className='link link-hover'>OCT Scan</a>
                        </div>
                        <div>
                          <span className='footer-title'>Product type</span>
                          <a className='link link-hover'>Sunglasses</a>
                          <a className='link link-hover'>Monthly</a>
                          <a className='link link-hover'>Multifocal</a>
                          <a className='link link-hover'>Toric</a>
                        </div>

                        <div className='normal-case items-center menu'>
                          <img
                            src={eye_test}
                            alt='Company Logo'
                            className='w-[250px] h-[250px]'
                          />
                          <button className='btn bg-brand text-white hover:bg-green-300'>
                            Book Now
                          </button>
                        </div>
                      </footer>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className='dropdown dropdown-hover'>
              <label
                tabIndex={0}
                className='mx-3 text-[20px] hover:bg-white  text-black bg-white '
              >
                Hearing
              </label>
              <ul
                tabIndex={0}
                className='dropdown-content menu p-0 text-green-800 bg-base-500'
              >
                <li>
                  <a>
                    <div>
                      <footer className='footer p-10 bg-white  text-green-800 w-[40rem] h-[100%]'>
                        <div>
                          <strong className='footer-title'>Services</strong>
                          <a className='link link-hover'>
                            Book a free hearing test
                          </a>
                          <a className='link link-hover'>Hearing test</a>
                          <a className='link link-hover'>Earwax removal</a>
                          <a className='link link-hover'>
                            Hearing aid aftercare
                          </a>
                          <a className='link link-hover'>
                            Free online hearing test
                          </a>
                        </div>
                        <div>
                          <span className='footer-title'>
                            What happens in a hearing test
                          </span>
                          <a className='link link-hover'>All about earwax</a>
                          <a className='link link-hover'>
                            All about ear health
                          </a>
                          <a className='link link-hover'>
                            All about PRSI and Medical Cards
                          </a>
                          <a className='link link-hover'>
                            Understanding hearing loss
                          </a>
                          <a className='link link-hover'>
                            Download an information sheet
                          </a>
                        </div>
                      </footer>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <li className='mx-3 text-[20px] text-black'>Online store</li>
          </ul>
        </div>
        <div className='navbar-end'>
        <Link to="/booking-form"  className='btn normal-case text-white bg-[#b5f44a] hover:bg-white hover:text-brand text-[18px] rounded-full'>
            <h2>Book Appointment</h2>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
