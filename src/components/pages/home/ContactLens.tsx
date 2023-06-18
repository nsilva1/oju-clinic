import { RiEye2Line } from 'react-icons/ri';

const ContactLens = () => {
  return (
    <div className='bg-slate-200 p-12'>
      <div className='flex flex-row justify-center items-center my-5'>
        <div className='mr-3 text-8xl'>
          <RiEye2Line />
        </div>
        <div>
          <h3 className='text-2xl font-bold'>
            Try our new and improved contact lens
          </h3>
          <p>Get your contact lens using one of our monthly payment pans</p>
          <a className='text-success underline cursor-pointer'>Read more</a>
        </div>
      </div>
    </div>
  );
};

export default ContactLens;
