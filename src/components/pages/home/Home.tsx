import React from 'react';

const Home = () => {
  return (
    <div>
      <div id='hero-section'>
        <div className='hero min-h-screen'>
          <div className='hero-overlay bg-opacity-60'></div>
          <div className='hero-content text-center text-neutral-content'>
            <div className='max-w-md'>
              <h1 className='mb-5 text-[40px] font-bold'>
                Book Your appointment today!{' '}
              </h1>
              <p className='mb-5'>With your local optician and audiologist.</p>
              <button className='btn btn-primary'>Book an eye test</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
