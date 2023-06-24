import React, {useState} from 'react';


export const Register = (props: { onFormSwitch: (arg0: string) => void; }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [managerCode, setManagerCode] = useState('');



    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(email);

    }


    return (
        <div className='auth-form-container'>
        <h2>Register</h2>
        <form className='register-form' onSubmit={handleSubmit}>
             <label htmlFor="id">Full name</label>
             <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Full name' id='name' name='name'/>
             <label htmlFor="email">Email</label>
             <input value={email} onChange={(e) => setEmail(e.target.value)}type="Email" placeholder='johndoe@gmail.com' id='' name='email'/>
             <label htmlFor="email">phoneNumber</label>
             <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}type="text" placeholder='(+234) 800000000' id='number' name='number'/>
             <label htmlFor="email">Manager Code</label>
             <input value={managerCode} onChange={(e) => setManagerCode(e.target.value)}type="password" placeholder='*******' id='managerCode' name='managerCode'/>
             <button className='formbtn' type='submit'>Login</button>
        </form>
        <button className='formbtn' onClick={()=> props.onFormSwitch('login')}>Already have an account? Login here.</button>
     </div>
  )
}

export default Register;