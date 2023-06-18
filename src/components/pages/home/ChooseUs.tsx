import { BsEar, BsEyeFill } from 'react-icons/bs';
import { BiGlasses } from 'react-icons/bi';

const ChooseUs = () => {
  return (
    <div className='flex flex-col flex-1 p-8 my-5'>
      <div className='my-5'>
        <h4 className='font-normal text-center text-4xl my-3'>
          Why Choose Oju Clinic
        </h4>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-row bg-slate-100 rounded-xl p-8 m-3'>
          <div className='text-4xl mr-3'>
            <BiGlasses />
          </div>
          <div>
            <p>2 for 1 Designer frames from 70,000. Members Only</p>
            <a className='text-success underline cursor-pointer'>Read more</a>
          </div>
        </div>
        <div className='flex flex-row bg-slate-100 rounded-xl p-8 m-3'>
          <div className='text-4xl mr-3'>
            <BsEyeFill />
          </div>
          <div>
            <p>Free eye test and glasses. Members Only</p>
            <a className='text-success underline cursor-pointer'>Read more</a>
          </div>
        </div>
        <div className='flex flex-row bg-slate-100 rounded-xl p-8 m-3'>
          <div className='text-4xl mr-3'>
            <BsEar />
          </div>
          <div>
            <p>Ear wax removal service available</p>
            <a className='text-success underline cursor-pointer'>Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
