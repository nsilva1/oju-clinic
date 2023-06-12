import React from "react";
import oju_clinics from '../../assets/oju_clinic.png';
import glasses from '../../assets/Glasses (1).jpg';
import eye_test from '../../assets/eye_test.jpg';


const NavBar = () => {
  return(
        <div>
          <div className="navbar bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className=" m-1 text-[20px] hover:bg-white text-black bg-white ">Glasses</label>
        <ul tabIndex={0} className="dropdown-content menu p-0 text-green-800 bg-base-500">
          <li>  
              <a>
                <div>
                <footer className="footer p-10 bg-white  text-green-800 w-[50rem] h-[100%]">
                  <div>
                    <strong className="footer-title">Ages and Gender</strong> 
                    <a className="link link-hover">Women</a>
                    <a className="link link-hover">Men</a>
                    <a className="link link-hover">Unisex</a>
                    <a className="link link-hover">Kids</a>
                    <a className="link link-hover">Harry Potter Collection</a>

                  </div> 
                  <div>
                    <span className="footer-title">Type</span> 
                    <a className="link link-hover">Sunglasses</a>
                    <a className="link link-hover">designer lasses</a>
                    <a className="link link-hover">Designer brands</a>
                    <a className="link link-hover">Our glasses collection</a>
                    <a className="link link-hover">The LUXe Collection</a>

                  </div> 
                
                  <div className="normal-case items-center menu ">
                  <img src={glasses} alt="Company Logo"  className="w-[250px] h-[250px]  " />
                  <a className="glassesDiv btn border-none normal-case h-[1px] w-[200px] text-[#b5f44a] bg-white hover:bg-white text-[20px]"><h2>View Spec</h2></a>
                  </div>
        
                  
                
                  
                </footer>
                </div>

              </a>
          </li>
          
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
      <label tabIndex={0} className=" m-1 text-[20px] hover:bg-white  text-black bg-white ">Eye Test</label>
      <ul tabIndex={0} className="dropdown-content menu p-0 text-green-800 bg-base-500">
      <li>  
              <a>
                <div>
                <footer className="footer p-10 bg-white  text-green-800 w-[40rem] h-[100%]">
                  <div>
                    <strong className="footer-title">Services</strong> 
                    <a className="link link-hover">Book an eye test</a>
                    <a className="link link-hover">Eyecare at work</a>
                    <a className="link link-hover">OCT Scan</a>
        

                  </div> 
                  <div>
                    <span className="footer-title">Product type</span> 
                    <a className="link link-hover">Sunglasses</a>
                    <a className="link link-hover">Monthly</a>
                    <a className="link link-hover">Multifocal</a>
                    <a className="link link-hover">Toric</a>
                   

                  </div> 
          
                  <div className="normal-case items-center menu ">
                  <img src={eye_test} alt="Company Logo"  className="w-[250px] h-[250px]  " />
                  <a className="glassesDiv btn border-none normal-case h-[1px] w-[200px] text-[#b5f44a] bg-white hover:bg-white text-[20px]"><h2>Book now</h2></a>
                  </div>
        
                  
                
                  
                </footer>
                </div>

              </a>
          </li>
        </ul>
      </div>
    </ul>

    
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className=" m-1 text-[20px] hover:bg-white  text-black bg-white ">Hearing</label>
        <ul tabIndex={0} className="dropdown-content menu p-0 text-green-800 bg-base-500">
        <li>  
              <a>
                <div>
                <footer className="footer p-10 bg-white  text-green-800 w-[40rem] h-[100%]">
                  <div>
                    <strong className="footer-title">Services</strong> 
                    <a className="link link-hover">Book a free hearing test</a>
                    <a className="link link-hover">Hearing test</a>
                    <a className="link link-hover">Earwax removal</a>
                    <a className="link link-hover">Hearing aid aftercare</a>
                    <a className="link link-hover">Free online hearing test</a>


                  </div> 
                  <div>
                    <span className="footer-title">What happens in a hearing test</span> 
                    <a className="link link-hover">All about earwax</a>
                    <a className="link link-hover">All about ear health</a>
                    <a className="link link-hover">All about PRSI and Medical Cards</a>
                    <a className="link link-hover">Understanding hearing loss</a>
                    <a className="link link-hover">Download an information sheet</a>

                  </div> 
                
                  
        
                  
                
                  
                </footer>
                </div>

              </a>
          </li>
        </ul>
      </div>


      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className=" m-1 text-[20px] hover:bg-white  text-black bg-white ">Glasses</label>
        <ul tabIndex={0} className="dropdown-content menu p-0 text-green-800 bg-base-500">
        <li>  
              <a>
                <div>
                <footer className="footer p-10 bg-white  text-green-800 w-[30rem] h-[100%]">
                  <div>
                    <strong className="footer-title">Ages and Gender</strong> 
                    <a className="link link-hover">Women</a>
                    <a className="link link-hover">Men</a>
                    <a className="link link-hover">Unisex</a>
                    <a className="link link-hover">Kids</a>
                    <a className="link link-hover">Harry Potter Collection</a>

                  </div> 
                  <div>
                    <span className="footer-title">Type</span> 
                    <a className="link link-hover">Sunglasses</a>
                    <a className="link link-hover">designer lasses</a>
                    <a className="link link-hover">Designer brands</a>
                    <a className="link link-hover">Our glasses collection</a>
                    <a className="link link-hover">The LUXe Collection</a>

                  </div> 
                 
                  
        
                  
                
                  
                </footer>
                </div>

              </a>
          </li>
        </ul>
      </div>


      
      
  </div>
  <div className="navbar-end">
  <a className="appointmentDiv btn  normal-case text-white bg-[#b5f44a] hover:bg-[#b5f44a] text-[25px]"><h2>Book appointment</h2></a>
  </div>
</div>

        </div>
    )
  }

export default NavBar


