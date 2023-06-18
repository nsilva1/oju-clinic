import ChooseUs from './ChooseUs';
import ContactLens from './ContactLens';

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
              <button className='btn btn-accent rounded-full m-2'>
                Book an eye test
              </button>
              <button className='btn btn-primary rounded-full m-2'>
                Book a hearing test
              </button>
            </div>
          </div>
        </div>
      </div>
      <ChooseUs />
      <ContactLens />
    </div>
  );
};

export default Home;
