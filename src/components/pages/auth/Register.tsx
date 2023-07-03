import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../utils/firebase-config';
import { collection, doc, setDoc } from 'firebase/firestore';

export const Register = (props: { onFormSwitch: (arg0: string) => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [managerCode, setManagerCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );

      const { user } = userCredential;

      await setDoc(doc(collection(firestore, 'users'), user.uid), {
        fullName: name,
        phoneNumber: phoneNumber,
        managerCode: managerCode,
      });
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-white my-10'>
      <div className='text-center'>
        <h2 className='text-4xl my-5'>Register</h2>
      </div>
      <div className='flex justify-center'>
        <div className='w-96 shadow-2xl rounded-2xl p-12'>
          <form onSubmit={handleSubmit}>
            <fieldset className='register-form' disabled={loading}>
              <div className='form-control w-full my-3'>
                <label className='label font-semibold' htmlFor='id'>
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
                  type='Email'
                  className='input input-bordered'
                  id='email'
                  name='email'
                />
              </div>
              <div className='form-control w-full my-3'>
                <label className='label font-semibold' htmlFor='pass'>
                  Password
                </label>
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type='password'
                  className='input input-bordered'
                  id='password'
                  name='password'
                />
              </div>
              <div className='form-control w-full my-3'>
                <label className='label font-semibold' htmlFor='email'>
                  Phone number
                </label>
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type='text'
                  className='input input-bordered'
                  id='number'
                  name='number'
                />
              </div>
              <div className='form-control w-full my-3'>
                <label className='label font-semibold' htmlFor='email'>
                  Manager Code
                </label>
                <input
                  value={managerCode}
                  onChange={(e) => setManagerCode(e.target.value)}
                  type='password'
                  className='input input-bordered'
                  id='managerCode'
                  name='managerCode'
                />
              </div>
              <button className='btn btn-block btn-accent mt-7' type='submit'>
                Register
              </button>
            </fieldset>
          </form>
          <button
            className='btn btn-link mt-8'
            onClick={() => props.onFormSwitch('login')}
          >
            Already have an account? Login here.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
