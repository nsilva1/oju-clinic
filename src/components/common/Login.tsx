import React, { useState } from 'react';

export const Login = (props: { onFormSwitch: (arg0: string) => void }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Logging in...');
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
    }

    setLoading(false);
  };

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className='login-form' disabled={loading}>
          <label htmlFor='email'>Staff ID</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='youremail@gmail.com'
            id='email'
            name='email'
          />
          <label htmlFor='password'>Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type='password'
            placeholder='********'
            id='password'
            name='password'
          />
          <button className='formbtn' type='submit'>
            Login
          </button>
        </fieldset>
      </form>
      <button
        className='formbtn'
        onClick={() => props.onFormSwitch('register')}
      >
        Don't have an account? Register here
      </button>
    </div>
  );
};

export default Login;
