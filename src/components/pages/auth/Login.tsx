import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase-config';

export const Login = (props: { onFormSwitch: (arg0: string) => void }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = await signInWithEmailAndPassword(auth, email, pass);
      console.log(user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-white my-10'>
      <div className='text-center'>
        <h2 className='text-4xl my-5'>Login</h2>
      </div>
      <div className='flex justify-center'>
        <div className='w-96 shadow-2xl rounded-2xl p-12'>
          <form onSubmit={handleSubmit}>
            <fieldset disabled={loading}>
              <div className='form-control w-full my-3'>
                <label className='label font-semibold'>Staff ID</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='text'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control w-full my-3'>
                <label className='label font-semibold'>Password</label>
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type='password'
                  className='input input-bordered'
                  required
                />
              </div>
              <button className='btn btn-block btn-accent mt-5' type='submit'>
                Login
              </button>
              <div className='mt-10'>
                <button
                  className='btn btn-link'
                  onClick={() => props.onFormSwitch('register')}
                >
                  Don't have an account? Register here
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
