import React, { useState } from 'react';
import { database } from '../../utils/firebase-config';
import { ref, push} from 'firebase/database';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('Eye Test');
  const [doctorOptions, setDoctorOptions] = useState([
    'Doctor 1',
    'Doctor 2',
    'Doctor 3',
  ]);
  const [selectedDoctor, setSelectedDoctor] = useState(doctorOptions[0]);
  const [dateTime, setDateTime] = useState('');
  const [loading, setLoading] = useState(false);

  const handleServiceChange = (e: { target: { value: any; }; }) => {
    const selectedService = e.target.value;
    setService(selectedService);

    // Update doctor options based on selected service
    if (selectedService === 'Eye Test') {
      setDoctorOptions(['Doctor 1', 'Doctor 2', 'Doctor 3']);
    } else if (selectedService === 'Hearing Test') {
      setDoctorOptions(['Doctor A', 'Doctor B', 'Doctor C']);
    }
  };
    // Function to clear the form after booking
    const clearForm = () => {
      setName('');
      setEmail('');
      setPhoneNumber('');
      setService('Eye Test');
      setSelectedDoctor(doctorOptions[0]);
      setDateTime('');
    };
  

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setLoading(true);

    try {
   
      const bookingData = {
        fullName: name,
        email: email,
        phoneNumber: phoneNumber,
        selectedService: service,
        selectedDoctor: selectedDoctor,
        dateTime: dateTime,
      };

      
      const bookingRef = ref(database, 'bookings');
      await push(bookingRef, bookingData);

      
      clearForm();

      console.log('Booking submitted successfully!');
    } catch (error) {
      console.error('Booking submission failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-white my-10'>
      <div className='text-center'>
        <h2 className='text-4xl my-5'>Book Appointment</h2>
      </div>
      <div className='flex justify-center'>
        <div className='w-96 shadow-2xl rounded-2xl p-12'>
          <form onSubmit={handleSubmit}>
            <fieldset className='booking-form' disabled={loading}>
              <div className='form-control w-full my-3'>
                <label className='label font-semibold' htmlFor='name'>
                  Full name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  className='input input-bordered'
                  id='name'
                  name='name'
                />
              </div>
              <div className='form-control w-full my-3'>
                <label className='label font-semibold' htmlFor='email'>
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  className='input input-bordered'
                  id='email'
                  name='email'
                />
              </div>
              <div className='form-control w-full my-3'>
                <label className='label font-semibold' htmlFor='phoneNumber'>
                  Phone number
                </label>
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type='text'
                  className='input input-bordered'
                  id='phoneNumber'
                  name='phoneNumber'
                />
              </div>
              <div className='form-control w-full my-3'>
                <label className='label font-semibold' htmlFor='service'>
                  Service
                </label>
                <select
                  value={service}
                  onChange={handleServiceChange}
                  className='input input-bordered'
                  id='service'
                  name='service'
                >
                  <option value='Eye Test'>Eye Test</option>
                  <option value='Hearing Test'>Hearing Test</option>
                </select>
              </div>
              <div className='form-control w-full my-3'>
                <label className='label font-semibold' htmlFor='doctor'>
                  Doctor
                </label>
                <select
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className='input input-bordered'
                  id='doctor'
                  name='doctor'
                >
                  {doctorOptions.map((doctor) => (
                    <option key={doctor} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-control w-full my-3'>
                <label className='label font-semibold' htmlFor='dateTime'>
                  Date and Time
                </label>
                <input
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  type='datetime-local'
                  className='input input-bordered'
                  id='dateTime'
                  name='dateTime'
                />
              </div>
              <button className='btn btn-block btn-accent mt-7' type='submit'>
                Book Appointment
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
