
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from './Firebase-config';
import { collection, doc, setDoc } from "firebase/firestore"; 


export const Register = (props: { onFormSwitch: (arg0: string) => void; }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [managerCode, setManagerCode] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );

      const { user } = userCredential;
      // Use the collection() method directly from the imported module
      await setDoc(doc(collection(firestore, 'users'), user.uid), {
        fullName: name,
        phoneNumber: phoneNumber,
        managerCode: managerCode,
      });
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Registering user...');
      // Simulate a delay for demonstration purposes
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Registration failed:', error);
    }

    setLoading(false);
  };

  return (
    <div className='auth-form-container'>
      <h2>Register</h2>
      <form  onSubmit={handleSubmit}>
        <fieldset className='register-form' disabled={loading}>
          <label htmlFor="id">Full name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Full name' id='name' name='name' />
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder='johndoe@gmail.com' id='email' name='email' />
          <label htmlFor="pass">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********' id='password' name='password' />
          <label htmlFor="email">Phone number</label>
          <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder='(+234) 800000000' id='number' name='number' />
          <label htmlFor="email">Manager Code</label>
          <input value={managerCode} onChange={(e) => setManagerCode(e.target.value)} type="password" placeholder='*******' id='managerCode' name='managerCode' />
          <button className='formbtn' type='submit' onClick={register}>Register</button>
        </fieldset>
      </form>
      <button className='formbtn' onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
};

export default Register;