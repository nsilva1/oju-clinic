import React, {useState} from 'react';

export const Login = (props: { onFormSwitch: (arg0: string) => void; }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(email);
  }
  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
       <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor="email">Staff Id</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id='email' name='email'/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder='********' id='email' name='password'/>
            <button className='formbtn'  type='submit'>Login</button>
       </form>
       <button className='formbtn' onClick={()=> props.onFormSwitch('register') }> Dont have an account? Register here</button>
    </div>
 
  )
}

export default Login;